<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Sign In</h2>
      <div class="alert alert-danger" v-if="error" v-html="error">{{ error }}</div>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: 'test@test.de',
      password: 'password',
      error: false
    }
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  created () {
    this.checkCurrentLogin()
  },
  updated () {
    this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin () {
      if (this.currentUser) {
        this.$router.replace(this.$route.query.redirect || '/Start')
      }
    },
    login () {
      this.$http.post('', { user: this.email, password: this.password })
        .then(request => this.loginSuccessful(request))
        .catch((e) => this.loginFailed(e))
    },
    loginSuccessful (req) {
      if (!req.data.token) {
        this.loginFailed('no token provided')
        return
      }

      this.error = false
      localStorage.token = req.data.token
      this.$store.dispatch('login')
      this.$router.replace(this.$route.query.redirect || '/Start')
    },

    loginFailed (e) {
      this.error = 'Login failed!<br><small>' + e +'</small>'
      this.$store.dispatch('logout')
      delete localStorage.token
    }
  }
}
</script>

<style lang="css">

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>