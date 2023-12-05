<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Lakukan logika autentikasi di sini (misalnya, panggil API login)
      // Contoh sederhana, Anda dapat menambahkan validasi dan logika autentikasi yang sesuai
      if (this.username === 'user' && this.password === 'password') {
        // Berhasil login, Anda dapat mengarahkan pengguna ke halaman selanjutnya
        alert('Login berhasil! Redirect ke halaman selanjutnya...');
        // Misalnya, menggunakan router untuk navigasi (jika menggunakan Vue Router)
        // this.$router.push('/dashboard'); 
      } else {
        // Gagal login
        alert('Login gagal! Periksa kembali username dan password Anda.');
      }
    }
  }
};
</script>

<style scoped>
/* Styling untuk komponen Login */
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

input[type="text"],
input[type="password"],
button {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

button {
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
</style>
