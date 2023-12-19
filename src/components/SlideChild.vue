<template>
  <div class="slide">
          <img :src="slide.image" :alt="slide.alt" class="slide-image" />
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
       
    <div class="slide-content">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slide: Object, // Assumes that the parent component passes a slide object
  },
};
</script>

<style scoped>
.slide {
  position: relative;
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slide-image {
  width: 50%;
  height: 50%;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}
</style>
