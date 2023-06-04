<template>
  <div>
    <!-- Header -->
    <header style="margin-top: -10px;" class="page-header gradient">
      <div class="container">
        <div class="row align-items-center justify-content-center py-5">
          <div class="header-text col-lg-6">
            <h2>Verve is</h2>
            <p>Find out more interesting things for yourself and share your experience with us!</p>
          </div>

          <div class="header-img col-lg-6 mt-5">
            <img src="../assets/conversation.jpg">
          </div>
        </div>
      </div>
    </header>

    <!-- Article carousel -->
    <div id="daily-top-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#daily-top-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#daily-top-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#daily-top-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active c-item" data-bs-interval="5000">
          <img src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100" class="d-block w-100 c-img" alt="Slide 1">
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center" style="top: 0">
            <h5>Carousel header 1</h5>
            <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae nemo soluta, doloremque dicta voluptates voluptas, ducimus illo corrupti autem noe deleniti.</p>
            <a href="article.html">
              <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Read</button>
            </a>
          </div>
        </div>

        <div class="carousel-item c-item" data-bs-interval="5000">
          <img src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100" class="d-block w-100 c-img" alt="Slide 2">
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center" style="top: 0">
            <h5>Carousel header 2</h5>
            <p class="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero culpa voluptates veritatis, in possimus molestias? Repellendus iure provident totam laudantium maiores ipsam itaque minus blanditiis unde, quos, cupiditate quia error.</p>
            <a href="article.html">
              <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Read</button>
            </a>
          </div>
        </div>

        <div class="carousel-item c-item" data-bs-interval="5000">
          <img src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100" class="d-block w-100 c-img" alt="Slide 3">
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center" style="top: 0">
            <h5>Carousel header 3</h5>
            <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque optio, pariatur sed omnis temporibus nemo dolorum, nesciunt odit possimus nobis vel, magni quae. Atque recusandae aliquid vitae? Unde, alias reprehenderit?</p>
            <a href="article.html">
              <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Read</button>
            </a>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#daily-top-carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#daily-top-carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Anchor to the "about us" section -->
    <div id="about-us"></div>

    <div class="wave gradient">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#000b76" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,101.3C384,107,480,85,576,112C672,139,768,213,864,213.3C960,213,1056,139,1152,96C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>

    <!-- "about us" section -->
    <div  class="feature">
      <div class="container">
        <div class="row py-3 align-items-center justify-content-center">

          <div class="col-xl-6 about-us-img">
            <img src="../assets/about_us.jpg" alt="">
          </div>

          <div class="col-xl-6">
            <h1>About us</h1>
            <p class="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis earum, fuga sit dolor labore aliquid sunt ad, vero numquam quis repudiandae. Odit vero nobis ullam asperiores rem nisi sit!</p>
            <ul>
              <li>first</li>
              <li>second</li>
              <li>third</li>
              <li>fourth</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="vawe gradient">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#000b76" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,138.7C672,160,768,192,864,192C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>

    <!-- Feedback section -->
    <section class="contact gradient">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-6">
            <h1>Contact us:</h1>

            <div class="mb-3">
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>

            <div class="mb-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your questions..."></textarea>
            </div>

            <button class="btn btn-primary" type="submit">Submit</button>
          </div>

          <div class="contact-img col-xl-6">
            <img src="../assets/communication.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
html, body {
    height: 100%;
    font-size: 1rem;
    font-family: 'Golos Text', sans-serif;
}

.profile-image {
    height: 30px;
    width: 30px;
    border-radius: 100%;
}

.gradient {
    background: rgb(18,12,124);
    background: linear-gradient(
        90deg, rgba(18,12,124,1) 0%,
        rgba(0,0,185,1) 100%
    );
    color: #fff;
}

.header-text {
    padding-top: 5rem;
    color: #fff;
}

.header-img img {
    border-radius: 20px;
    max-width: 100%;
    height: auto;
}

.carousel-item {
    transition: transform 0.3s ease-in-out;
}

.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
    transition: opacity 0s 0.5s;
}

.c-item {
    height: 35rem;
}

.c-img {
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
}

.feature {
    background: #000b76;
    color: #fff;
}

.about-us-img img {
    border-radius: 20px;
    max-width: 100%;
    height: auto;

    filter: brightness(90%);
}

.contact {
    padding-bottom: 1rem;
}

.contact-img img{
    border-radius: 20px;
    max-width: 100%;
    height: auto;
    margin-top: 2rem;
}
</style>
