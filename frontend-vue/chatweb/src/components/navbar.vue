<template>
  <div class="navbar">
    <router-link to="/channels" class="nav-link">Channels</router-link>
    <router-link v-if="!isLoggedIn" to="/login" class="nav-link">Login</router-link>
    <button v-if="isLoggedIn" @click="logout" class="logout-btn">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isLoggedIn: false // Gunakan ini sebagai penanda apakah pengguna sudah login atau belum
    };
  },
  methods: {
    logout() {
      // Lakukan proses logout di sini
      // Misalnya, hapus token JWT atau lakukan pembersihan sesi
      this.isLoggedIn = false; // Set isLoggedIn menjadi false
      // Redirect ke halaman login atau halaman lain yang sesuai
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Gaya atau style untuk navbar */
.navbar {
  background-color: #333;
  color: white;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.nav-link {
  margin-right: 10px;
  text-decoration: none;
  color: white;
}

.logout-btn {
  background-color: #7289da;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>

