<script>
import BaseImagesLine from './baseComps/BaseImagesLine.vue'
export default {
  components: {
    BaseImagesLine
  },
  props: {
    borderdImagesLine: Object
  },
}
</script>

<template>
  <main>
    <BaseImagesLine :images="borderdImagesLine.images" :hasBorders="borderdImagesLine.hasBorders" />
  </main>
</template>

<style scoped></style>
