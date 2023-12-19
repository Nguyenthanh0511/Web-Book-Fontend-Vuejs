<template>
   <div class="container">
        <div v-if = "book" class="row ">
            <div class="col-md-1"></div>
           
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ book.title }}</h4>
                <h6 class="font-weight-bold"> $ {{ book.price }}</h6>
                <p>
                    {{ book.author }}
                </p>
                <!-- Giá tiền  -->

                <div class="d-flex  flex-row justify-content-between">
                     <div class="input-group col-md-3 col-4 p-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Quantity</span>
                        </div>
                    <input class="form-control" type="number" v-model="quantity"  style="width: 80px;"/>
                   </div>
                <!-- add to cart  -->
                <div class="input-group col-md3 col-4 p-0">
                    <button
                    type=""
                    id="add-to-cart-button"
                    class="btn"
                    @click ="addToCart(this.id)"
                    >
                    Thêm cart
                    </button>
                    <ion-icon name="cart-outline" v-pre></ion-icon>
                </div>
                </div>
                <!-- Feature -->
                <div class="features pt-3">
                    <h5><strong>Features</strong></h5>
                     <ul>
                       <li>Sách là kho tàng tri thức nhân loại , tìm tới sách là tìm tới chìa khóa cho cuộc đời chúng ta</li>
                       <li>Hoài cổ chí kim , sách cổ giá ngon</li>
                       <li>Tìm về cội nguồn của sách là nhìn về lịch sử phát triển của nhân lọai , ta có cái nhìn tổng quát</li>
                    </ul>
                </div>
            </div>
             <div class="col-md-4 col-12">
                <img :src="book.imageURL" class="img-fluid">
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert'
export default {
    data(){
        return{
            quantity: 1,
            book:null,
            bookArray:""
        }
    },
    props:["baseURL","books"],
    methods:{
        async addToCart(){
            try{
                await axios.post(`${this.baseURL}cart`,{
                    bookArray:this.books.find(book => book.id == this.id),
                    quantity:this.quantity
                    })
                .then(()=>{
                    swal({
                        text: "sửa thành công",
                        icon: "success",
                        closeOnClickOutside: true,
                    });
                    this.$router.push('/book');
                })
            }catch(err){
                console.log(err);
            }
        }
    },
    mounted(){
        this.id = this.$route.params.id;
        console.log("id :",this.id);
        this.book = this.books.find(book => book.id == this.id);
    }
}
</script>

<style>

</style>