import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white relative overflow-hidden">
      <h1 className="text-5xl font-bold mb-8 animate-fadeIn">Selamat Datang!</h1>
      <p className="text-3xl mb-8 animate-fadeIn">Mari mengenal saya lebih dekat</p>
      <Image
        src="/images/profile.jpg"
        alt="Foto Profil"
        width={350}
        height={350}
        className="rounded-full transition-transform transform hover:scale-110 duration-500 mb-8"
      />
      <nav className="absolute top-8 right-8 space-x-4 animate-slideInFromRight">
        <Link href="/profile">
          <button className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition-colors duration-300">
            Profil
          </button>
        </Link>
        <Link href="/skills">
          <button className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition-colors duration-300">
            Keterampilan
          </button>
        </Link>
        <Link href="/experience">
          <button className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition-colors duration-300">
            Pengalaman
          </button>
        </Link>
        <Link href="/projects">
          <button className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition-colors duration-300">
            Proyek
          </button>
        </Link>
        <Link href="/contact">
          <button className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition-colors duration-300">
            Kontak
          </button>
        </Link>
      </nav>
    </main>
  );
}