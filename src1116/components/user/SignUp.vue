<template>
  <div id="sign-up">
    <div class="app-bar">
      <mu-appbar :title="msg">

        <mu-icon-menu icon="menu" slot="left":value="chooseMenu" @change="handleBarChange">
          <mu-menu-item value="HelloWorld" title="Index"/>
          <mu-menu-item value="SignIn" title="Sign In"/>
          <mu-menu-item value="Profile" title="Profile"/>
        </mu-icon-menu>

        <mu-flat-button :label="showStatus" slot="right"/>
        <mu-icon-button icon="expand_more" slot="right"/>
      </mu-appbar>

      <div class="container">
        <h3>Sign Up</h3>
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

        <!-- <div>
          <mu-auto-complete 
            hintText="Confirm Password" 
            labelFloat label="Confirm Password" 
            v-model="confirmPS"
            @input="handleInput" 
            :dataSource="dataSource"/>
        </div>

        <div>
          <mu-auto-complete 
            hintText="Your Name" 
            labelFloat label="Name" 
            v-model="name"
            @input="handleInput" 
            :dataSource="dataSource"/>
        </div> -->
        
        <mu-raised-button label="Submit" class="demo-raised-button" @click="signUp()" primary/>
      </div>  
    </div>
  </div>
</template>


<script>
// 與firebase作連結
import firebase from "firebase";

export default {
  name: "SignUp",

  data() {
    return {
      chooseMenu: "",
      msg: "Join Members",

      email: "",
      password: "",
      // confirmPS: "",
      // name: "",

      //2. vuex 作法：發送(變數)端(App.vue)與接收端(HolleWorld.vue)都下達同樣變數，以互相都能取得資料
      status: this.$store.state.status
    };
  },

  methods: {
    handleBarChange(val) {
      this.chooseMenu = val;
      this.$router.push("/" + val);
    },

    //createUserWithEmailAndPassword: for creat user data.
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(function(user) {
          alert("Your account has been created.");
        })
        .catch(function(error) {
          // Handle Errors here.
          if (error.code == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(error.message);
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
