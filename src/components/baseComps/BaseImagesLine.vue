<script>
export default {
  props: {
    images: Array,
    hasBorders: Boolean,
    hasDotHover: Boolean

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
  <section :class="{ 'bordered': hasBorders }" class="image-line d-flex">
    <!-- width delle immagini in base al numero di esse -->
    <div class="img-cont" :class="{ 'dotHover': hasDotHover }" v-for="image in images"
      :style="{ width: `calc(100% / ${images.length})` }">
      <img class="image" :class="{ 'img-bordered': hasBorders }" :src="getImagePath(image.url)" :key="image.desc"
        :alt="image.desc">
      <div class="eye-cover">
        <img src="../../assets/svg/svg-5.svg" alt="eye dot">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bordered {
  padding: 10px 0;
  gap: 10px;
}

.img-bordered,
img {
  width: 100%;
  height: 100%;
}

.img-cont {
  position: relative;
}

.image {
  transition: opacity .3s;
  position: relative;
}

// stile per l'hover dot
.img-cont.dotHover:hover .image {
  opacity: 0;
}

.img-cont.dotHover:hover .eye-cover {
  opacity: 1;
}

.eye-cover {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .3s;
  background: white;
  background-image: radial-gradient(lightgray 1px, transparent 0);
  background-size: 8px 8px;
  background-position: center;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 80px;
    transform: translate(-50%, -50%);

    &::after {
      content: "ciao";
      font-size: 2rem;
    }
  }
}

// stile per l'hover card
</style>
