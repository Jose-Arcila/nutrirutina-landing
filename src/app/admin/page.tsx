'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import {
  Users,
  Plus,
  Trash2,
  LogOut,
  Search,
  CheckCircle,
  Copy,
  RefreshCw,
  Lock,
  AlertCircle,
  Check,
  FileText,
  UserPlus
} from 'lucide-react';

interface Referral {
  id: number;
  uuid: string;
  name: string;
  code: string;
  number: number | null;
  created_at: string;
}

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Dashboard Data
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [bulkCopied, setBulkCopied] = useState(false);

  // New Referrals Input (Commas separated)
  const [namesInput, setNamesInput] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        fetchReferrals();
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchReferrals();
      } else {
        setReferrals([]);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchReferrals = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('referrals')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReferrals(data || []);
    } catch (err: any) {
      console.error('Error fetching referrals:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (err: any) {
      setAuthError(err.message || 'Ocurrió un error en la autenticación.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // Helper to generate a unique 7-digit random code
  const generate7DigitCode = () => {
    return Math.floor(1000000 + Math.random() * 9000000).toString();
  };

  const handleCreateReferrals = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess(false);

    if (!namesInput.trim()) {
      setFormError('Por favor ingresa al menos un nombre.');
      return;
    }

    setCreating(true);
    try {
      // Split names by commas and trim them
      const names = namesInput
        .split(',')
        .map(n => n.trim())
        .filter(n => n.length > 0);

      if (names.length === 0) {
        setFormError('No se encontraron nombres válidos.');
        setCreating(false);
        return;
      }

      // Generate random unique 7-digit code for each referral
      const newEntries = names.map(name => {
        const code = generate7DigitCode();
        return {
          name,
          code,
          number: 0 // Default starting value
        };
      });

      const { error } = await supabase.from('referrals').insert(newEntries);

      if (error) throw error;

      setFormSuccess(true);
      setNamesInput('');
      fetchReferrals();
    } catch (err: any) {
      setFormError(err.message || 'Error al guardar los referidos.');
    } finally {
      setCreating(false);
    }
  };

  const deleteReferral = async (id: number) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este referido?')) return;
    setActionLoading(id);
    try {
      const { error } = await supabase.from('referrals').delete().eq('id', id);
      if (error) throw error;

      setReferrals(prev => prev.filter(ref => ref.id !== id));
      setSelectedIds(prev => prev.filter(selectedId => selectedId !== id));
    } catch (err: any) {
      alert('Error al eliminar: ' + err.message);
    } finally {
      setActionLoading(null);
    }
  };

  const copyToClipboard = (code: string, id: number) => {
    const link = `https://www.nutrirutina.co?referido=${code}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const copyBulkLinks = () => {
    const selectedReferrals = referrals.filter(r => selectedIds.includes(r.id));
    const textToCopy = selectedReferrals
      .map(r => `${r.name}: https://www.nutrirutina.co?referido=${r.code}`)
      .join('\n');

    navigator.clipboard.writeText(textToCopy).then(() => {
      setBulkCopied(true);
      setTimeout(() => setBulkCopied(false), 2000);
    });
  };

  const toggleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(selectedId => selectedId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredReferrals.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredReferrals.map(r => r.id));
    }
  };

  const filteredReferrals = referrals.filter(ref =>
    ref.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ref.code.includes(searchQuery)
  );

  if (!session) {
    return (
      <div className="min-h-screen bg-[#0f1411] text-zinc-100 flex flex-col justify-center items-center p-6 relative overflow-hidden font-sans">
        {/* Abstract Background Glows */}
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

        <div className="w-full max-w-md bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 shadow-2xl relative z-10">
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Panel de Control</h1>
            <p className="text-sm text-zinc-400 text-center">
              Ingresa tus credenciales para administrar los enlaces de referidos de Nutrirutina.
            </p>
          </div>

          <form onSubmit={handleAuth} className="flex flex-col gap-5">
            {authError && (
              <div className="flex gap-2 items-start bg-red-950/30 border border-red-900/50 rounded-xl p-4 text-xs text-red-400">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{authError}</span>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Correo Electrónico</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@nutrirutina.co"
                className="bg-zinc-950 border border-zinc-800 focus:border-primary rounded-xl px-4 py-3 text-sm focus:outline-none transition-all placeholder:text-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Contraseña</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-zinc-950 border border-zinc-800 focus:border-primary rounded-xl px-4 py-3 text-sm focus:outline-none transition-all placeholder:text-zinc-600"
              />
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="mt-2 flex items-center justify-center gap-2 bg-primary text-zinc-950 font-semibold py-3.5 rounded-xl hover:opacity-90 transition-all cursor-pointer disabled:opacity-50"
            >
              {authLoading ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                'Iniciar Sesión'
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbfbfa] dark:bg-[#0f1411] text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">
      {/* Top Header */}
      <header className="border-b border-zinc-200/60 dark:border-zinc-800/80 backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">Admin Referidos</h1>
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Nutrirutina Link Manager</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-xs text-zinc-500 font-medium">
              Admin: <span className="text-zinc-700 dark:text-zinc-300">{session.user.email}</span>
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-4 py-2 rounded-xl text-xs font-semibold transition-all border border-zinc-200/50 dark:border-zinc-700/50 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-8">
        
        {/* Form and Quick info Section */}
        <section className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Create Referral Form */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-sm font-bold mb-3 flex items-center gap-2 text-zinc-800 dark:text-zinc-100">
              <UserPlus className="w-4.5 h-4.5 text-primary" />
              Crear Nuevos Referidos
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
              Ingresa uno o varios nombres separados por comas. El sistema generará automáticamente un código único de 7 dígitos para cada uno.
            </p>

            <form onSubmit={handleCreateReferrals} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <textarea
                  rows={2}
                  required
                  value={namesInput}
                  onChange={e => {
                    setNamesInput(e.target.value);
                    setFormError('');
                    setFormSuccess(false);
                  }}
                  placeholder="Ej. Juan Pérez, Viviana Ortiz, María José"
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-primary rounded-xl px-4 py-3 text-sm focus:outline-none transition-all resize-none placeholder:text-zinc-400"
                />
              </div>

              {formError && (
                <div className="text-xs font-semibold text-red-500 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  {formError}
                </div>
              )}

              {formSuccess && (
                <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  ¡Referidos creados y agregados al listado exitosamente!
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={creating}
                  className="bg-primary text-white dark:text-zinc-950 px-6 py-2.5 rounded-xl text-xs font-bold hover:opacity-90 cursor-pointer transition-all disabled:opacity-50"
                >
                  {creating ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    'Generar Enlaces de Referido'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Guidelines info card */}
          <div className="bg-primary-light/40 dark:bg-primary-light/5 border border-primary/10 p-6 rounded-2xl">
            <h3 className="text-xs font-bold text-primary dark:text-emerald-400 uppercase tracking-wider mb-2">Funcionamiento de Enlaces</h3>
            <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-2.5 list-disc pl-4">
              <li>El sistema genera códigos numéricos aleatorios e inmutables de 7 dígitos.</li>
              <li>Al compartir el enlace generado, el cliente accederá con el parámetro de consulta <code className="bg-white dark:bg-zinc-950 border px-1 py-0.5 rounded text-primary">?referido=código</code>.</li>
              <li>Los botones de WhatsApp en la página principal capturan el código y añaden automáticamente la referencia a la conversación del cliente.</li>
            </ul>
          </div>
        </section>

        {/* Filters and List */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/50 rounded-2xl shadow-sm overflow-hidden flex flex-col gap-4 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nombre o código..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-primary rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none transition-all placeholder:text-zinc-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => fetchReferrals()}
                className="p-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-xl transition-all border border-zinc-200/50 dark:border-zinc-700/50 cursor-pointer"
                title="Actualizar datos"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Table list */}
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-3 text-zinc-400">
              <RefreshCw className="w-8 h-8 animate-spin text-primary" />
              <span className="text-sm font-medium">Cargando referidos...</span>
            </div>
          ) : filteredReferrals.length === 0 ? (
            <div className="py-20 flex flex-col items-center justify-center gap-2 text-zinc-400">
              <Users className="w-10 h-10 text-zinc-300 dark:text-zinc-700 animate-pulse" />
              <span className="text-sm font-bold">No se encontraron referidos</span>
              <p className="text-xs text-zinc-500">Agrega un referido en la parte superior para comenzar.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200/60 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/20">
                    <th className="px-4 py-3 w-10 text-center">
                      <input
                        type="checkbox"
                        checked={selectedIds.length === filteredReferrals.length && filteredReferrals.length > 0}
                        onChange={toggleSelectAll}
                        className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-700 text-primary focus:ring-primary cursor-pointer"
                      />
                    </th>
                    <th className="px-4 py-3 text-xs font-bold text-zinc-400 uppercase tracking-wider">Nombre</th>
                    <th className="px-4 py-3 text-xs font-bold text-zinc-400 uppercase tracking-wider">Código Generado</th>
                    <th className="px-4 py-3 text-xs font-bold text-zinc-400 uppercase tracking-wider">Número (Métrica)</th>
                    <th className="px-4 py-3 text-xs font-bold text-zinc-400 uppercase tracking-wider">Fecha de Creación</th>
                    <th className="px-4 py-3 text-xs font-bold text-zinc-400 uppercase tracking-wider text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/80">
                  {filteredReferrals.map(ref => (
                    <tr
                      key={ref.id}
                      className={`hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20 transition-all ${
                        selectedIds.includes(ref.id) ? 'bg-primary-light/20 dark:bg-primary-light/5' : ''
                      }`}
                    >
                      <td className="px-4 py-3 text-center">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(ref.id)}
                          onChange={() => toggleSelect(ref.id)}
                          className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-700 text-primary focus:ring-primary cursor-pointer"
                        />
                      </td>
                      <td className="px-4 py-3 font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                        {ref.name}
                      </td>
                      <td className="px-4 py-3">
                        <span className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-primary dark:text-emerald-400 font-bold border border-zinc-200/20">
                          {ref.code}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-zinc-500">
                        {ref.number !== null ? ref.number : 0}
                      </td>
                      <td className="px-4 py-3 text-xs text-zinc-400">
                        {new Date(ref.created_at).toLocaleDateString('es-CO', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => copyToClipboard(ref.code, ref.id)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-primary hover:text-white dark:bg-zinc-800 dark:hover:bg-primary dark:hover:text-zinc-950 text-xs font-bold transition-all border border-zinc-200/50 dark:border-zinc-700/50 cursor-pointer"
                          >
                            {copiedId === ref.id ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                Copiado
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                Copiar Enlace
                              </>
                            )}
                          </button>

                          <button
                            disabled={actionLoading === ref.id}
                            onClick={() => deleteReferral(ref.id)}
                            className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-all cursor-pointer border border-transparent hover:border-red-200/20"
                            title="Eliminar Referido"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      {/* Floating Action Bar for Bulk copying */}
      {selectedIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900/90 dark:bg-zinc-950/90 backdrop-blur border border-zinc-800 text-white px-6 py-4 rounded-2xl flex items-center gap-6 shadow-2xl z-50 animate-bounce">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
            <span className="text-sm font-semibold">{selectedIds.length} referidos seleccionados</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={copyBulkLinks}
              className="flex items-center gap-2 bg-primary text-zinc-950 font-bold px-4 py-2 rounded-xl text-xs hover:opacity-90 transition-all cursor-pointer"
            >
              {bulkCopied ? (
                <>
                  <Check className="w-4 h-4" />
                  Enlaces Copiados
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar Enlaces
                </>
              )}
            </button>

            <button
              onClick={() => setSelectedIds([])}
              className="text-xs text-zinc-400 hover:text-white font-medium px-2 cursor-pointer transition-all"
            >
              Deseleccionar todo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
