<template>
 <div class="card">
      <div class="embed-responsive">
          <img 
          :src="book.imageURL" 
          alt="Card image book"
          class="img-fluid" style="max-width:250px;height:auto;">
      </div>
      <div class="card-body">
        <h5 class = "card-title">
          {{book.title}}
        </h5>
        <p class="cart-text">
          {{book.author}}
        </p>
          <div>
            
            <div>
              <!-- Phần hiển thị khi không có người dùng đăng nhập -->
              <p>Please log in to view content.</p>
            </div>
        </div>
      </div>

  </div>

</template>

<script>
export default {
name:"BookChild",
props:["book"]
}
</script>

<style>

</style>