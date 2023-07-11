<script>
import BaseImagesLine from './baseComps/BaseImagesLine.vue'
import BaseCarousel from './baseComps/BaseCarousel.vue'
import BaseSplitSection from './baseComps/BaseSplitSection.vue'
export default {
  components: {
    BaseImagesLine,
    BaseCarousel,
    BaseSplitSection
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
    <BaseCarousel :carouselId="'main-carousel'" :strings="mainCarouselImages" :hasIndicator="true" />
    <BaseSplitSection />
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
