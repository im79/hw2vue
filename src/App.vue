<template>
  <div id="app">

    <b-container>

        <div  v-if="currentUser">
          <b-nav tabs>
            <b-nav-item :to="{ name: 'Start' }">Start</b-nav-item>
            <b-nav-item :to="{ name: 'Modal' }">Modal</b-nav-item>
            <b-nav-item :to="{ name: 'Caroussel' }">Caroussel</b-nav-item>
            <b-nav-item :to="{ name: 'IMTable' }">IMTable</b-nav-item>
            <b-nav-item :to="{ name: 'Chat' }">Chat</b-nav-item>
          </b-nav>
        </div>
      <br>

      <b-jumbotron  >        
        <router-view></router-view>
      </b-jumbotron>
    </b-container>
  
  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      authenticated: false
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
      if (!this.currentUser && this.$route.path !== '/') {
        this.$router.push('/?redirect=' + this.$route.path)
      }
    }
  },
  components: {
   // Navbar,
    //Foot
  }
}


</script>