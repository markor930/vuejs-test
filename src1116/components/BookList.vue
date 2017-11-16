<template>
<section id="book-list">
  <header>
    <h1>{{title}}</h1>
      <div class="container">
        <div>
          <mu-auto-complete 
            hintText="Enter book title" 
            labelFloat label="Book Title" 
            v-model="newBook.bookTitle"/>
        </div>

        <div>
          <mu-auto-complete 
            hintText="Enter Book Author" 
            labelFloat label="Book Author"
            v-model="newBook.bookAuthor"/>
          </div>
        <mu-raised-button label="Submit" class="demo-raised-button" @click="writeUserData()" primary/>
      </div>
  </header>

  <footer class="footer">
    <div>
      <!-- <mu-raised-button label="unselect" @click="unselect"/> -->
      <mu-table ref="table">
        <mu-thead>
          <mu-tr>
            <mu-th>ID</mu-th>
            <mu-th>Book Name</mu-th>
            <mu-th>Author</mu-th>
            <mu-th>Remove</mu-th>
          </mu-tr>
        </mu-thead>

        <mu-tbody v-for="(book, index) in books" :key="book">
          <mu-tr>
            <mu-td>{{index + 1}}</mu-td>
            <mu-td>{{book.Title}}</mu-td>
            <mu-td>{{book.Author}}</mu-td>
            <mu-td><mu-icon-button icon="delete" @click="removeBook(book)" /></mu-td>
          </mu-tr>
        </mu-tbody>
      </mu-table>
    </div>
  </footer>
</section>
</template>

<script type="text/ecmascript-6">
/*** Firebase Connected ***/
import firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBCQe_eZyH0ufG6EfVDKjnXBnrwFPsQInQ",
  authDomain: "myfirebase-login.firebaseapp.com",
  databaseURL: "https://myfirebase-login.firebaseio.com",
  projectId: "myfirebase-login",
  storageBucket: "myfirebase-login.appspot.com",
  messagingSenderId: "144525752112"
};
//connected firebase-database.
firebase.initializeApp(config);

export default {
  name: "BookList",

  firebase: {
    books: firebase.database().ref("Book/")
  },

  data() {
    return {
      title: "Books List",

      newBook: {
        bookID: 1,
        bookTitle: "",
        bookAuthor: ""
      }
    };
  },
  computed: {},

  methods: {
    removeBook(book) {
      firebase
        .database()
        .ref("Book/")
        .child(book[".key"])
        .remove();
    },

    writeUserData(Title, Author) {
      firebase
        .database()
        .ref("Book/book-" + this.newBook.bookID)
        .set({
          ID: (this.newBook.bookID += 1),
          Title: this.newBook.bookTitle,
          Author: this.newBook.bookAuthor
        });
      this.newBook.bookTitle = " ";
      this.newBook.bookAuthor = " ";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#book-list {
  margin: 1em auto;
  text-align: center;
}

.footer {
  width: 60%;
  margin: 1em auto;
}
</style>
