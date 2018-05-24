<template>
    <div class="container d-flex justify-content-center" style="margin-top: 10%;">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Login</h5>
              <small class="card-text">Haven't Register with us ? </small>
              <a href="#" data-toggle="modal" data-target="#exampleModal"><small>Sign up here</small></a>
              <hr>  
              <div class="form-group">
                    <label for="emailLogin">Email address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" v-model="emailLogin">
                </div>
                <div class="form-group">
                    <label for="passwordLogin">Password</label>
                    <input type="password" class="form-control" placeholder="Enter Password" v-model="passwordLogin">
                </div>
                <button class="btn btn-primary" @click="login">Submit</button>
                <hr>
            </div>
          </div>
          
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Name" v-model="regName">
                    </div>
                    <div class="form-group">
                        <label for="emailRegister">Email address</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" v-model="regEmail">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="passwordRegister">Password</label>
                        <input type="password" class="form-control" placeholder="Enter Password" v-model="regPassword">
                    </div>
                    <div class="form-group">
                        <label for="passwordRegister">Password Confirm</label>
                        <input type="password" class="form-control" placeholder="Enter Password again" v-model="regPasswordConfirm">
                    </div>                    
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="register">Submit</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            emailLogin: '',
            passwordLogin: '',
            regEmail: '',
            regName: '',
            regPassword: '',
            regPasswordConfirm: ''
        }
    },
    methods: {
        login () {
            let user = {
                email: this.emailLogin,
                password: this.passwordLogin
            }
            
            this.emailLogin = ''
            this.passwordLogin = ''

            this.$store.dispatch('signIn', user)
            .then(() => {
                this.$router.push('/')
            })
            .catch(err => {
                alert(err.message)
            })
        },
        register () {
            let user = {
                name: this.regName,
                email: this.regEmail,
                password: this.regPassword
            }

            this.regEmail =  ''
            this.regName =  ''
            this.regPassword =  ''
            this.regPasswordConfirm =  ''

            this.$store.dispatch('signUp', user)
            .then(() => {
                this.$router.push('/')
            })
            .catch(err => {
                alert(err.message)
            })
        }
    },
    created () {
        if(localStorage.getItem('token')) {
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>
