import Link from 'next/link';

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 animate-fadeIn relative">
      <div className="absolute top-1/4 w-full flex flex-col items-center animate-slideIn">
        <h1 className="text-4xl font-bold mb-8 text-center">Proyek</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl text-center text-black shadow-lg transform transition-all hover:scale-105">
            <h2 className="font-bold text-xl mb-4">Tugas Besar Laboratorium Dasar Komputer</h2>
            <p>Membuat simulasi pemetaan jual beli ternak untuk digunakan oleh peternak dengan bahasa pemrograman C++.</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center text-black shadow-lg transform transition-all hover:scale-105">
            <h2 className="font-bold text-xl mb-4">Tugas Besar Mata Kuliah Python</h2>
            <p>Menganalisa dan membuat visualisasi data stunting wilayah Bandung per tahun dengan bahasa pemrograman Python.</p>
          </div>
        </div>
      </div>
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
        <Link href="/contact">
          <button className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition-colors duration-300">
            Kontak
          </button>
        </Link>
      </nav>
    </section>
  );
}