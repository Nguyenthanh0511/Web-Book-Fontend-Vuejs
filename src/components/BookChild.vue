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
            <div v-if="isRoles()=== 'user'">
              <!-- Phần hiển thị cho user -->
              <router-link :to ="{name:'BookDetail',params:{id:book.id}}">
                <button class="btn btn-primary" >Đặt</button>
              </router-link>
            </div>
            <div v-if="isRoles() === 'admin'">
              <!-- Phần hiển thị cho admin -->
              <router-link :to="{name: 'EditBook',params:{id:book.id}}">
                <button class="btn btn-primary" >Chỉnh sửa</button>
              </router-link>
            </div>
            <div v-if="!isRoles()">
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
  props:["book"],
  methods:{
    isRoles(){
       const roles = localStorage.getItem("UserRole");
        return roles
    }
  }
}

</script>

<style>

</style>