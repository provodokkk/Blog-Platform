<template>
  <section>
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-lg-12 col-xl-11">
          <div class="card my-5">
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form id="form" class="mx-1 mx-md-4">

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="input-control form-outline flex-fill mb-0">
                          <input v-model="username" type="text" id="username" class="form-control" placeholder="Username"/>
                          <div class="error" v-html="usernameError" />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="input-control form-outline flex-fill mb-0">
                          <input v-model="email" type="email" id="email" class="form-control" placeholder="Your Email"/>
                          <div class="error" v-html="emailError" />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="input-control form-outline flex-fill mb-0">
                          <input v-model="password" type="password" id="password1" class="form-control" placeholder="Password"/>
                          <div class="error" v-html="passwordError" />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="input-control form-outline flex-fill mb-0">
                          <input v-model="confirmPassword" type="password" id="password2" class="form-control" placeholder="Repeat your password"/>
                          <div class="error" v-html="confirmPasswordError" />
                        </div>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input class="form-check-input me-2" type="checkbox" value=""/>
                        <label class="form-check-label" for="form2Example3">I agree all statements in <a href="#!">Terms of service</a></label>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <div class="error" v-html="defaultError" />
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button @click="register" class="btn btn-primary btn-lg">Register</button>
                      </div>

                      <div class="d-flex justify-content-center mb-5">
                        <span>Do you already have an account?
                          <router-link to="login">
                            <button class="btn btn-primary btn-sm">Login</button>
                          </router-link>
                        </span>
                      </div>

                    </form>
                  </div>

                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image">
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',

      usernameError: null,
      emailError: null,
      passwordError: null,
      confirmPasswordError: null,
      defaultError: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
      } catch (error) {
        this.usernameError = error.response.data.usernameError
        this.emailError = error.response.data.emailError
        this.passwordError = error.response.data.passwordError
        this.confirmPasswordError = error.response.data.confirmPasswordError
        this.defaultError = error.response.data.defaultError
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
