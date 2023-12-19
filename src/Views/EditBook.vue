<template>
   <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Tour</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form v-if="book">
          <div class="form-group">
            <label for="name">Title</label>
            <input type="text" class="form-control" v-model="book.title" required>
          </div>
          <div class="form-group">
            <label for="description">author</label>
            <input type="text" class="form-control" v-model="book.author" required>
          </div>
          <div class="form-group">
            <label for="imageURL">ImageURL</label>
            <input type="text" class="form-control" v-model="book.imageURL" required>
          </div>
          <div class="form-group">
            <label for="price">publishedYear</label>
            <input type="number" class="form-control" v-model="book.publishedYear" required>
          </div>
          <button type="button" class="btn btn-primary" @click="editBook">Submit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'
export default {
    data(){
        return{
            book:null,
            id :null,
        }
    },
    props:["baseURL","books"],
    methods:{
        async editBook(){
            try{
                 console.log('Current this.id:', this.id);
                await axios.post(`${this.baseURL}books/${this.id}`, this.book)
                .then(() =>{
                    swal({
                        text: "Thêm thành công",
                        icon: "success",
                        closeOnClickOutside: true,
                    });
                    this.$router.push('/book');

                })
            }
            catch(err){
                console.log(err);
            }
        }
    },
    mounted(){
        this.id = this.$route.params.id;
        console.log(this.id);
        console.log('Current this.book:', this.book);
        this.book = this.books.find(book => book.id == this.id);
        // this.book = this.books.find(book => book.id == this.id);
    }
}
</script>

<style>

</style>