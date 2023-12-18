<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center pt-3">
        <router-link :to="{ name: 'HelloWorld' }">
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signup-div" class="flex-item border">
          <h2 class="pt-4 pl-4">Tạo tài khoản</h2>
          <form @submit="signup" class=" pt-4 pl-4 pr-4">
            <div class="form-group " >
              <input
                type="username"
                class="form-control"
                v-model="username"
                required
                placeholder="username" 
              />
            </div>
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <input
                    type="name"
                    class="form-control"
                    v-model="firstName"
                    required
                     placeholder="First name" 
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <input
                    type="name"
                    class="form-control"
                    required
                     placeholder="Last Name" 
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="password"
                required
                 placeholder="Password" 
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="passwordConfirm"
                required
                 placeholder="Password confirm" 
              />
            </div>
          <div class="form-group" >
            <label for="exampleFormControlSelect1">Phân Quyền</label>
            <select
              name="roles"
              v-model="role"
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
                <button type="submit" class="btn btn-primary mt-2 py-0">
                Create Account
                </button>
          </form>
          <hr />
            <router-link :to="{name :'Signin'}">
                <small class="form-text text-muted pt-2 pl-4 text-center">
                    Already Have an Account?
                </small>
            </router-link>
          <p class="text-center">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert';
import axios from 'axios';
export default {
    props:["baseURL"],
    name:"SignupView",
    data(){
        return{
            id:null,
            username:null,
            firstName:null,
            password:null,
            role:null,
            passwordConfirm:null,
            accounts:[],
        }
    },
    methods:{
        async signup(e){
            e.preventDefault();
            if(this.password === this.passwordConfirm){
                const newAccount = {
                    id :this.id,
                    username:this.username,
                    firstName:this.firstName,
                    password:this.password,
                    role:this.role
                }
                await axios.post(`${this.baseURL}accounts`,newAccount)
                .then(()=>{
                    swal({
                        text: "User signup successful. Please Login",
                    icon: "success",
                    closeOnClickOutside: false,
                    });
                        this.$emit("fetchData");
                        this.$router.replace("/HomeView")
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
            else{
                 swal({
                        text: "Error! Passwords are not matching",
                        icon: "error",
                        closeOnClickOutside: false,
                    });
            }
        }
    }
}
</script>

<style>

</style>