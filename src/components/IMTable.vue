<template>

  <b-table :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :items="items"
             :fields="fields">
  </b-table>

   

</template>


<script>
export default {
  name: 'HelloWorldIM79',
  props: {
    msgim: String
  },
  data: function () {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: 'name', sortable: true },
        { key: 'age', sortable: true },
        { key: 'breed', sortable: true },
        { key: 'gender', sortable: false }
      ],
      items: [
     
      ]
    }
  },
   created:function() {
    fetch('https://api.myjson.com/bins/s9lux')
    .then(res => res.json())
    .then(res => {
      this.items = res;
    })
  }

}
</script>

