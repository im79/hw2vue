<template>
  <div class="card mt-3">
    <h5 class="card-header">Test Chat</h5>
    <div class="card-body">
        <div class="messages" v-for="(msg, index) in messages" :key="index">
            <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
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
            <div class="gorm-group" v-if="errors.length">
                <input type="text" v-model="user" @keyup="validateUserName" class="form-control" v-bind:class="{ 'is-invalid': errors.length}" placeholder="Username">
            </div>
            <div class="gorm-group" v-if="!errors.length">
                Username: <strong>{{user}}</strong> <button type="button" class="close float-none" @click="removeUsername" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="gorm-group pb-3" v-if="uservalid">
                  <input type="text" v-model="message" class="form-control" placeholder="Message">
              </div>
              <button type="submit" class="btn btn-success"  v-if="uservalid" v-bind:class="{disabled: errors.length}">Send</button>
          </form>
      </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
    data() {
        return {
            errors: ["Username empty"],
            user: '',
            uservalid: false,
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
            if(this.user.length < 3){
                this.errors.push('Username too short');
                this.uservalid = false;
                return;
            }
            if(this.user.length == 0){
                this.errors.push('empty');
                this.uservalid = false;
                return;
            }
            this.uservalid = true;
        },
        removeUsername(){
            this.user = '';
            this.uservalid = false;
            this.errors.push("Username empty");
        },
        sendMessage(e) {
            e.preventDefault();
            if( this.uservalid){
                this.socket.emit('SEND_MESSAGE', {
                    user: this.user,
                    message: this.message
                });
                this.message = ''
            } else{
                console.log( "Message not sent, because user not valid"); // eslint-disable-line no-console
            }
            

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