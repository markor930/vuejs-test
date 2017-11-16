<template>
  <div id="hello">
    <div class="app-bar">
      <mu-appbar :title="msg">
      <!-- <mu-icon-button icon="menu" slot="left"/> -->
        <mu-icon-menu icon="menu" slot="left":value="chooseMenu" @change="handleBarChange">
          <mu-menu-item value="SignIn" title="Sign In"/>
          <mu-menu-item value="SignUp" title="Sign Up"/>
          <mu-menu-item value="Profile" title="Profile"/>
        </mu-icon-menu>
        <mu-flat-button :label="showStatus" slot="right"/>
        <mu-icon-button icon="expand_more" slot="right"/>
      </mu-appbar>


      <div class="container">
        <h1>{{this.$store.state.title}}</h1>
        <p>state, getters, actions, mutations, modules</p>
        <h3>User Name: {{this.$store.state.a.userName}}</h3>
        <h3>Count: {{this.$store.state.count}}</h3>
        <h5>Click: {{this.$store.getters.getCountClick}}</h5>
        <mu-raised-button label="Add" class="demo-raised-button" primary @click="add()"/>
        <mu-raised-button label="Less" class="demo-raised-button" primary @click="less()"/>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "HelloWorld",
  // props: ["status"],
  data() {
    return {
      chooseMenu: "",
      msg: "Hello Vue.js",

      //2. vuex 作法：發送(變數)端(App.vue)與接收端(HolleWorld.vue)都下達同樣變數，以互相都能取得資料
      status: this.$store.state.status
    };
  },

  methods: {
    handleBarChange(val) {
      this.chooseMenu = val;
      this.$router.push("/" + val);
    },

    add() {
      this.$store.dispatch("store_add");
      console.log("+");
    },

    less() {
      this.$store.dispatch("store_less");
      console.log("-");
    }
  },

  computed: {
    // 3. 以{computed} show 出來
    showStatus() {
      return this.$store.state.status;
    },

    menuItems() {
      var menuItems = [
        { title: "SignIn", link: "/SignIn" },
        { title: "SignUp", link: "/SignUp" }
      ];

      return menuItems;
    }
  }
};
</script>

<style>
.app-bar {
  margin: 1em auto;
  width: 90%;
}

.container {
  margin-top: 1em;
}
</style>
