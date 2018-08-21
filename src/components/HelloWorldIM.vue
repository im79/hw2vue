<template>
  <div class="hello">
    <div>
      <input type="text" v-model="inputim79">
    </div>
    <div>
      Input Value: <span v-text="inputim79"></span>
    </div>
    <hr />
    <div>
      <button class="btn btn-primary" v-on:click="counter++">
        clicked {{counter}} times!
      </button>
    </div>
    <hr />
    <div>
      <b-btn v-b-modal.modal1>Launch demo modal</b-btn>
      <!-- Modal Component -->
      <b-modal id="modal1" title="Bootstrap-Vue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HelloWorldIM',
  props: {
    msgim: String
  },
  data: function () {
    return {
      inputim79: '',
      counter: 0
    }
  }
}


</script>

