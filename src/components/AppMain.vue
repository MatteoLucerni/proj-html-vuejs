<script>
import BaseImagesLine from './baseComps/BaseImagesLine.vue'
import BaseCarousel from './baseComps/BaseCarousel.vue'
import BaseSplitSection from './baseComps/BaseSplitSection.vue'
import BaseImageSlider from './baseComps/BaseImageSlider.vue'
export default {
  components: {
    BaseImagesLine,
    BaseCarousel,
    BaseSplitSection,
    BaseImageSlider
  },
  props: {
    borderdImagesLine: Array,
    mainCarouselImages: Array,
    specials: Array,
    bgSlider: String,
    imagesLine: Array,
    logosImagesLine: Array
  },
}
</script>

<template>
  <main>
    <!-- Linea immagini con bordi -->
    <BaseImagesLine :images="borderdImagesLine" :hasBorders="true" :hasHover="true" />
    <!-- Carosello di stringhe -->
    <BaseCarousel :carouselId="'main-carousel'" :strings="mainCarouselImages" :hasIndicator="true" />
    <!-- Sezione divisa Specials -->
    <BaseSplitSection>
      <template v-slot>
        <div class="text-container">
          <h2>
            SPECIALS*
          </h2>
          <p class="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut.</p>
          <ul>
            <li v-for="special in specials" class="d-flex">
              <div class="price fw-bold fs-4">
                ${{ special.price }}
              </div>
              <div class="info ms-3">
                <h5>{{ special.name.toUpperCase() }}</h5>
                <p>{{ special.desc }}</p>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </BaseSplitSection>
    <!-- Slider immagine e go ahead -->
    <BaseImageSlider :image="bgSlider">
      <template v-slot>
        <h1 class="slider-text h-100 text-white d-flex align-items-center">
          GO AHEAD AND <br>
          BUILD YOUR <br>
          OWN PIZZA <br>
          WE DON'T <br>
          JUDGE!
        </h1>
      </template>
    </BaseImageSlider>
    <!-- Linea immagini senza bordi di persone -->
    <BaseImagesLine :images="imagesLine" :hasHover="true" />
    <!-- Linea immagini senza bordi dei loghi -->
    <div class="container logos">
      <BaseImagesLine :images="logosImagesLine" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

#main-carousel {
  background-image: url('../assets/img/h3-testimonials-bckgrnd.jpg');
  background-position: center;
  background-size: cover;
}


// style per la BaseSplitSection
p {
  color: $lightgray;
  font-weight: 300;
}

.price {
  color: $orange;
}

.info {
  padding-top: 5px;
}

// style per la BaseImageSlider di bgSlider
.slider-text {
  margin-left: 200px;
}

// style per la BaseImagesLine di logosImagesLine
.logos {
  padding: 60px 0;
}
</style>
