<template>
  <div>
    <h1>Cek Status Pendaftaran</h1>
    <form @submit.prevent="checkRegistrationStatus">
      <div>
        <label for="email">Masukkan Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <button type="submit">Cek Status</button>
      </div>
    </form>

    <div v-if="registrationStatus">
      <h2>Status Pendaftaran</h2>
      <p v-if="registrationStatus === 'waiting'">Status Pendaftaran: Menunggu</p>
      <p v-else-if="registrationStatus === 'rejected'">Status Pendaftaran: Ditolak</p>
      <p v-else-if="registrationStatus === 'accepted'">Status Pendaftaran: Diterima</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      registrationStatus: null
    };
  },
  methods: {
    checkRegistrationStatus() {

      if (this.email === 'test@example.com') {
        this.registrationStatus = 'waiting'; 
      } else {
        this.registrationStatus = 'rejected'; 
      }
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
  
  