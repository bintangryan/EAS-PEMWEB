<template>
  <div class="channel-view">
    <div class="channel-list">
      <div class="channel-header">
        <h1>Channel List</h1>
        <button @click="toggleCreateChannel" class="add-channel-button">+</button>
      </div>
      <ul class="channel-items">
        <li v-for="channel in channels" :key="channel.id" class="channel-item">
          <router-link :to="'/channels/' + channel.id" class="channel-link">#{{ channel.name }}</router-link>
        </li>
      </ul>
    </div>

    <div v-if="showCreateChannel" class="create-channel">
      <h2>Create New Channel</h2>
      <form @submit.prevent="createChannel" class="create-channel-form">
        <input type="text" id="newChannelName" v-model="newChannelName" required class="form-input" placeholder="Channel Name">
        <button type="submit" class="form-button">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChannelView',
  data() {
    return {
      channels: [
        // List of existing channels
      ],
      newChannelName: '', // Variable to store the new channel name from the form
      showCreateChannel: false // Flag to toggle display of create channel form
    };
  },
  methods: {
    createChannel() {
      // Logic to create a new channel
      const newChannel = {
        id: this.channels.length + 1,
        name: this.newChannelName
      };

      // Add the new channel to the list of channels
      this.channels.push(newChannel);

      // Reset the input value after creating a new channel
      this.newChannelName = '';

      // Hide the create channel form after submission
      this.showCreateChannel = false;
    },
    toggleCreateChannel() {
      // Toggle display of create channel form
      this.showCreateChannel = !this.showCreateChannel;
    }
  }
};
</script>

<style scoped>
/* Styles for the channel view */
.channel-view {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

/* Styles for the channel list */
.channel-list {
  flex: 1;
  border-right: 10px solid #ddd;
  padding-right: 20px;
}

.channel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.add-channel-button {
  padding: 5px 10px;
  border-radius: 50%;
  border: none;
  background-color: #7289da;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.channel-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.channel-item {
  margin-bottom: 5px;
}

.channel-link {
  text-decoration: none;
  color: #7289da;
  font-weight: bold;
}

/* Styles for the create channel form */
.create-channel {
  flex: 1;
  padding-left: 20px;
}

.create-channel h2 {
  margin-bottom: 15px;
}

.create-channel-form {
  display: flex;
  align-items: center;
}

.form-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
}

.form-button {
  padding: 8px 15px;
  border: none;
  background-color: #7289da;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style>





