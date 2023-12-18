<template>
  <div class="container">
    <div class="row">
        <div class="col-12">

        </div>
    </div>
    <div class="row">
        <div 
        v-for="book in books" :key="book.id"
        class="col-md-6 col-xl-4 col-12 d-flex">
            <BookChild :book = "book"/>
        </div>
    </div>
  </div>
</template>

<script>
import BookChild from '../components/BookChild.vue'
export default{
//đăng ký axios 
name:"BookOldDate",
components:{BookChild},
props:["books"]

//Call api 

}
</script>

<style>

</style>