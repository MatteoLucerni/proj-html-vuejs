<script>

</script>

<template>
  <div class="carousel carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item d-flex justify-content-center active">
        <img src="../../assets/img/h3-rev-img-1.png" class="d-block" alt="...">
        <img src="../../assets/img/h3-rev-img-2.png" class="flux-none d-block" alt="...">
      </div>
      <div class="carousel-item d-flex justify-content-center">
        <img src="../../assets/img/h3-rev-img-3.png" class="d-block" alt="...">
        <img src="../../assets/img/h3-rev-img-4.png" class="flux-none d-block" alt="...">
      </div>
      <div class="carousel-item d-flex justify-content-center">
        <img src="../../assets/img/h3-rev-img-5.png" class="d-block" alt="...">
        <img src="../../assets/img/h3-rev-img-6.png" class="flux-none d-block" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
      <span class="carousel-icon-left">PREV</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
      <span class="carousel-icon-right">NEXT</span>
    </button>
  </div>
</template>

<style scoped>
/* reset dello style */
button.carousel-control-prev,
button.carousel-control-next {
  width: unset;
  opacity: unset;
}

.carousel-icon-left,
.carousel-icon-right {
  border-radius: 50% 50% 0 0;
  padding: 10px 15px 20px 15px;
  background-color: #fff;
  color: red;
  font-weight: 600;
  font-size: 0.7rem;
  margin-bottom: 50px;
}

.carousel-icon-left {
  rotate: 90deg;
  margin-left: -25px;
}

.carousel-icon-right {
  rotate: -90deg;
  margin-right: -25px;
}
</style>
