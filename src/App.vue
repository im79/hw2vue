<template>
  <div id="app">

    <b-container>

        <div>
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
}


</script>