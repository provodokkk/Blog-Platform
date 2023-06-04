<template>
  <section>
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-lg-12 col-xl-11">
          <div class="card my-5">
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
                  <form id="form" class="mx-1 mx-md-4">

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="input-control form-outline flex-fill mb-0">
                        <input v-model="email" type="email" id="email" class="form-control" placeholder="Your Email"/>
                        <div class="error" v-html="emailError" />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="input-control form-outline flex-fill mb-0">
                        <input v-model="password" type="password" id="password" class="form-control" placeholder="Password"/>
                        <div class="error" v-html="passwordError" />
                      </div>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <div class="error" v-html="defaultError" />
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button @click="login" class="btn btn-primary btn-lg">Login</button>
                    </div>

                    <div class="d-flex justify-content-center mb-5">
                        <span>Still no account?
                          <router-link to="register">
                            <button class="btn btn-primary btn-sm">Registrate</button>
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
      email: '',
      password: '',

      emailError: null,
      passwordError: null,
      defaultError: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.emailError = error.response.data.emailError
        this.passwordError = error.response.data.passwordError
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
