<template>
  <nav class="navbar navbar-expand-lg fixed-top m-0">
    <div class="container-fluid">
      <a @click="navigateTo({name: 'root'})" class="navbar-brand navbar-item-text" href="#">Verve</a>
      <div v-if="$store.state.isUserLoggedIn" class="navbar-profile d-flex">
        <a href="#"><img src="../assets/profile_photo.jpg" class="profile-image"></a>
        <a class="nav-link navbar-item-text ms-1 mt-1" aria-current="page" href="#">Profile</a>
      </div>
      <a v-scroll-to="'#about-us'" @click="navigateTo({name: 'root'})" class="navbar-item-text">About us</a>
      <a v-if="$store.state.isUserLoggedIn" class="navbar-item-text" href="#">Profile settings</a>
      <a v-if="$store.state.isUserLoggedIn" @click="logout" class="navbar-item-text" href="#">Sign out</a>
      <a v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'login'})" class="navbar-item-text" href="#">Sign in</a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      const currentPage = this.$router.history.current.name
      const redirectToPage = route.name
      if (currentPage !== redirectToPage) {
        this.$router.push(route)
      }
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
      this.navigateTo({name: 'login'})
    }
  }
}
</script>

<style scoped>
.navbar {
  background: #3500D3;
}

.navbar .navbar-item-text {
  color: #fff;
}

.navbar .navbar-item-text:hover {
  color: #022140;
  transition: color 0.2s ease-in-out;
}
.navbar .navbar-item-text {
  text-decoration: none;
}

.navbar-profile:hover .navbar-item-text {
  color: #022140;
  transition: color 0.2s ease-in-out;
}

.navbar .dropdown-menu {
  background: #022140;
}

.navbar .dropdown-menu .dropdown-item {
  background: #022140;
  color: #fff;
}

.navbar .dropdown-menu .dropdown-item:hover {
  background: #3500D3;
  color: #fff;
}

.navbar .dropdown-menu .dropdown-divider {
  border-top: 1px solid #fff;
}

.profile-image {
  height: 30px;
  width: 30px;
  border-radius: 100%;
}
</style>
