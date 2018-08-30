<template>
  <div id="app">

    <b-container>

        <div >
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


export default {
  name: 'app',
      data() {
        return {
            authenticated: false
        }
    },
  updated () {
    if (!localStorage.token && this.$route.path !== '/') {
      this.$router.push('/?redirect=' + this.$route.path);
      this.authenticated = false;
    } else{
      this.authenticated = true;
    }
  },
  mounted(){
  if (this.$route.path === '/' && localStorage.token) {
       this.$router.push('/Start');
    }
  }
}


</script>