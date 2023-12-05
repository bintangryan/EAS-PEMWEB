<template>
    <div class="chat-room-view">
      <h1>Chat Room - {{ currentChannelName }}</h1>
  
      <!-- Tampilkan daftar pesan obrolan di dalam channel -->
      <ul>
        <li v-for="message in messages" :key="message.id">
          {{ message.sender }}: {{ message.text }}
        </li>
      </ul>
  
      <!-- Formulir untuk mengirim pesan baru -->
      <form @submit.prevent="sendMessage">
        <label for="newMessage">Your Message:</label>
        <input type="text" id="newMessage" v-model="newMessage" required>
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatRoomView',
    data() {
      return {
        currentChannelId: 1, // ID channel yang sedang digunakan (contoh)
        currentChannelName: 'Channel 1', // Nama channel yang sedang digunakan (contoh)
        messages: [
          // Daftar pesan obrolan di dalam channel
          { id: 1, sender: 'User1', text: 'Hello!' },
          { id: 2, sender: 'User2', text: 'Hi there!' },
          // Tambahkan pesan lain jika diperlukan
        ],
        newMessage: '' // Variabel untuk menyimpan pesan baru dari formulir
      };
    },
    methods: {
      sendMessage() {
        // Lakukan logika untuk mengirim pesan baru
        const newMessageObj = {
          id: this.messages.length + 1, // Contoh: assign ID secara dinamis (pastikan penggunaan yang sesuai dalam aplikasi nyata)
          sender: 'CurrentUser', // Ganti dengan pengguna yang sesuai
          text: this.newMessage
        };
  
        // Tambahkan pesan baru ke daftar messages
        this.messages.push(newMessageObj);
  
        // Reset nilai input setelah mengirim pesan baru
        this.newMessage = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Gaya atau style untuk tampilan obrolan di dalam channel */
  .chat-room-view {
    padding: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
  </style>
  
  