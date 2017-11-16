<template>
  <section class="vue-axios">
    <header>
      <h1>{{ msg }}</h1>
      <mu-auto-complete 
        hintText="搜尋好友" 
        @change="handlechange" 
        v-model="catchName"/>

      <!-- <mu-dropDown-menu :value="value" @change="handleChange">
        <mu-menu-item value="1" title="線上"/>
        <mu-menu-item value="2" title="線下"/>
      </mu-dropDown-menu> -->

      
    </header>
    
    <div class="mobile-tear-sheet">
      <mu-list>
        <mu-sub-header>聊天室</mu-sub-header>
        <!-- @click="changeBG(item)" :class="{'bg-info': item.selected}" -->
        <mu-list-item 
          :title="item.name.first" 
          v-for="(item, index) in filterName" 
          :key="item.title">

          <div class="mu-text">{{ item.email }}</div>
          <mu-avatar :src="item.picture.large" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right" @click="toChat(item.name.first)"/>

        </mu-list-item>
      </mu-list>
      <mu-divider/>

      <!-- <mu-list>
        <mu-sub-header>搜尋聯絡人</mu-sub-header>
          <mu-list-item 
            :title="find.name.first"
            v-for="(find, index) in filterName"
            :key="find.id">
            
            <mu-text>{{ find.email }}</mu-text>
            <mu-avatar :src="find.picture.large" slot="leftAvatar"/>
            <mu-icon value="chat_bubble" slot="right" @click="toChat(find.name.first)"/>
          </mu-list-item>
      </mu-list> -->
    </div>

    
  </section>
</template>


<script>
// import mobileTearSheet from "./components/mobileTearSheet";
export default {
  name: "vueAxios",

  data() {
    return {
      handlechange: "",
      catchName: "",
      msg: "Axios.",

      AxiosData: this.$store.state.axiosData,
      friend: this.$store.state.friend
    };
  },

  computed: {
    // 搜尋判斷
    filterName() {
      //console.log(this.AxiosData);
      var self = this;
      return this.AxiosData.filter(function(value) {
        //console.log(value);
        //定義我們要分類的項目，然後放進tag陣列裡面
        var tag = [value.name.first]; //定義要搜尋的內容: 這裡只有搜尋user-name
        var flag = true; //boolean: 定義顯示

        //將每筆資料抓出來進行比對
        tag.forEach(function(obj) {
          //console.log(obj);

          //判斷搜尋輸入的內容
          if (self.catchName != null) {
            // [1, 2, 3, 4, 5] filter(function(i)){return i >3} → [4, 5]
            // toLowerCase() → 不區分大小寫(英文)
            if (obj.indexOf(self.catchName.toLowerCase()) != -1) {
              flag = true;
            } else {
              flag = false;
            }
          }
        });

        return flag; // 沒有搜尋輸入時顯示全部
      });
    }

    // showAxiosData() {
    //   //return this.$store.state.status;
    //   //return this.$store.state.axiosData;
    // }
  },

  methods: {
    toChat(name) {
      //this.userName = this.friend;
      // this.$emit("pushName", name);

      // 將name(item.name.first)放到vuex:store-friend中
      this.$store.state.friend = name;
      // 跳轉頁面到聊天室
      this.$router.push("/ChatApp");
      //console.log(this.$store.state.friend);
      //console.log(val);
    },

    // getAxiosData() {
    //   let vm = this;
    //   vm.axios
    //     // 抓取10筆資料
    //     .get("https://randomuser.me/api/?results=10") //外部json
    //     .then(function(response) {
    //       //console.log(response); 顯示object-data
    //       vm.AxiosData = response.data.results;

    //       // vm.AxiosData.forEach(function(item) {
    //       //   // 假設資料結構並非一開始所定義的，可以使用 `$set` 來加入新增的屬性。
    //       //   vm.$set(item, "selected", false);
    //       // }, this);
    //     })
    //     .catch(function(error) {
    //       // 抓取失敗
    //       console.log(error);
    //     });
    // },

    getAxiosInfo() {
      this.$store.dispatch("sendAxiosInfo");
    }
  },

  mounted() {
    // mounted: 生命週期-生命結束前執行
    //this.getAxiosData();
    this.$store.dispatch("sendAxiosInfo");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
