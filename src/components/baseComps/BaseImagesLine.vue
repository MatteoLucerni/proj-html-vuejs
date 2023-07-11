<script>
export default {
  props: {
    images: Array,
    hasBorders: Boolean
  },
  methods: {
    getImagePath(imageName) {
      return new URL(`../../assets/img/${imageName}`, import.meta.url).href
    }
  },
  computed: {
    compensation() {
      if (this.hasBorders) {
        return 9
      } else {
        return
      }
    }
  }
}
</script>

<template>
  <section :class="{ 'bordered': hasBorders === true }" class="image-line d-flex">
    <!-- width delle immagini in base al numero di esse -->
    <img :style="{ width: `calc(100% / ${images.length} - ${compensation}px)` }" v-for="image in images"
      :src="getImagePath(image.url)" :key="image.desc" :alt="image.desc">
  </section>
</template>

<style lang="scss" scoped>
img {
  width: calc(100% / 4);
}

// solo se se le immagini devono avere il bordo
.bordered {
  padding: 10px 0;

  img {
    margin: 0 6px;
  }

  img:first-child {
    margin-left: 0;
  }

  img:last-child {
    margin-right: 0;
  }
}
</style>
