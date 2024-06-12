<script setup>
import { useStore } from "vuex";
import Header from "./components/Header.vue";
import ProductCard from "./components/ProductCard.vue";
import Popup from "./components/Popup.vue";
import Facility from "./components/Sections/Facility.vue";
import Testimonial from "./components/Sections/Testimonial.vue";
import News from "./components/Sections/News.vue";
import NewsLetter from "./components/Sections/NewsLetter.vue";
import Footer from "./components/Sections/Footer.vue";

const store = useStore();
</script>

<template>
  <Header />
  <main id="main">
    <div class="container">
      <!-- Collection -->
      <section id="collection" class="section collection">
        <div
          class="collection__container"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div class="collection__box">
            <div class="img__container">
              <img
                class="collection_02"
                src="/images/collection_02.png"
                alt=""
              />
            </div>
            <div class="collection__content">
              <div class="collection__data">
                <span>New Colors</span>
                <h1>Headphones</h1>
                <a href="#shop">Buy now</a>
              </div>
            </div>
          </div>
          <div class="collection__box">
            <div class="img__container">
              <img
                class="collection_01"
                src="/images/collection_01.png"
                alt=""
              />
            </div>
            <div class="collection__content">
              <div class="collection__data">
                <span>Presets for Phone</span>
                <h1>SMARTPHONES</h1>
                <a href="#">Buy now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Latest Products -->
      <section class="section latest__products" id="latest">
        <div class="title__container">
          <div class="section__title active" data-id="Latest Products">
            <span class="dot"></span>
            <h1 class="primary__title">Latest Products</h1>
          </div>
        </div>
        <div class="container">
          <div class="latest-center">
            <ProductCard
              v-for="product in store.state.products.slice(0, 4)"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </section>

      <section class="category__section section" id="category">
        <div class="tab__list">
          <div class="title__container tabs">
            <div class="section__titles category__titles">
              <div
                class="section__title filter-btn active"
                data-id="All Products"
              >
                <span class="dot"></span>
                <h1 class="primary__title">All Products</h1>
              </div>
            </div>
            <div class="section__titles">
              <div
                class="section__title filter-btn"
                data-id="Trending Products"
              >
                <span class="dot"></span>
                <h1 class="primary__title">Trending Products</h1>
              </div>
            </div>

            <div class="section__titles">
              <div class="section__title filter-btn" data-id="Special Products">
                <span class="dot"></span>
                <h1 class="primary__title">Special Products</h1>
              </div>
            </div>

            <div class="section__titles">
              <div
                class="section__title filter-btn"
                data-id="Featured Products"
              >
                <span class="dot"></span>
                <h1 class="primary__title">Featured Products</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="category__container">
          <div class="category__center">
            <ProductCard
              v-for="product in store.state.products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </section>
    </div>

    <Facility />
    <Testimonial />
    <News />
    <NewsLetter />
  </main>
  <Footer />
  <Popup />

  <a href="#header" class="goto-top scroll-link">
    <svg>
      <use xlink:href="/images/sprite.svg#icon-arrow-up"></use>
    </svg>
  </a>
</template>

<style scoped></style>
