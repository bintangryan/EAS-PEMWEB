<template>
    <div class="signup-view">
      <h1>Sign Up</h1>
      <form @submit.prevent="signup">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SignUpView',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      signup() {
        const newAccount = {
          email: this.email,
          password: this.password
        };
  
        // Kirim data pendaftaran baru ke backend menggunakan Axios
        axios.post('http://localhost:3000/admin/collections/accounts?limit=10', newAccount)
          .then(response => {
            console.log('Account created:', response.data);
            // Handle jika pendaftaran berhasil, contohnya redirect ke halaman login
            this.$router.push('/login');
          })
          .catch(error => {
            console.error('Error creating account:', error);
            // Handle jika terjadi kesalahan pada proses pendaftaran
          });
          this.$router.push('/login');

      }
    }
  };
  </script>
  
  <style scoped>
  /* Gaya atau style untuk tampilan halaman pendaftaran */
  .signup-view {
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
  
  