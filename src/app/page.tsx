import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="text-center px-6 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Book Your Movie Tickets <br /> Instantly & Easily
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Discover showtimes, select your seat, and enjoy a seamless movie booking experience.
        </p>
        <Link
          href="/movies"
          className="inline-block px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded transition font-semibold"
        >
          Browse Movies
        </Link>
      </div>
    </main>
  );
}
