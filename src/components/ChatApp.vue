<template>
  <div class="hello container">
    
    <div class="input-group mb-5 mt-3">
        <!-- <input type="text" class="form-control" v-model="msg" placeholder="請輸入訊息..."> -->
        <mu-auto-complete hintText="請輸入訊息..." v-model="msg" @input="handleInput" :dataSource="dataSource" @change="handlechange" />
        <span class="input-group-btn">
           <mu-raised-button label="Send" @click="SubmitMessages()" class="demo-raised-button" primary/>
            <!-- <button class="btn btn-primary" @click="SubmitMessages()" type="button">Send</button> -->
        </span>
    </div>

    <div class="media my-3" v-for="item in messages"> 
        <!-- <img v-if="item.user != user" class="d-flex align-self-start mr-3" src="http://lorempixel.com/100/100/sports/" alt="Generic placeholder image"> -->
        <mu-list-item v-if="item.user != user" title="" disabled>
          <mu-avatar slot="left" src="http://lorempixel.com/100/100/sports/" />
          <div class="media-body">
            <h5>{{ friend }}</h5>
            <p>{{ item.msg }}</p>
          </div>
        </mu-list-item>

        <mu-list-item v-if="item.user == user" title="" disabled>
          <mu-avatar slot="right" src="http://lorempixel.com/100/100/sports/" @click="test()"/>
          <div class="media-body">
            <h5 style="text-align: right;">{{ item.user }}</h5>
            <p style="text-align: right;">{{ item.msg }}</p>
          </div>
        </mu-list-item>
        <!-- <img v-if="item.user == user" class="d-flex ml-3" src="http://lorempixel.com/100/100/sports/" alt="Generic placeholder image"> -->
    </div>
  </div>
</template>

<script>
export default {
  //name: "HelloWorld",

  props: ["friend"],

  data() {
    return {
      title: "error",
      user: "Mark",
      msg: " ",
      messages: [
        {
          user: "Mark",
          msg: "Hello"
        },

        {
          user: "Mary",
          msg: "Hello nice to meet you"
        }
      ]
    };
  },

  methods: {
    SubmitMessages() {
      let self = this;

      self.messages.push({
        user: self.user,
        msg: self.msg
      });
    }
  }
};
</script>


