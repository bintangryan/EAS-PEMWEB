<template>
  <div>
    <h1>Form Registrasi Lomba</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nama:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div>
        <label for="school">Asal Sekolah:</label>
        <input type="text" id="school" v-model="formData.school" required>
      </div>
      <div>
        <button type="submit">Daftar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        school: ''
      }
    };
  },
  methods: {
    submitForm() {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.formData)
      };

      fetch('http://localhost:3000/api/registrations/', requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to register');
          }
          console.log('Registration successful');
        })
        .catch(error => {
          console.error('Error during registration:', error);
        });
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}

input,
button {
  margin-bottom: 10px;
}
</style>











