<script>
import BaseCarousel from './baseComps/BaseCarousel.vue'
export default {
  components: {
    BaseCarousel
  }
}
</script>

<template>
  <header>
    <div class="container">
      <nav class="navbar">
        <button class="btn btn-primary">ORDER ONLINE</button>
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
  </header>
</template>

<style scoped>
header {
  background-color: black;
  color: white;
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
