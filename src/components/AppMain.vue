<script>
import BaseImagesLine from './baseComps/BaseImagesLine.vue'
import BaseCarousel from './baseComps/BaseCarousel.vue'
import BaseSplitSection from './baseComps/BaseSplitSection.vue'
import BaseImageSlider from './baseComps/BaseImageSlider.vue'
import AppForm from './AppFrom.vue'
export default {
  components: {
    BaseImagesLine,
    BaseCarousel,
    BaseSplitSection,
    BaseImageSlider,
    AppForm
  },
  props: {
    borderdImagesLine: Array,
    mainCarouselImages: Array,
    specials: Array,
    bgSlider: String,
    imagesLine: Array,
    logosImagesLine: Array,
    pizzas: Array,
    pizzasDeals: Array,
    specialsImages: Object,
    pizzasDealsImages: Object
  },
}
</script>

<template>
  <main>
    <!-- Linea immagini con bordi -->
    <BaseImagesLine :images="borderdImagesLine" :hasBorders="true" :hasDotHover="true" />
    <!-- Carosello di stringhe -->
    <BaseCarousel :carouselId="'main-carousel'" :strings="mainCarouselImages" :hasIndicator="true" />
    <!-- Sezione divisa Specials -->
    <BaseSplitSection :images="specialsImages">
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
    <BaseImagesLine :images="imagesLine" :hasSquareHover="true" />
    <!-- Linea immagini senza bordi dei loghi -->
    <div class="logo-list logos">
      <div class="container">
        <BaseImagesLine :images="logosImagesLine" />
      </div>
    </div>
    <!-- Linea di immagini delle pizze -->
    <section class="pizza-menu text-center">
      <div class="menu-title mb-5">
        <h6 class="text-danger">CHOOSE YOUR FLAVOUR</h6>
        <h2>THE BEST PIZZA MENU IN TOWN</h2>
        <p class="text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolor eos, <br> nobis
          exercitationem
          ducimus laudantium!
        </p>
      </div>
      <BaseImagesLine class="w-110" :images="pizzas" :hasBorders="true" :hasItemsDescription="true" />
    </section>
    <!-- Sezione divisa Pizza Deals -->
    <BaseSplitSection :isImageRight="true" :hasStarBg="true" :images="pizzasDealsImages">
      <template v-slot>
        <div class="pizza-deals-text text-container">
          <p class="m-0">MADE WITH LOVE</p>
          <h2 class="mb-5">
            DELISH PIZZA DEALS
          </h2>
          <ul>
            <li v-for="deal in pizzasDeals">
              <div class="d-flex">
                <div class="date-info fw-bold fs-4">
                  <div class="date-number">
                    {{ deal.date.number }}
                  </div>
                  <div class="date-month">
                    {{ deal.date.month }}
                  </div>
                </div>
                <div class="info ms-3">
                  <h4>{{ deal.name.toUpperCase() }}</h4>
                  <p>
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                    {{ deal.location }}
                  </p>
                </div>
              </div>
              <div class="dashed-separator"></div>
            </li>
          </ul>
        </div>
      </template>
    </BaseSplitSection>
    <!-- form -->
    <AppForm />
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/sass/AppMainStyle.scss'
</style>
