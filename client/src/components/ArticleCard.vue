<template>
  <div class="col-md-4">
    <div class="card mb-4">
      <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
      <div class="card-body">
        <div class="small text-muted">January 1, 2022</div>
        <h2 class="card-title h4">Post Title</h2>
        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae atque quisquam dolores, nulla eligendi dolor, sint corporis numquam sapiente, eaque veritatis. Voluptas a reiciendis ullam modi cumque? Dolor, molestias perspiciatis.</p>
        <a @click="navigateTo({name: 'article'})" class="btn btn-primary">Read more →</a>
      </div>
    </div>
  </div>
</template>

<script>
import Article from './Article'

export default {
  components: {
    Article
  },
  methods: {
    navigateTo (route) {
      const currentPage = this.$router.history.current.name
      const redirectToPage = route.name
      if (currentPage !== redirectToPage) {
        this.$router.push(route)
      }
    }
  }
}
</script>

<style scoped>
.card-text {
  min-height: 4rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
