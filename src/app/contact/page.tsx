import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 animate-fadeIn relative">
      {/* Ornamental Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>

      {/* Contact Section */}
      <div className="absolute top-1/4 w-full flex flex-col items-center animate-slideIn">
        <h1 className="text-4xl font-bold mb-6 text-center">Kontak</h1>
        <p className="text-xl text-center mb-8">Selalu terhubung dengan saya!</p>
        <ul className="flex justify-center space-x-8 mb-8">
          <li>
            <a href="https://www.instagram.com/faiqnurrohim" target="_blank" rel="noopener noreferrer">
              <Image src="/images/instagram.png" alt="Instagram" width={48} height={48} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/6289627286277" target="_blank" rel="noopener noreferrer">
              <Image src="/images/whatsapp.png" alt="WhatsApp" width={48} height={48} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/faiqnurrohim" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={48} height={48} />
            </a>
          </li>
        </ul>
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
      </nav>
    </section>
  );
}