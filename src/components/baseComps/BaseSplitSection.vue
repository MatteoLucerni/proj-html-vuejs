<script>
export default {
  props: {
    isImageRight: Boolean,
    hasStarBg: Boolean,
    images: Object
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
    <div class="split-item" :class="{ 'order-1': isImageRight === true }">
      <img :src="getImagePath(images.bgImage)" alt="image item">
      <img :src="getImagePath(images.frontImage)" class="flux-none front-image" alt="image item">
    </div>
    <div class="split-item" :class="{ 'star-bg': hasStarBg }">
      <div class="text-container">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.split-item {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

img {
  max-width: 100%;
}

.front-image {
  height: 300px;
}

.text-container {
  max-width: 85%;
}

.star-bg {
  background-image: url('../../assets/img/cielostellato.PNG');
  background-size: cover;

  * {
    color: white;
  }
}
</style>
