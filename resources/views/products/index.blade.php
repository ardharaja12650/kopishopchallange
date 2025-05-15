<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Beanie Coffee Shop</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-50 font-serif">

    <header class="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
        <div class="text-xl font-bold tracking-widest text-gray-700">BEANIE</div>
        <nav class="space-x-6 text-sm text-gray-600">
            <a href="#" class="hover:text-gray-900">Home</a>
            <a href="#" class="hover:text-gray-900">Shop</a>
            <a href="#" class="hover:text-gray-900">Blog</a>
            <a href="#" class="hover:text-gray-900">Pages</a>
        </nav>
        <div>
            <input type="search" placeholder="Search here..." class="border rounded px-3 py-1 text-sm" />
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-10">

        <!-- Banner -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <img src="{{ asset('images/specialty-coffee-bag.jpg') }}" alt="Specialty Coffee" class="rounded-lg shadow-lg" />
            <div>
                <h1 class="text-4xl font-bold mb-4">SPECIAL COFFEE</h1>
                <p class="text-gray-600 mb-6">Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum egestas vitae ut cras aenean enim. Laoreet odio adipiscing auctor scelerisque phasellus nisl faucibus.</p>
                <a href="#" class="inline-block bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800">ORDER NOW</a>
            </div>
        </section>

        <p class="text-center italic text-gray-500 mb-10">Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum egestas vitae ut cras aenean enim. Laoreet odio adipiscing auctor scelerisque phasellus nisl faucibus.</p>

        <!-- Shop Best Coffee -->
        <section>
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-semibold">SHOP BEST COFFEE</h2>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900">VIEW ALL</a>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                @foreach($products as $product)
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="{{ $product->image_url }}" alt="{{ $product->name }}" class="w-full h-56 object-cover" />
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-700">{{ $product->name }}</h3>
                            <p class="text-sm text-gray-500">${{ number_format($product->price, 2) }}</p>
                        </div>
                    </div>
                @endforeach
            </div>
        </section>

        <!-- You can add more sections like testimonials, new arrivals, best selling etc. later -->

    </main>

    <footer class="bg-white border-t border-gray-200 p-6 text-center text-sm text-gray-500">
        &copy; 2025 Beanie Coffee Shop. Designed by Nexa
    </footer>

</body>
</html>
