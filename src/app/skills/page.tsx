import Image from 'next/image';
import Link from 'next/link';

export default function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 animate-fadeIn relative">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>

      {/* Skills Section */}
      <div className="absolute top-1/4 w-full flex flex-col items-center animate-slideIn">
        <h1 className="text-4xl font-bold mb-8 text-center">Keterampilan</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105">
            <Image src="/images/python.png" alt="Python" width={80} height={80} />
            <p className="mt-4 text-black text-lg font-semibold">Python</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105">
            <Image src="/images/c++.png" alt="C++" width={80} height={80} />
            <p className="mt-4 text-black text-lg font-semibold">C++</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105">
            <Image src="/images/linux.png" alt="Linux" width={80} height={80} />
            <p className="mt-4 text-black text-lg font-semibold">Linux</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105">
            <Image src="/images/office.png" alt="Word" width={80} height={80} />
            <p className="mt-4 text-black text-lg font-semibold">Word</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-8 right-8 space-x-4 animate-slideInFromRight">
        <Link href="/">
          <button className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition-colors duration-300">
            Beranda
          </button>
        </Link>
        <Link href="/profile">
          <button className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition-colors duration-300">
            Profil
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
    </section>
  );
}