<script>
export default {
  props: {
    isImageRight: false
  },
  methods: {
    getImagePath(imageName) {
      return new URL(`../../assets/img/${imageName}`, import.meta.url).href
    }
  }
}
</script>

<template>
  <section class="split-section d-flex">
    <div class="split-item">
      <img src="../../assets/img/h1-img-4.jpg" alt="">
      <img src="../../assets/img/h1-img-7n.png" class="flux-none front-image" alt="">
    </div>
    <div class="split-item">
      <div class="text-container">
        <h3>Ciao</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facilis?</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.split-item {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  max-width: 100%;
}

.front-image {
  height: 300px;
}
</style>
