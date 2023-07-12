<script>
export default {
  props: {
    isImageRight: Boolean
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
      <img :src="getImagePath('h1-img-4.jpg')" alt="image item">
      <img :src="getImagePath('h1-img-7n.png')" class="flux-none front-image" alt="image item">
    </div>
    <div class="split-item text-item">
      <div class="text-container">
        <slot></slot>
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

.text-container {
  max-width: 60%;
}
</style>
