<template>
  <div class="card mt-3">
      <div class="card-body">
          <div class="card-title">
              <h3>IM</h3>
              <hr>
          </div>
          <div class="card-body">
              <div class="messages" v-for="(msg, index) in messages" :key="index">
                  <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
              </div>
          </div>
      </div>
      <div class="card-footer">
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
         </p>
          <form @submit.prevent="sendMessage">
              <div class="gorm-group">
                  <label for="user">User:</label>
                  <input type="text" v-model="user" @keyup="validateUserName" class="form-control" 
                  v-bind:class="{ 'is-invalid': errors.length}">
              </div>
              <div class="gorm-group pb-3">
                  <label for="message">Message:</label>
                  <input type="text" v-model="message" class="form-control">
              </div>
              <button type="submit" class="btn btn-success" v-bind:class="{disabled: errors.length}">Send</button>
          </form>
      </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
    name: 'Chat',
    data() {
        return {
            errors: ["Username empty"],
            user: '',
            message: '',
            messages: [],
            socket : io(process.env.VUE_APP_CHATNOTIFY_URL, {
                transports: ['websocket']
            })
        }
    },
    methods: {
        validateUserName(){
            this.errors = [];
            if(this.user.length < 3)    this.errors.push('Username too short');
            if(this.user.length == 0)    this.errors.push('empty');
            console.log( this.user); // eslint-disable-line no-console
        },
        sendMessage(e) {
            e.preventDefault();
            
            this.socket.emit('SEND_MESSAGE', {
                user: this.user,
                message: this.message
            });
            this.message = ''
        }
    },
    mounted() {
        this.socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data];
            // you can also do this.messages.push(data)
        });
    }
}
</script>