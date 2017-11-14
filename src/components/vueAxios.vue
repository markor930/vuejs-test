<template>
  <section class="vue-axios">
    <header>
      <h1>{{ msg }}</h1>

      <!-- <mu-dropDown-menu :value="value" @change="handleChange">
        <mu-menu-item value="1" title="線上"/>
        <mu-menu-item value="2" title="線下"/>
      </mu-dropDown-menu> -->
      
    </header>
    
    <mobile-tear-sheet>
      <mu-list>
        <mu-sub-header>聊天室</mu-sub-header>
        <mu-list-item :title="item.name.first"  v-for="(item, index) in AxiosData" :key="item.id"  @click="toChat(item.name.first)">
          <mu-text>{{ item.email }}</mu-text>
          <mu-avatar :src="item.picture.large" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
      </mu-list>
      <mu-divider/>
    </mobile-tear-sheet>
  </section>
</template>


<script>
// import mobileTearSheet from "./components/mobileTearSheet";
export default {
  name: "HelloWorld",

  data() {
    return {
      msg: "Axios.",
      AxiosData: []
    };
  },

  methods: {
    toChat(name) {
      this.$router.push("/ChatApp");
      //this.userName = this.friend;
      this.$emit("pushName", name);
      //console.log(val);
    },

    getAxiosData() {
      let vm = this;
      vm.axios
        // 抓取10筆資料
        .get("https://randomuser.me/api/?results=10") //外部json
        .then(function(response) {
          //console.log(success);
          vm.AxiosData = response.data.results;
        })
        .catch(function(error) {
          // 抓取失敗
          console.log(error);
        });
    }
  },

  mounted() {
    // mounted: 生命週期-生命結束前執行
    this.getAxiosData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
