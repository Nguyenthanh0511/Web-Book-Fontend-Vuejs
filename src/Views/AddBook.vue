<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Add new Book</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form>
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="title" required />
          </div>
          <div class="form-group">
            <label>author</label>
            <input type="text" class="form-control" v-model="author" required />
          </div>
          <div class="form-group">
            <label>ImageURL</label>
            <input type="url" class="form-control" v-model="imageURL" required />
          </div>
          <div class="form-group">
            <label>publishedYear</label>
            <input type="number" class="form-control" v-model="pblishedYear" required />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="number" class="form-control" v-model="price" required />
          </div>
        </form>
        <div>
          <button type="button" class="d-flex justify-content-center btn btn-primary" @click="addBook">Submit</button>
        </div>
      </div>
      <div class="col-3"></div>
     </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'
export default {
    props:["baseURL"],
    data(){
        return{
            title:null,
            author:"Trang",
            imageURL:null,
            publishedYear:null,
            price:0
        }
    },
    methods: {
        async addBook(){
            const book ={
                title:this.title,
                author:this.author,
                imageURL:this.imageURL,
                publishedYear:this.publishedYear,
                price:this.price
            }
            try{
                await axios.post(`${this.baseURL}books`,book)
                .then(()=>{
                    swal({
                        text: "Thêm thành công",
                        icon: "success",
                        closeOnClickOutside: true,
                    });
                    this.$emit("fetchData");
                    this.$router.replace("/Book");
                })
            }catch(err){
                console.log(err);
            }
        }
    }
}
</script>

<style>

</style>