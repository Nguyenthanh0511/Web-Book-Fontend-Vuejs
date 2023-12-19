<template>
   <div class="container">
    <div class="col-12 text-center">
      <h3 class="pt-">
        Shopping cart Tour
      </h3>
    </div>
    <!-- Loop cart -->
    <div v-for="cartItem in cartBook" :key="cartItem.id" class="row mt-2 pt-3">
      <div class="col-2"></div>
      <div class="col-md-3 embed-responsive">
        <img :src="cartItem.bookArray.imageURL" alt="" class="w-100" style="object-fit: cover" />
      </div>
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title">
            {{ cartItem.bookArray.title }}
          </h6>
          <p class="md-0 font-weight-bold" id="item-price">
            ${{ cartItem.bookArray.price }} cái
          </p>
          <p class="mb-0">
            Quantity: {{ cartItem.quantity }}
          </p>
        </div>
        <p class="mb-0">
          price total: ${{ cartItem.bookArray.price * cartItem.quantity }}
        </p>
        <!-- Các nút và hành động khác -->
        <br>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr /></div>
    </div>
    <div class="d-flex justify-content-center total-cost pt-2 text-right">
      <h5>Total cost all: ${{ totalCost }}</h5>
    </div>
  </div>
</template>

<script>
export default {
    props:["baseURL","cartBook"],
    name:"CartView",
   computed:{
    totalCost(){
        return this.cartBook.reduce((total,cartItem)=>{
            const itemPrice = cartItem.bookArray.price;
            const quantity = cartItem.quantity;
            return total + itemPrice * quantity;
        },0)
    },
    
   }
}
</script>

<style>

</style>