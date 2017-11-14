<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    
    <!-- <p>{{ status }}</p> -->
  </div>

</template>


<script>
export default {
  name: "Hello world",
  // props: ["status"],
  data() {
    return {
      msg: "Hello Vue.js"
    };
  }
};
</script>