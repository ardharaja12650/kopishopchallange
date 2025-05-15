import React, { useRef, useState, useEffect } from 'react';

export default function Index({ products }) {
  const scrollRef = useRef();
  const commentScrollRef = useRef();

  const [comments, setComments] = useState([
    { text: "Kopinya harum serta masih fresh.", author: "Andi" },
    { text: "Saya suka sekali sama kopinya terutama espressonya sangat fresh!", author: "Bambang" },
    { text: "Pengirimannya cepat beserta kopinya masih fresh seperti baru dipetik.", author: "Zahra" },
    { text: "Sangat direkomendasi membeli kopi dari sini!", author: "Diana" },
    { text: "Akan sering beli kopi disini karena kualitas kopinya keren!", author: "Gilang" },
  ]);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-serif" style={{ backgroundColor: '#f5f0ea' }}>
      <div className="max-w-7xl mx-auto bg-white shadow-md relative overflow-hidden">
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
            backgroundImage: "url('/images/logo.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: '410px',
            opacity: 0.10,
            zIndex: 0,
            }}
        />

        {/* Header */}
        <header className="flex items-center justify-between p-6 border-b border-gray-200">
          <nav className="space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Home</a>
            <a href="#" className="hover:text-gray-900">Shop</a>
            <a href="#" className="hover:text-gray-900">Blog</a>
            <a href="#" className="hover:text-gray-900">Pages</a>
          </nav>
          <div className="text-xl font-bold tracking-widest text-gray-700">BEANIE</div>
          <div>
            <input
            type="search"
            placeholder="Search here..."
            className="border rounded px-3 py-1 text-sm text-black placeholder-black"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 py-10">
          {/* Banner */}
          <section className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 rounded-lg">
            <img
              src="/images/specialty-coffee-bag.jpg"
              alt="Specialty Coffee"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold mb-4 text-black"> SPECIAL <span className="text-[#7B3F00]">COFFEE</span></h1>

              <p className="text-gray-600 mb-6">
                Nikmati cita rasa kopi spesial kami yang dipilih dengan teliti dari biji kopi terbaik. Dengan proses sangrai yang sempurna, setiap tegukan menghadirkan aroma kaya dan rasa yang lembut, memberikan pengalaman minum kopi yang tak terlupakan              </p>
              <a
                href="#"
                className="inline-block bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800"
              >
                ORDER NOW
              </a>
            </div>
          </section>

          <p className="text-center italic text-gray-500 mb-10">
            Di toko kami, setiap produk dibuat dan dipilih dengan penuh cinta dan perhatian. Kami percaya bahwa kopi bukan hanya sekadar minuman, tapi sebuah pengalaman yang membawa kebahagiaan dan kehangatan dalam setiap cangkirnya. Dengan dedikasi pada kualitas dan rasa terbaik, kami hadir untuk menemani hari-hari Anda dengan keistimewaan kopi yang asli dan penuh cerita.
          </p>

        {/* Shop Best Coffee */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-black">SHOP BEST COFFEE</h2>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                VIEW ALL
              </a>
            </div>

            <div className="relative">
                <button
                onClick={() => scroll(scrollRef, 'left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full shadow p-2 hover:bg-gray-200"
                >
                ◀
                </button>
                <button
                onClick={() => scroll(scrollRef, 'right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full shadow p-2 hover:bg-gray-200"
                >
                ▶
                </button>
              <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth"
              >
                {products.map(product => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-700">{product.name}</h3>
                      <p className="text-sm text-gray-500">Rp.{parseFloat(product.price).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

            {/* Komen */}
            <section className="mt-18">
            <h2 className="text-xl font-semibold mb-6 text-center text-black">WHAT PEOPLE SAY</h2>
            <div className="flex items-center justify-center gap-100">
                <button
                onClick={() => scroll(commentScrollRef, 'left')}
                className="bg-black text-white rounded-full shadow p-2 hover:bg-gray-800"
                >
                ◀
                </button>
                <div className="overflow-hidden max-w-md w-full">
                    <div
                        ref={commentScrollRef}
                        className="flex overflow-x-auto scroll-smooth scrollbar-hide space-x-4"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {comments.slice(0, 4).map((comment, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-full max-w-xl bg-white rounded-lg shadow-md p-8"
                            style={{ scrollSnapAlign: 'start' }}
                        >
                            <p className="text-gray-700 mb-4 italic text-lg">"{comment.text}"</p>
                            <p className="text-sm font-semibold text-gray-900 text-right">- {comment.author}</p>
                        </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => scroll(commentScrollRef, 'right')}
                    className="bg-black text-white rounded-full shadow p-2 hover:bg-gray-800"
                    >
                    ▶
                </button>
            </div>
            </section>

            <section className="mt-12 max-w-6xl mx-auto px-4">
            <div className="flex gap-8">
                {/* New Arrival */}
                <div className="w-1/2">
                <h3 className="text-lg font-semibold mb-4 text-black">New Arrival</h3>
                <ul className="space-y-4">
                    {products.slice(0, 5).map(product => (
                    <li key={product.id} className="bg-white p-4 rounded shadow">
                        <div className="flex items-center gap-4">
                        <img src={product.image_url} alt={product.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                            <p className="font-semibold text-gray-900">{product.name}</p>
                            <p className="text-[#7B3F00] font-semibold">Rp.{parseFloat(product.price).toFixed(2)}</p>
                            </div>
                            <p className="text-gray-600 text-sm mt-1">{product.description || 'No description available'}</p>
                        </div>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Best Selling */}
                <div className="w-1/2">
                <h3 className="text-lg font-semibold mb-4 text-black">Best Selling</h3>
                <ul className="space-y-4">
                    {products.slice(5, 10).map(product => (
                    <li key={product.id} className="bg-white p-4 rounded shadow">
                        <div className="flex items-center gap-4">
                        <img src={product.image_url} alt={product.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                            <p className="font-semibold text-gray-900">{product.name}</p>
                            <p className="text-[#7B3F00] font-semibold">Rp.{parseFloat(product.price).toFixed(2)}</p>
                            </div>
                            <p className="text-gray-600 text-sm mt-1">{product.description || 'No description available'}</p>
                        </div>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            </section>

            <section className="mt-16 bg-white-100 py-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Subscribe ke Kita</h2>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">
                Dapatkan informasi terbaru tentang produk kami, promo, dan lain-lain.
            </p>
            <form className="max-w-md mx-auto flex">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="ml-2 px-6 py-3 bg-yellow-800 text-white font-semibold rounded-r-full hover:bg-yellow-900 transition-colors"
                    >
                    Subscribe
                </button>
            </form>
            </section>

            {/* Fitur */}
            <section className="mt-16 bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                
                <div className="flex flex-col items-center">
                    <img src="/images/shipping.png" alt="Fast Delivery" className="w-16 h-16 mb-3" />
                    <h3 className="font-semibold text-lg mb-1 text-black">Pengiriman Cepat</h3>
                    <p className="text-gray-600 text-sm">
                    Kami pastikan pesanan Anda tiba dengan cepat dan tepat waktu.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src="/images/store.png" alt="Pickup in Store" className="w-16 h-16 mb-3" />
                    <h3 className="font-semibold text-lg mb-1 text-black">Ambil di Toko</h3>
                    <p className="text-gray-600 text-sm">
                    Pesan online dan ambil langsung di toko kami dengan mudah.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src="/images/coffee.png" alt="Quality Product" className="w-16 h-16 mb-3" />
                    <h3 className="font-semibold text-lg mb-1 text-black">Produk Berkualitas</h3>
                    <p className="text-gray-600 text-sm">
                    Kopi terbaik dengan kualitas premium dan rasa yang konsisten.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src="/images/bean.png" alt="Friendly Service" className="w-16 h-16 mb-3" />
                    <h3 className="font-semibold text-lg mb-1 text-black">Layanan Ramah</h3>
                    <p className="text-gray-600 text-sm">
                    Tim kami selalu siap melayani dengan sepenuh hati dan senyuman.
                    </p>
                </div>

                </div>
            </div>
            </section>

            <hr className="my-16 border-t-2 border-gray-200" />

            {/* Blog Section */}
            <section className="mb-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-10">Read our Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/images/kopini.jpg" alt="Kopi Terbaik" className="w-full h-48 object-cover" />
                    <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-black">Kopi Terbaik untuk Hari Anda</h3>
                    <p className="text-gray-600 text-sm">
                        Temukan pilihan kopi terbaik yang kami sajikan dari biji kopi pilihan dan teknik seduh terbaik.
                    </p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/images/drinkkopi.jpg" alt="Cara Kerja Kopi" className="w-full h-48 object-cover" />
                    <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-black">Bagaimana Kopi Bekerja di Tubuh</h3>
                    <p className="text-gray-600 text-sm">
                        Pelajari bagaimana kandungan kafein dalam kopi memberi Anda energi dan semangat setiap hari.
                    </p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/images/kopitu.jpeg" alt="Segelas Kopi" className="w-full h-48 object-cover" />
                    <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-black">Segelas Kopi untuk Kesenangan</h3>
                    <p className="text-gray-600 text-sm">
                        Tidak hanya untuk dinikmati, kopi adalah teman terbaik untuk momen santai dan refleksi diri.
                    </p>
                    </div>
                </div>

                </div>
            </div>
            </section>

            {/* Instagram */}
            <section className="mb-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-8 text-black">Follow Instagram Kami : @beanieee</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <img src="/images/kopi4.jpg" alt="kopi4" className="rounded-lg object-cover w-full h-32" />
                <img src="/images/kopi1.jpg" alt="kopi1" className="rounded-lg object-cover w-full h-32" />
                <img src="/images/kopi5.jpg" alt="kopi5" className="rounded-lg object-cover w-full h-32" />
                <img src="/images/kopi2.jpeg" alt="kopi2" className="rounded-lg object-cover w-full h-32" />
                <img src="/images/kopi6.jpg" alt="kopi6" className="rounded-lg object-cover w-full h-32" />
                <img src="/images/kopi3.jpg" alt="kopi3" className="rounded-lg object-cover w-full h-32" />
                </div>
            </div>
            </section>

            {/* Footer */}
            <section className="bg-white-100 py-12 mt-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">

                <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="mb-2 font-semibold">HOME</p>
                    <p className="mb-2 font-semibold">ABOUT</p>
                    <p className="mb-2 font-semibold">SHOP</p>
                </div>
                <div>
                    <p className="mb-2 font-semibold">SHOP SINGLE</p>
                    <p className="mb-2 font-semibold">BLOG</p>
                    <p className="mb-2 font-semibold">CONTACT</p>
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="mb-2 font-semibold">TERMS & CONDITION</p>
                    <p className="mb-2 font-semibold">SERVICES</p>
                    <p className="mb-2 font-semibold">PRIVACY POLICY</p>
                </div>
                <div>
                    <p className="mb-2">Jl. Kopi Sejati No. 1</p>
                    <p className="mb-2">Semarang, Indonesia</p>
                    <p className="mb-2">Telp: (022) 123-4567</p>
                </div>
                </div>
            </div>
            </section>
        </main>

        <footer className="border-t border-gray-200 p-6 text-center text-sm text-gray-500">
          &copy; 2025 Beanie Coffee Shop. Designed by M. Ardha Raja
        </footer>
      </div>
    </div>
  );
}
