<template>
  <div id="profile">
    <div class="app-bar">
      <mu-appbar :title="msg">
        <mu-icon-button icon="menu" slot="left"/>
        <mu-flat-button :label="showStatus" slot="right"/>
        <mu-icon-button icon="expand_more" slot="right"/>
      </mu-appbar>
    </div>
  </div>
</template>


<script>
export default {
  name: "Profile",
  // props: ["status"],
  data() {
    return {
      msg: "Hello Vue.js",

      //2. vuex 作法：發送(變數)端(App.vue)與接收端(HolleWorld.vue)都下達同樣變數，以互相都能取得資料
      status: this.$store.state.status
    };
  },

  computed: {
    // 3. 以{computed} show 出來
    showStatus() {
      return this.$store.state.status;
    }
  }
};
</script>

<style>
.app-bar {
  margin: 1em auto;
  width: 90%;
}
</style>
