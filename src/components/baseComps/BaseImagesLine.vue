<script>
export default {
  props: {
    images: Array,
    hasBorders: Boolean,
    hasDotHover: Boolean,
    hasSquareHover: Boolean,
    hasItemsDescription: Boolean
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
    <!-- width in base al numero di immagini -->
    <div class="img-cont" :class="{ 'onHover': hasDotHover || hasSquareHover }" v-for="image in images"
      :style="{ width: `calc(100% / ${images.length})` }">
      <!-- immagini dinamiche -->
      <img class="image" :class="{ 'img-bordered': hasBorders }" :src="getImagePath(image.url)" :key="image.desc"
        :alt="image.desc">
      <div v-if="hasItemsDescription === true" class="descripion mt-3 py-2">
        <h6>{{ image.name }}</h6>
        <p>{{ image.price }}</p>
      </div>
      <!-- cover quando è in hover -->
      <div class="cover">
        <!-- dot cover -->
        <img v-if="hasDotHover" src="../../assets/svg/svg-5.svg" alt="eye dot">
        <!-- square hover con una card -->
        <div v-if="hasSquareHover" class="square">
          <h5>{{ image.name }}</h5>
          <p>{{ image.job }}</p>
          <div class="icons">
            <a href="#"><font-awesome-icon :icon="['fab', 'square-instagram']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
          </div>
        </div>
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

// stile per l'hover
.img-cont.onHover:hover .image {
  opacity: 0;
}

.img-cont.onHover:hover .cover {
  opacity: 1;
}

.cover {
  // tolgo dal flusso la cover
  position: absolute;
  top: 0;
  left: 0;
  // regolo l'opacitàà
  opacity: 0;
  transition: opacity .3s;
  // dotted background
  background: white;
  background-image: radial-gradient(lightgray 1px, transparent 0);
  background-size: 8px 8px;
  background-position: center;
  // regolo le dimensioni della cover
  width: 100%;
  height: 100%;
  // centro il contenuto
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 80px;
  }
}

// stile per l'hover square card
.square {
  height: 85%;
  width: 85%;
  background-color: #d2401e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  a {
    margin: 0 5px;
  }
}

// style for description
.descripion {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;

  h6 {
    color: #b7903c;
  }

  p {
    color: #d2401e;
    font-weight: 600;
  }
}
</style>
