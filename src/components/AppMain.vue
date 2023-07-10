<script>
import BaseImagesLine from './baseComps/BaseImagesLine.vue'
import BaseCarousel from './baseComps/BaseCarousel.vue'
export default {
  components: {
    BaseImagesLine,
    BaseCarousel
  },
  props: {
    borderdImagesLine: Array,
    mainCarouselImages: Array
  },
}
</script>

<template>
  <main>
    <BaseImagesLine :images="borderdImagesLine" :hasBorders="true" />
    <section id="main-carousel">
      <BaseCarousel :carouselId="'main-carousel'" :strings="mainCarouselImages" :hasIndicator="true" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

#main-carousel {
  background-image: url('../assets/img/h3-testimonials-bckgrnd.jpg');
  background-position: center;
  background-size: cover;
}
</style>
