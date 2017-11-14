<template>
  <div id="app">    

    <!-- Muse-UI -->
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="HelloWorld" icon="phone" title="Hello World"/>
      <mu-tab value="ChatApp" icon="favorite" title="Chat App"/>
      <mu-tab value="todoList" icon="person_pin" title="todo List"/>
      <mu-tab value="vueAxios" icon="person_pin" title="vue Axios"/>
    </mu-tabs>

    <mu-dropDown-menu :value="value" @change="handleChange">
      <mu-menu-item value="1" title="線上"/>
      <mu-menu-item value="2" title="線下"/>
    </mu-dropDown-menu>

    <router-view :status="this.myStatus" :friend="this.myFriend"  @pushName="getName"></router-view>
   <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  //name: "app",

  data() {
    return {
      value: "1",
      status: "線上",
      myStatus: "",

      friend: "Mr. Huang",
      myFriend: ""
    };
  },

  methods: {
    handleTabChange(val) {
      this.activeTab = val;
      this.$router.push("/" + val);
    },
    handleChange(value) {
      this.value = value;

      if (value == 1) {
        this.myStatus = "線上";
      } else if (value == 2) {
        this.myStatus = "線下";
      }
    },

    getName(FriendName) {
      this.myFriend = FriendName;
      console.log(FriendName);
    }
  }
};
</script>

<style lang="less">
@import '//fonts.useso.com/css?family=Roboto:300, 400, 500, 700, 400italic';
@import "http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css";
</style>
