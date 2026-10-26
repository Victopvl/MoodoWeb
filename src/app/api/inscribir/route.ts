import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Reemplaza 'inscripciones' por el nombre real de tu tabla en Supabase
    const { data, error } = await supabase
      .from('inscripciones')
      .insert([body]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json({ error: 'Error interno de la API' }, { status: 500 });
  }
}