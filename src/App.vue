<template>
  <div id="app">
    <MainView/>
    <hr>
    <router-view
      :baseURL="baseURL"
      :books="books"
      :accounts="accounts"
      :cartBook="cartBook"
      @fetchData="fetchData"
    ></router-view>
    <hr>
    <HomeView/>
    <Carousel/>
    <hr>
    <SlideParent/>
    <hr>
    <Footer/>
  </div>
</template>
<script>
// import { Carousel3d, Slide } from 'vue-carousel-3d';
import MainView from './components/MainView.vue'
import Footer from './components/Footer.vue'
import Carousel from './components/Carousel.vue';
import HomeView from './Views/HomeView.vue';
import SlideParent from './Views/SlideParent.vue'
import axios from 'axios'
export default{
  name: 'App',
  components:{
    MainView,Footer,Carousel,SlideParent,HomeView
  },
  data() {
    return {
      baseURL: "http://localhost:3000/",
      accounts: null,
      books: null,
      cartBook:null
    }
  },
  methods: {
    //fetch data 
    async fetchData() {
      try {
        const accountRes = await axios.get(this.baseURL + "accounts")
        this.accounts = accountRes.data;
        console.log("Accounts: ", accountRes.data);
        const bookRes = await axios.get(this.baseURL + "books");
        this.books = bookRes.data;
        console.log("Books: ", bookRes.data);
        const cartRes = await axios.get(this.baseURL + "cart");
        this.cartBook = cartRes.data;
      } catch (err){
        console.log("Error", err)
      }
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
