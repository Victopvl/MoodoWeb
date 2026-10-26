import FormInscripcion from '@/components/FormInscripcion';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Bienvenido a Moodo Web</h1>
      <FormInscripcion />
    </main>
  );
}