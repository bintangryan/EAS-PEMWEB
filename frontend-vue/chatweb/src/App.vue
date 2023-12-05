<template>
  <div id="app">
    <!-- Header, Navbar, atau Komponen lainnya -->

    <!-- Bagian Konten Aplikasi -->
    <main>
      <!-- Tampilkan router-view yang akan menampilkan konten dari rute yang aktif -->
      <router-view />
    </main>

    <!-- Footer atau bagian lainnya -->
  </div>
</template>

<script>
export default {
  name: 'App',
  // Komponen App.vue biasanya menentukan layout umum dari aplikasi
};
</script>

<style>
/* Gaya atau style untuk layout umum aplikasi */
#app {
  font-family: 'Arial', sans-serif;
  /* Tambahkan style lainnya sesuai kebutuhan */
}

main {
  padding: 20px;
}
</style>


