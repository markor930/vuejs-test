<template>
<section id="todo-list">
  <header>
    <h1>{{title}}</h1>
    <!-- <input v-model="newTodo" @keyup.enter="addTodo()" placeholder="Write todos" autofocus="true"/> -->
    <mu-auto-complete 
      hintText="Write todos..." 
      @change="addTodo()"
      v-model="newTodo" />

  </header>
  <section id="show-todos">
    <ul>
      <li v-for="(todo,index) in todos" :key="todo.value">
        <!-- <input type="checkbox"/>
        <button @click.prevent="removeTodo(todo)">&times;</button> -->
        <mu-checkbox label="" class="demo-checkbox"/>
        <label>{{ index+1 }}. {{ todo.title }}</label>
        <mu-icon-button @click.prevent="removeTodo(todo)" icon="delete"/>
      </li>
    </ul>
  </section>
  <footer>
    <h5>vue todo-MVC dev</h5>
  </footer>
    
</section>
</template>

<script type="text/ecmascript-6">
export default {
  name: "todoList",
  data() {
    return {
      newTodo: "",
      title: "vue-todos",
      todos: []
    };
  },

  created() {
    if (this.init) {
      this.todos = JSON.parse(localStorage.getItem("vue"));
    }
  },

  computed: {
    init() {
      return localStorage.getItem("vue") != null;
    }
  },

  methods: {
    addTodo() {
      this.todos.push({
        title: "123"
      });
      this.saveToStorage();
      this.newTodo = "";
    },

    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
      this.saveToStorage();
    },
    saveToStorage() {
      localStorage.setItem("vue", JSON.stringify(this.todos));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
