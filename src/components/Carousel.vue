<template>
  <div class="banner-container">
    <div class="banner">
      <div class="img">
        <img class="ml-5" :src="banners[currentBannerIndex].imagePath" alt="Banner Image" />
      </div>
      <!-- <h1>{{ banners[currentBannerIndex].title }}</h1> -->
      <!-- <p>{{ banners[currentBannerIndex].description }}</p> -->
      <button  @click="prevBanner" class="ml-4 nav-button prev">&#10094;</button>
      <button  @click="nextBanner" class="mr-5 nav-button next">&#10095;</button>
    </div>
  </div>
</template>


<script>
export default {
name:"CarouselView",
data() {
    return {
      currentBannerIndex: 0,
      banners: [
        {
          imagePath: require("@/assets/banner.jpg"), // Adjust the path accordingly
        },
        {
          imagePath: require("@/assets/banner2.jpg"), // Adjust the path accordingly
        },
        // Add more banners as needed
      ],
    };
  },
  methods: {
    redirectToTours() {
      this.$router.push('/');
    },
    nextBanner() {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
    },
    prevBanner() {
      this.currentBannerIndex = (this.currentBannerIndex - 1 + this.banners.length) % this.banners.length;
    },
  },
}
</script>

<style>
.banner-container {
  position: relative;
  width: 100%;
  height: 50vh; /* 100% of the viewport height */
  overflow: hidden;
}
img{
  width: 100%;
  height: 100%;
  /* text-algin:center; */
}
.banner .img {
  width: 90%;
  height: 85%;
   /* Ensures the image covers the entire container */
}

.banner {
  /* position: absolute; */
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  color: #fff;
}

.nav-button {
  position: absolute;
  top: 50%;
  /* transform: translateY(-50%); */
  font-size: 24px;
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.prev {
  left: 16px;
}

.next {
  right: 16px;
}
.banner {
  text-align: center;
  color: #fff;
}

.banner h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.banner p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.banner button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.banner button:hover {
  background-color: #2980b9;
}

/* nút bấm */

.nav-button {
  font-size: 1.5em;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
}
.prev {
  position: absolute;
  left: 10px;
}

.next {
  position: absolute;
  right: 10px;
}
</style>