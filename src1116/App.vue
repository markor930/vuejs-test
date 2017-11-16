<template>
  <div id="app">    

    <!-- Muse-UI -->
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="HelloWorld" icon="phone" title="Hello World"/>
      <mu-tab value="ChatApp" icon="favorite" title="Chat App"/>
      <mu-tab value="todoList" icon="person_pin" title="todo List"/>
      <mu-tab value="BookList" icon="person_pin" title="Book List"/>
      <mu-tab value="vueAxios" icon="person_pin" title="vue Axios"/>
    </mu-tabs>

    <mu-dropDown-menu :value="value" @change="handleChange">
      <mu-menu-item value="1" title="線上"/>
      <mu-menu-item value="2" title="線下"/>
    </mu-dropDown-menu>


    <!-- 由(vueAxios.vue)發送pushName，(ChatApp.vue)接收至getName。
    再將getName發送(ChatApp.vue) -->
    <!-- <router-view  :friend="this.myFriend"  @pushName="getName"></router-view> -->
    <router-view/>
   <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  //name: "app",

  data() {
    return {
      activeTab: "",
      value: "1",

      //2. vuex 作法：發送(變數)端(App.vue)與接收端(HolleWorld.vue)都下達同樣變數，以互相都能取得資料
      status: this.$store.state.status
      //friend: this.$store.state.friend
    };
  },

  methods: {
    handleTabChange(val) {
      this.activeTab = val;
      this.$router.push("/" + val);
    },
    handleChange(value) {
      this.value = value;

      // 2-1. 變數端更改資料
      if (value == 1) {
        this.$store.state.status = "線上";
      } else if (value == 2) {
        this.$store.state.status = "線下";
      }
    }

    // getName(FriendName) {
    //   this.$store.state.friend = FriendName;
    //   //console.log(FriendName);
    // }
  }
};
</script>

<style lang="less">
@import '//fonts.useso.com/css?family=Roboto:300, 400, 500, 700, 400italic';
@import "http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css";
</style>
