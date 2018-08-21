<template>
  <div id="app">

    <b-container>

        <div>
          <b-nav tabs>
            <b-nav-item :to="{ name: 'HelloWorld' }">HelloWorld</b-nav-item>
            <b-nav-item :to="{ name: 'HelloWorldIM' }">HelloWorldIM</b-nav-item>
            <b-nav-item :to="{ name: 'HelloWorldIM79' }">HelloWorldIM79</b-nav-item>
            <b-nav-item :to="{ name: 'IMTable' }">IMTable</b-nav-item>
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