import Link from 'next/link';

export default function ExitoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-green-600 mb-2">¡Inscripción Exitosa!</h1>
      <p className="mb-4">Gracias por registrarte.</p>
      <Link href="/" className="text-blue-500 underline">
        Volver al Inicio
      </Link>
    </div>
  );
}