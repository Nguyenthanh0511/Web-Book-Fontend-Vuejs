<template>
  <div class="container">
   <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row pt-5">
                <div id="signup-div" class=" flex-item" style="width:500px; border: 2px solid black; border-radius: 12px;">
                    <h2 class="text-center" style="margin-top: 10px;">Đăng nhập</h2>
                    <form @submit="signin" class="pt-4 pl-4 pr-4 ">
                         <div class="form-group px-3">
                        <input
                            type="username"
                            class="form-control"
                            v-model="username"
                            required
                            placeholder="username"
                        />
                        </div>
                        <br>
                        <div class="form-group px-3 ">
                        <input
                            type="password"
                            class="form-control"
                            v-model="password"
                            required
                            placeholder="Password"
                        />
                        </div>
                         <div class="mt-5 d-flex justify-content-center" style="padding :-20px;" >
                            <button type="submit" class="btn btn-primary py-0 px-3">
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                     <hr />
                    <small class="form-text text-muted pt-2 pl-4 text-center"
                    >
                    <router-link class="link" :to = "{name:'Signup'}">
                        <button class="btn " style="">
                            Đăng Ký tài khoản
                        </button>
                    </router-link>
                    </small
                    >
                    <p class="text-center">
                    </p>
                </div>

            </div>
   </div>
    
        
  </div>
</template>

<script>
import swal from 'sweetalert';
export default {
    props:["accounts"],
    name:"SigninViews",
    data(){
        return{
        username:null,
        password:null,
        loading: null,
         }
    },
    methods: {
            async signin(e) {
            e.preventDefault();
            this.loading = true;

            const user = {
                username: this.username,
                password: this.password,
            };
             // Kiểm tra xem users có tồn tại không
            if (this.accounts && this.accounts.length > 0) {
                try {
                const foundUser = this.accounts.find(u => u.username === user.username);
                if (foundUser && foundUser.password === user.password) {
                    localStorage.setItem("UserRole", foundUser.role); // khóa và value 
                    swal({
                        text: "Đăng nhập thành công",
                        icon: "success",
                        closeOnClickOutside: true,
                    });
                    this.$emit("fetchData");
                    this.$router.replace("/Home");
                } else {
                    // Người dùng không tìm thấy hoặc mật khẩu không khớp
                    throw new Error("username hoặc mật khẩu không đúng");
                }
                } catch (err) {
                    console.error("Đăng nhập thất bại:", err);

                    swal({
                        text: "Đăng nhập thất bại. Vui lòng kiểm tra thông tin đăng nhập của bạn.",
                        icon: "error",
                        closeOnClickOutside: true,
                    });
                    } finally {
                    this.loading = false;
                    }
                } else {
                    console.error("Mảng users không tồn tại hoặc là mảng trống");
                }
            },
        },

}
</script>

<style>

</style>