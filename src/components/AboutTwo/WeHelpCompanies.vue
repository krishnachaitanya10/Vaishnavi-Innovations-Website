<template>
  <div>
    <div class="about-area ptb-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-image-warp image-three">
              <div
                class="video-btn popup-youtube"
                @click="togglePopup"
                style="cursor: pointer"
              >
                <i class="bx bx-play"></i>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="about-content warp">
              <span>About Us</span>
              <h3>We Help Companies to Generate Leads and Increase in Sales</h3>
              <div class="bar"></div>
              <strong
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt labore dolore magna aliqua.</strong
              >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>

              <div class="about-inner-content">
                <div class="icon">
                  <i class="flaticon-check"></i>
                </div>
                <h4>Online Presence</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div class="about-inner-content">
                <div class="icon">
                  <i class="flaticon-check"></i>
                </div>
                <h4>Marketing Strategy</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div class="about-inner-content">
                <div class="icon">
                  <i class="flaticon-check"></i>
                </div>
                <h4>Promote local Sale</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div class="about-btn">
                <NuxtLink to="/about-one" class="default-btn">
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popup-video" v-if="isPopup">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="popup-overlay-close" @click="togglePopup">
            <div class="popup-overlay-close-line"></div>
            <div class="popup-overlay-close-line"></div>
          </div>
          <div class="play-video">
            <iframe
              src="https://www.youtube.com/embed/g1WG4D0Aiek"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "WeHelpCompanies",
  data() {
    return {
      isPopup: false,
    };
  },
  methods: {
    togglePopup() {
      this.isPopup = !this.isPopup;
    },
  },
};
</script>