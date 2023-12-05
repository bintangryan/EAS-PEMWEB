<template>
  <div class="login-view">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Lakukan proses autentikasi
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      // Di sini, biasanya Anda akan melakukan verifikasi kredensial pengguna.
      // Jika login berhasil, navigasikan pengguna ke halaman channel
      // Misalnya, kita akan langsung ke ChannelView
      this.$router.push('/channels');
    }
  }
};
</script>

<style scoped>
/* Gaya atau style untuk tampilan halaman login */
.login-view {
  padding: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
button {
  margin-bottom: 10px;
}
</style>


