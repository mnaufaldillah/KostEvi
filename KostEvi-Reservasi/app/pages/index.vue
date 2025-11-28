<template>
    <div>
        <NavbarHome />

        <div
            class="hero min-h-screen"
            style="background-image: url(/gambarKost1.jpg);"
        >
            <div class="hero-overlay"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Kost Evi</h1>
                    <p class="mb-5">
                        Hunian Kost Eksklusif di Singkawang dengan Fasilitas Lengkap dan Nyaman
                    </p>
                </div>
            </div>
        </div>
        
        <div class="hero bg-base-300 min-h-screen" id="fasilitas">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="carousel rounded-box w-full max-w-md h-64 sm:h-80 lg:h-[400px] lg:max-w-[600px] lg:w-full shadow-2xl0">
                    <div class="carousel-item w-full">
                        <img
                        src="/gambarKost5.jpg"
                        class="w-full h-full object-cover"
                        alt="Gambar Kost" />
                    </div>
                    <div class="carousel-item w-full">
                        <img
                        src="/gambarKost6.jpg"
                        class="w-full h-full object-cover"
                        alt="Gambar Kost" />
                    </div>
                    <div class="carousel-item w-full">
                        <img
                        src="/gambarKost7.jpg"
                        class="w-full h-full object-cover"
                        alt="Gambar Kost" />
                    </div>
                    <div class="carousel-item w-full">
                        <img
                        src="/gambarKost2.jpg"
                        class="w-full h-full object-cover"
                        alt="Gambar Kost" />
                    </div>
                    <div class="carousel-item w-full">
                        <img
                        src="/gambarKost3.jpg"
                        class="w-full h-full object-cover"
                        alt="Gambar Kost" />
                    </div>
                    <div class="carousel-item w-full">
                        <img
                        src="/gambarKost4.jpg"
                        class="w-full h-full object-cover"
                        alt="Gambar Kost" />
                    </div>
                </div>
                <div>
                    <h1 class="text-5xl font-bold">Fasilitas</h1>
                    <ul class="list-disc mt-4 pl-5 pl-5">
                        <li>Kamar tidur yang nyaman dan bersih</li>
                        <li>Kamar mandi dalam</li>
                        <li>AC dan TV di setiap kamar</li>
                        <li>Wi-Fi gratis di seluruh area kost</li>
                        <li>Dapur bersama yang lengkap</li>
                        <li>Area parkir yang aman</li>
                        <li>Keamanan 24 jam</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="hero bg-base-200 min-h-screen" id="kontak">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Minat? Hubungi Sekarang!</h1>
                    <p class="py-6">
                        Jangan lewatkan kesempatan untuk tinggal di Kost Evi yang nyaman dan lengkap. Hubungi kami sekarang untuk informasi lebih lanjut dan pemesanan kamar!
                    </p>
                    <a href="https://wa.me/6281256839818">
                        <button class="btn btn-neutral">Kontak via Whatsapp</button>
                    </a>
                </div>
            </div>
        </div>
        
        <FooterHome />
    </div>
</template>

<script setup>
useHead({
  title: 'Kost Evi Singkawang',
  htmlAttrs: {
    lang: 'id',
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/logoKost.png' }],
})

useSeoMeta({
  title: 'Kost Evi Singkawang',
  description: 'Hunian Kost Eksklusif di Singkawang dengan Fasilitas Lengkap dan Nyaman',
  ogTitle: 'Kost Evi Singkawang',
  ogDescription: 'Hunian Kost Eksklusif di Singkawang dengan Fasilitas Lengkap dan Nyaman',
  ogImage: '/logoKost.png',
})
</script>

<style>

</style>