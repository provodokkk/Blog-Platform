<template>
<!-- Settings card -->
<div class="container settings mt-5 mb-5">
  <div class="row">
    <div class="col-md-2"></div>
      <div class="settings-area col-md-8 border-right mt-3">
        <div class="p-3 py-3">

          <div class="d-flex justify-content-between align-items-center mb-2">
            <h4 class="text-right">Profile Settings</h4>
          </div>

          <div class="row profile-header">
            <div class="col-md-1 me-4">
              <div class="profile-photo">
                <img src="../assets/profile_photo.jpg">
                <div class="middle-profilepic text-center card-img-overlay d-none flex-column justify-content-center">
                  <div class="text-profilepic text-success">
                    <i class="fas fa-camera"></i>
                    <div class="text-profilepic">Change it</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-7">
              <div class="row mt-1">
                <div class="col-md-12">
                  <button class="btn btn-primary">Change profile photo</button>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-2">
            <div class="col-md-12"><label class="labels">Username</label><input type="text" id="username" class="form-control" placeholder="Username"></div>
          </div>

          <div class="row mt-2">
            <div class="col-md-6"><label class="labels">Name</label><input type="text" id="name" class="form-control" placeholder="Name" value=""></div>
            <div class="col-md-6"><label class="labels">Surname</label><input type="text" id="surname" class="form-control" value="" placeholder="Surname"></div>
          </div>

          <div class="row mt-4">
            <div class="d-flex flex-row align-items-center mb-2">
              <div class="form-outline flex-fill">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" checked="checked" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                  <label class="form-check-label" for="inlineRadio1" >Male</label>
                </div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                  <label class="form-check-label" for="inlineRadio2">Female</label>
                </div>
              </div>
            </div>
            <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" id="mobileNumber" class="form-control" placeholder="Mobile Number" value=""></div>
            <div class="col-md-12"><label class="labels">Country</label><input type="text" id="country" class="form-control" placeholder="Country" value=""></div>
            <div class="col-md-12"><label class="labels">Address</label><input type="text" id="address" class="form-control" placeholder="Address" value=""></div>
            <div class="col-md-12"><label class="labels">Email</label><input type="text" id="email" class="form-control" placeholder="Email" disabled></div>
            <div class="col-md-12"><label class="labels">Website</label><input type="text" id="website" class="form-control" placeholder="Website" value=""></div>
            <div class="col-md-12"><label class="labels">Education</label><input type="text" id="education" class="form-control" placeholder="Education" value=""></div>
          </div>

          <div class="mt-4 text-center">
            <button type="submit" id="saveProfile" class="btn btn-primary profile-button">Save Profile</button>
            <div class="successMessage" style="display: none;">Saved!</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
html body {
  background: linear-gradient(
    90deg, rgba(18,12,124,1) 0%,
    rgba(0,0,185,1) 100%
  );
  font-family: 'Golos Text', sans-serif;
}

.settings {
  min-height: 100vh;
}

.labels {
  font-size: 11px;
}

.settings-area {
  background: #3500D3;
  color: #fff;
  border-radius: 20px;
}

.profile-photo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit:cover;
}

.successMessage {
  color: darkgreen;
}
</style>
