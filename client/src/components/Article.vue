<template>
  <section class="content" style="margin-top: -10px;">
    <div class="profile col-xl-12">
      <center>
        <a href="profile.html"><img src="../assets/profile_photo.jpg" class="profile-img mt-2"></a>
        <h3 class="profile-nickname mb-5"><a id="profile-nickname-ref" href="profile.html"></a></h3>
      </center>
    </div>
    <!-- Content card-->
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12 card">
          <article>
            <header class="mb-4">
              <h1 class="fw-bolder mb-1">Welcome to First Post!</h1>
              <a class="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
            </header>

            <figure class="mb-4">
              <center>
                <img class="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." />
              </center>
            </figure>

            <section class="mb-5">
              <p class="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind.
                Because it transforms who we are, how we live, and it gives us an understanding of our place in the
                universe.</p>
              <p class="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere,
                so there's no reason to think that Earth would be unique in that regard. Whether of not the life became
                intelligent is a different question, and we'll see if we find that.</p>
              <p class="fs-5 mb-4">If you get asteroids about a kilometer in size, those are large enough and carry enough
                energy into our system to disrupt transportation, communication, the food chains, and that can be a really
                bad day on Earth.</p>
              <h2 class="fw-bolder mb-4 mt-5">I have odd cosmic thoughts every day</h2>
              <p class="fs-5 mb-4">For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day
                and I realized I could hold them to myself or share them with people who might be interested.</p>
              <p class="fs-5 mb-4">Venus has a runaway greenhouse effect. I kind of want to know what happened there because
                we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's
                bone dry today. Something bad happened there as well.</p>
            </section>
          </article>

          <!-- Comments section-->
          <section class="mb-2">
            <div class="card card-comments bg-light">
              <div class="card-body">
                <div class="comments">
                  <textarea id="newComment" class="form-control mb-2" rows="3"
                    placeholder="Join the discussion and leave a comment!"></textarea>
                  <button id="addComments" class="btn btn-primary">Add Comment</button>
                  <div id="allComments"></div>

                </div>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
html body,
.content {
  background: linear-gradient(90deg, rgba(18, 12, 124, 1) 0%,
    rgba(0, 0, 185, 1) 100%);
  font-family: 'Golos Text', sans-serif;
}

.profile {
  margin-top: 4rem;
}

.profile-nickname a {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.profile .profile-img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}

.profile-nickname a:hover {
  color: #022140;
}

.card {
  background-color: white;
  border-radius: 20px;
  margin: 10px 0px;
  padding: 2rem;
}

.card-comments {
  padding: 1rem;
}

.card-body {
  min-height: 5rem;
  /* display: -webkit-box; */
  -webkit-box-orient: horizontal;
  -webkit-line-clamp: 3;
  overflow: scroll;
}

.commenter {
  display: inline;
}</style>
