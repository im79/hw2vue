<template>
  <div class="hello">
    <label class="switch">
      <input type="checkbox" v-model="checked">>
      <span class="slider"></span>
    </label>
    <h1 v-if="checked">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data: function () {
    return {
      msg: 'Page refreshed ' + new Date().toLocaleString() +" ENV: "+process.env.NODE_ENV,
      checked: false
    }
  }
}
</script>

<style lang="scss" scoped >
h1 {
  color: #42b983;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  .input {
    display:none;
  }
}

.slider {
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;

  &:before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

}

input:checked {
  + .slider {
    background-color: #2196F3;
  }
}

input:focus {
  + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
}


input:checked {
  + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
}


</style>
