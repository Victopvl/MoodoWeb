import { createClient } from '@supabase/supabase-js';

// Usamos globalThis para esquivar el bloqueo de TypeScript sin romper Next.js
const processEnv = (globalThis as any).process?.env || {};

const supabaseUrl = processEnv.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = processEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
