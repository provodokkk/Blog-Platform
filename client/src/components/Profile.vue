<template>
  <!-- Page content-->
  <section style="margin-top: -10px;">
    <div class="container content">
      <div class="row">
        <div class="profile col-xl-12">
          <center class="mt-2">
            <a href="#AboutModal" data-bs-toggle="modal"><img src="../assets/profile_photo.jpg" class="profile-img"></a>
            <h3 id="profile-nickname" class="mb-5"><a id="profile-nickname-ref" href="#AboutModal" data-bs-toggle="modal"></a></h3>
          </center>
        </div>

        <div class="modal fade" id="AboutModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="pt-1">

              <div class="modal-content mt-4">
                <div class="modal-header">
                  <h5 class="modal-title">Information</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="row">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>

        <!-- Pagination-->
        <nav aria-label="Pagination">
          <hr class="my-0" />
          <ul class="pagination justify-content-center my-4">
            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">←</a></li>
            <li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
            <li class="page-item"><a class="page-link" href="#!">2</a></li>
            <li class="page-item"><a class="page-link" href="#!">3</a></li>
            <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
            <li class="page-item"><a class="page-link" href="#!">15</a></li>
            <li class="page-item"><a class="page-link" href="#!">→</a></li>
          </ul>
        </nav>

      </div>
    </div>
  </section>
</template>

<script>
import ArticleCard from './ArticleCard'

export default {
  components: {
    ArticleCard
  }
}
</script>

<style scoped>
html body,
section {
  background: linear-gradient(90deg,
      rgba(18, 12, 124, 1) 0%,
      rgba(0, 0, 185, 1) 100%);
  font-family: 'Golos Text', sans-serif;
}

.profile-data {
  color: #707880;
}

#profile-nickname a {
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

.content {
  margin-top: 4rem;
  min-height: 100vh;
}
</style>
