<script>
import BaseCarousel from './baseComps/BaseCarousel.vue'
export default {
  components: {
    BaseCarousel,
  },
  props: {
    headerCarouselImages: Array
  },
  created() {
    console.log(this.headerCarouselImages)
  }
}
</script>

<template>
  <header>
    <div class="container">
      <nav class="navbar mb-5">
        <button class="btn">ORDER ONLINE</button>
        <div class="central-item d-flex align-items-center">
          <ul class="left-ul">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
          <img class="logo" src="../assets/img/h5-logo-divided-header.png" alt="">
          <ul class="right-ul">
            <li>Test2</li>
            <li>Test2</li>
            <li>Test2</li>
          </ul>
        </div>
        <div class="right-item">
          <ul>
            <li>
              test3
            </li>
            <li>
              test3
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <BaseCarousel :carouselId="'header-carousel'" :images="headerCarouselImages" :hasIndicator="false" />
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

header {
  background-color: black;
  color: white;
  // posiziono il background
  position: relative;
  padding-bottom: 90px;
  overflow: hidden;

  button {
    background-color: $orange;
  }
}

// pseudo-elemento per tagliare la parte in alto
header::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 110%;
  top: 0;
  left: 0;
  background-image: url(../assets/img/cielostellato.PNG);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: translateY(-50px)
}

ul {
  display: flex;
}

ul li {
  margin: 10px 15px 0 15px;
}

.logo {
  height: 80px;
}
</style>
