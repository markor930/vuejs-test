<template>
  <div id="sign-in">
    <div class="app-bar">
      <mu-appbar :title="msg">

        <mu-icon-menu icon="menu" slot="left":value="chooseMenu" @change="handleBarChange">
          <mu-menu-item value="HelloWorld" title="Index"/>
          <mu-menu-item value="SignUp" title="Sign Up"/>
          <mu-menu-item value="Profile" title="Profile"/>
        </mu-icon-menu>

        <mu-flat-button :label="showStatus" slot="right"/>
        <mu-icon-button icon="expand_more" slot="right"/>
      </mu-appbar>

      <div class="container">
        <h3>Sign In</h3>
        <div>
          <mu-auto-complete 
            hintText="Enter E-mail" 
            labelFloat label="E-mail address" 
            v-model="email"/>
        </div>
        
        <div>
          <mu-auto-complete 
            hintText="Enter Password" 
            labelFloat label="Password" 
            v-model="password"/>
        </div>
        
        <mu-raised-button label="Submit" class="demo-raised-button" @click="signIn()" primary/>
      </div>  
    </div>
  </div>
</template>


<script>
// 與firebase作連結
import firebase from "firebase";

export default {
  name: "SignIn",

  data() {
    return {
      chooseMenu: "",
      msg: "Login",

      email: "",
      password: "",

      //2. vuex 作法：發送(變數)端(App.vue)與接收端(HolleWorld.vue)都下達同樣變數，以互相都能取得資料
      status: this.$store.state.status
    };
  },

  methods: {
    handleBarChange(val) {
      this.chooseMenu = val;
      this.$router.push("/" + val);
    },

    //signInWithEmailAndPassword: for check user data.
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(function(user) {
          alert("You are now connected.");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
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
