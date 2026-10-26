'use client';

import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Card } from './ui/Card';

export default function FormInscripcion() {
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/inscribir', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Ocurrió un error al registrar');
      }

      window.location.href = '/exito';
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-4 w-80">
        <h2 className="text-xl font-bold text-center">Inscripción</h2>
        
        {errorMsg && (
          <div className="p-2 bg-red-100 text-red-700 text-sm rounded">
            {errorMsg}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Nombre Completo</label>
          <Input
            type="text"
            placeholder="Ej. Juan Pérez"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          {loading ? 'Procesando...' : 'Inscribirme'}
        </Button>
      </form>
    </Card>
  );
}