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
      }
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain :borderdImagesLine="borderdImagesLine" />
</template>

<style lang="scss">
@use './assets/sass/style.scss'
</style>
