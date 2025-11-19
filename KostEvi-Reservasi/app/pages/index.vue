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
            <div class="hero-content flex-row-reverse">
                <div class="carousel rounded-box w-240 h-160">
                    <div class="carousel-item w-full">
                        <img
                        src="/gambarKost5.jpg"
                        class="w-full"
                        alt="Gambar Kost" />
                    </div>
                    <div class="carousel-item w-full">
                        <img
                        src="/gambarKost6.jpg"
                        class="w-full"
                        alt="Gambar Kost" />
                    </div>
                    <div class="carousel-item w-full">
                        <img
                        src="/gambarKost7.jpg"
                        class="w-full"
                        alt="Gambar Kost" />
                    </div>
                    <div class="carousel-item w-full">
                        <img
                        src="/gambarKost2.jpg"
                        class="w-full"
                        alt="Gambar Kost" />
                    </div>
                    <div class="carousel-item w-full">
                        <img
                        src="/gambarKost3.jpg"
                        class="w-full"
                        alt="Gambar Kost" />
                    </div>
                    <div class="carousel-item w-full">
                        <img
                        src="/gambarKost4.jpg"
                        class="w-full"
                        alt="Gambar Kost" />
                    </div>
                </div>
                <div>
                    <h1 class="text-5xl font-bold">Fasilitas</h1>
                    <ul class="list-disc mt-4">
                        <li>Kamar tidur yang nyaman dan bersih</li>
                        <li>Kamar mandi dalam</li>
                        <li>AC di setiap kamar</li>
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
                        <button class="btn btn-primary">Kontak via Whatsapp</button>
                    </a>
                </div>
            </div>
        </div>
        
        <FooterHome />
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>