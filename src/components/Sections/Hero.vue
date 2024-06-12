<template>
  <div class="hero">
    <swiper
      class="mySwiper"
      :modules="[Pagination]"
      :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <div class="hero__center">
          <div class="hero__left">
            <span>New Inspiration 2020</span>
            <h1>PHONES CREATED FOR YOU!</h1>
            <p>Trends collection of mobile phones and headphones</p>
            <a href="#"><button class="hero__btn">BUY NOW</button></a>
          </div>
          <div class="hero__right">
            <div class="hero__img-container">
              <img
                class="banner_01"
                src="/images/banner_01.png"
                alt="баннер2"
              />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="hero__center">
          <div class="hero__left">
            <span>New Inspiration 2020</span>
            <h1>PHONES CREATED FOR YOU!</h1>
            <p>Trends collection of mobile phones and headphones</p>
            <a href="#"><button class="hero__btn">BUY NOW</button></a>
          </div>
          <div class="hero__right">
            <img
              class="banner_02"
              src="/images/banner_02.png"
              alt="баннер2"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
</script>

<style>
.hero,
.hero .swiper-wrapper {
  background-color: var(--primaryColor);
  position: relative;
  width: 100%;
  height: 100vh;
}

.hero .swiper-pagination-bullet {
  background-color: #222;
  width: 1.2rem;
  height: 1.2rem;
}

.hero .swiper-button-next,
.hero .swiper-button-prev {
  padding: 1.5rem 1.7rem;
  opacity: 0;
  border: none;
  background-color: var(--grey);
  transition: all 0.5s ease-in-out 0.2s;
}

.hero .swiper-button-next:hover,
.hero .swiper-button-prev:hover {
  background-color: var(--black);
}

.hero .swiper-button-prev {
  left: 20rem;
}

.hero .swiper-button-next {
  position: absolute;
  right: 20rem;
}

.hero:hover .swiper-button-next,
.hero:hover .swiper-button-prev {
  opacity: 1;
}

.hero:hover .swiper-button-prev {
  left: 23rem;
}

.hero:hover .swiper-button-next {
  right: 23rem;
}

.hero .swiper-button-next svg,
.hero .swiper-button-prev svg {
  height: 1.8rem;
  width: 1.8rem;
  fill: var(--primaryColor);
}

.hero .swiper-button-next,
.hero .swiper-button-prev {
  border-radius: 50%;
}

@media only screen and (max-width: 999px) {
  .hero__center {
    flex-direction: column;
    text-align: center;
  }

  .hero__right {
    top: 50%;
    position: absolute;
  }

  .hero__left {
    position: absolute;
    padding: 0 1rem;
    top: 20%;
  }

  .hero__right img {
    width: 55%;
  }

  .hero__btn {
    padding: 1.1rem 2.8rem;
  }

  .hero .swiper-button-next,
  .hero .swiper-button-prev {
    display: none;
  }
}

@media only screen and (max-width: 567px) {
  .hero,
  .hero .swiper-wrapper {
    height: 60vh;
  }

  .hero__right {
    display: none;
  }
}

.latest__products .swiper-button-next,
.related__products .swiper-button-next,
.latest__products .swiper-button-prev,
.related__products .swiper-button-prev {
  background-color: transparent;
  border: 1px solid var(--primaryColor);
  outline: none;
  border-radius: 0;
  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0);
  top: -7%;
  left: 80%;
}

.latest__products .swiper-button-next:hover,
.related__products .swiper-button-next:hover,
.latest__products .swiper-button-prev:hover,
.related__products .swiper-button-prev:hover {
  background-color: var(--orange);
  border: 1px solid var(--primaryColor);
}

.latest__products .swiper-button-prev,
.related__products .swiper-button-prev {
  left: 75%;
}

.latest__products .swiper-button-next,
.related__products .swiper-button-next {
  right: 5%;
}

.latest__products .swiper-button-next svg,
.related__products .swiper-button-next svg,
.latest__products .swiper-button-prev svg,
.related__products .swiper-button-prev svg {
  width: 1.5rem;
  height: 1.5rem;
  fill: var(--grey);
}
@media only screen and (max-width: 999px) {
  .product__header {
    height: 25rem;
  }

  .product {
    width: 70%;
    margin: 0 auto;
  }

  .latest__products .swiper-button-prev,
  .related__products .swiper-button-prev {
    left: 73%;
  }

  .latest__products .swiper-button-next,
  .related__products .swiper-button-next {
    right: 7%;
  }
}

@media only screen and (max-width: 768px) {
  .latest__products .swiper-button-prev,
  .related__products .swiper-button-prev {
    left: 70%;
  }

  .latest__products .swiper-button-next,
  .related__products .swiper-button-next {
    right: 7%;
  }
}
</style>
