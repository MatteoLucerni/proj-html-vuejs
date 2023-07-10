<script>
export default {
  props: {
    carouselId: String,
    images: Array,
    strings: Array,
    hasIndicator: Boolean
  },
  methods: {
    getImagePath(imageName) {
      return new URL(`../../assets/img/${imageName}.png`, import.meta.url).href
    }
  }
}
</script>

<template>
  <div :id="carouselId" class="carousel carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <!-- Se è un carosello di immagini -->
      <div v-if="images" v-for="(image, i) in images" :key="image.id" class="carousel-item d-flex justify-content-center"
        :class="{ 'active': i === 0 }">
        <img :src="getImagePath(image.bgUrl)" class="d-block" :alt="image.desc">
        <img :src="getImagePath(image.frontUrl)" class="flux-none d-block" :alt="image.desc">
      </div>
      <!-- Se è un carosello di stringhe -->
      <div v-else v-for="(string, i) in strings" :key="string.id"
        class="carousel-item string-item d-flex justify-content-center" :class="{ 'active': i === 0 }">
        <font-awesome-icon class="string-icon" :icon="['fas', 'quote-left']" />
        <h2>
          {{ string.content.toUpperCase() }}
        </h2>
        <p class="text-danger">
          {{ string.subContent.toUpperCase() }}
        </p>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="prev">
      <span class="carousel-icon-left">PREV</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="next">
      <span class="carousel-icon-right">NEXT</span>
    </button>
    <!-- Indicatore -->
    <div v-if="hasIndicator" class="carousel-indicators">
      <button v-for="(e, i) in images || strings" type="button" :data-bs-target="`#${carouselId}`" :data-bs-slide-to="i"
        :class="{ 'active': i === 0 }" aria-current="true" :aria-label="`Slide ${++i}`"></button>
    </div>
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

// stile icone prev/next
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

// stile indicatore
.carousel-indicators [data-bs-target] {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: $gold;
}

// stile per carosello di stringhe
.string-item {
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .string-icon {
    color: $gold;
    font-size: 3.5rem;
    margin-bottom: 30px;
  }

  h2,
  p {
    max-width: 50%;
  }
}
</style>
