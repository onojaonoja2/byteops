'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error('Error occurred:', error);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4 text-byteops-accent">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-byteops-accent text-white px-4 py-2 rounded hover:bg-opacity-90"
      >
        Try again
      </button>
    </div>
  );
}