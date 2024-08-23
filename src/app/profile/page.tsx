import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 relative animate-fadeIn">
      <div className="absolute top-1/4 flex flex-col items-center animate-slideIn">
        <Image 
          src="/images/profile.jpg" 
          alt="Foto Profil" 
          width={150} 
          height={150} 
          className="rounded-full mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">Tentang Saya</h1>
        <p className="text-2x1 max-w-2xl text-center">Halo semua, perkenalkan saya Fa'iq Nurrrohim. Saya mahasiswa semester empat Telkom University dengan prodi S-1 Teknik Telekomunikasi. Saya memiliki ketertarikan yang 
terfokus pada sains dan teknologi. Saya pribadi yang memiliki rasa keingintahuan yang besar sehingga memiliki minat untuk terus 
bereksplorasi. Dengan pengalaman organisasi yang dimiliki, saya terbuka terhadap peluang dan bisa bekerja secara berkolaboratif 
dengan tim. Rasa tanggung jawab saya pegang teguh terhadap dedikasi yang saya berikan</p>
      </div>
      <nav className="absolute top-8 right-8 space-x-4 animate-slideInFromRight">
        <Link href="/">
          <button className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition-colors duration-300">
            Beranda
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
    </section>
  );
}