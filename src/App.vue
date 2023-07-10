<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      borderdImagesLine: {
        hasBorders: true,
        images: [
          {
            desc: 'New place with a city as background',
            url: 'h3-img-1',
          },
          {
            desc: 'Mangia una buona pizza',
            url: 'h3-img-2',
          },
          {
            desc: 'Yum with a man dancing as background',
            url: 'h3-img-3',
          },
          {
            desc: 'La pizza è più grande di tutti',
            url: 'h3-img-4',
          },
        ]
      },
      headerCarouselImages: [
        {
          id: 1,
          desc: 'Crust',
          bgUrl: 'h3-rev-img-1',
          frontUrl: 'h3-rev-img-2'
        },
        {
          id: 2,
          desc: 'Taste',
          bgUrl: 'h3-rev-img-3',
          frontUrl: 'h3-rev-img-4'
        },
        {
          id: 3,
          desc: 'Urban',
          bgUrl: 'h3-rev-img-5',
          frontUrl: 'h3-rev-img-6'
        },
      ]
    }
  }
}
</script>

<template>
  <AppHeader :headerCarouselImages="headerCarouselImages" />
  <AppMain :borderdImagesLine="borderdImagesLine" />
</template>

<style lang="scss">
@use './assets/sass/style.scss'
</style>
