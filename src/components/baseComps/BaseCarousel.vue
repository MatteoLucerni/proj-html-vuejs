<script>
export default {
  props: {
    images: Array
  },
  methods: {
    getImagePath(imageName) {
      return new URL(`../../assets/img/${imageName}.png`, import.meta.url).href
    }
  }
}
</script>

<template>
  <div class="carousel carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(image, i) in images" :key="image.id" class="carousel-item d-flex justify-content-center"
        :class="{ 'active': i === 0 }">
        <img :src="getImagePath(image.bgUrl)" class="d-block" :alt="image.desc">
        <img :src="getImagePath(image.frontUrl)" class="flux-none d-block" :alt="image.desc">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
      <span class="carousel-icon-left">PREV</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
      <span class="carousel-icon-right">NEXT</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

.carousel {
  overflow-x: hidden;
}

// reset dello style
button.carousel-control-prev,
button.carousel-control-next {
  width: unset;
  opacity: unset;
}

.carousel-icon-left,
.carousel-icon-right {
  border-radius: 50% 50% 0 0;
  padding: 10px 15px 25px 15px;
  background-color: #fff;
  color: $orange;
  font-weight: 600;
  font-size: 0.7rem;
}

.carousel-icon-left {
  rotate: 90deg;
  margin-left: -25px;
}

.carousel-icon-right {
  rotate: -90deg;
  margin-right: -25px;
}
</style>
