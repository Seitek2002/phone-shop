<template>
  <div class="product">
    <div class="product__header">
      <img :src="product.image" alt="product" />
    </div>
    <div class="product__footer">
      <h3>{{ product.title }}</h3>
      <div class="rating">
        <svg>
          <use xlink:href="/images/sprite.svg#icon-star-full"></use>
        </svg>
        <svg>
          <use xlink:href="/images/sprite.svg#icon-star-full"></use>
        </svg>
        <svg>
          <use xlink:href="/images/sprite.svg#icon-star-full"></use>
        </svg>
        <svg>
          <use xlink:href="/images/sprite.svg#icon-star-full"></use>
        </svg>
        <svg>
          <use xlink:href="/images/sprite.svg#icon-star-empty"></use>
        </svg>
      </div>
      <div class="product__price">
        <h4>$ {{ product.price }}</h4>
      </div>
      <button @click="store.commit('addCart', product)" type="submit" class="product__btn" :data-id="product.id">
        Add To Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

defineProps(["product"]);

const store = useStore()
</script>

<style></style>
