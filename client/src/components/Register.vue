<template>
  <div>
    <h1>Register</h1>

    <input type="text" name="email" v-model="email" placeholder="email"/>
    <br>
    <input type="password" name="password" v-model="password" placeholder="password" />
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log('Email has changed', value)
    }
  },
  methods: {
    async register () {
      const responce = await AuthentificationService.register({
        email: this.email,
        password: this.password
      })
      console.log(responce.data)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello'
    }, 1000)
  }
}
</script>

<style scoped>

</style>
