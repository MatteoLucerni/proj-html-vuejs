<script>
export default {
  props: {
    image: String
  },
  methods: {
    getImagePath(imageName) {
      return new URL(`../../assets/img/${imageName}`, import.meta.url).href
    }
  }
}
</script>

<template>
  <section :style="{ backgroundImage: 'url(' + getImagePath(image) + ')' }" class="image-slider">
    <div class="container h-100">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.image-slider {
  margin: 10px 0;
  height: 500px;
  background-position: center;
  background-size: cover;
}
</style>
