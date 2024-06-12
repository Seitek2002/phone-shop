<template>
  <header id="header" class="header">
    <div class="navigation">
      <div class="container">
        <nav class="nav">
          <div class="nav__hamburger">
            <svg>
              <use xlink:href="/images/sprite.svg#icon-menu"></use>
            </svg>
          </div>

          <div class="nav__logo">
            <a href="/" class="scroll-link"> Phone </a>
          </div>

          <div class="nav__menu">
            <div class="menu__top">
              <span class="nav__category">Phone</span>
              <a href="#" class="close__toggle">
                <svg>
                  <use xlink:href="/images/sprite.svg#icon-cross"></use>
                </svg>
              </a>
            </div>
            <ul class="nav__list">
              <li class="nav__item">
                <a href="#header" class="nav__link scroll-link">Main</a>
              </li>
              <li class="nav__item">
                <a href="#category" class="nav__link scroll-link">Category</a>
              </li>
              <li class="nav__item">
                <a href="#news" class="nav__link scroll-link">Blog</a>
              </li>
              <li class="nav__item">
                <a href="#contact" class="nav__link scroll-link">Contact</a>
              </li>
            </ul>
          </div>

          <div class="nav__icons">
            <a
              href="#"
              class="icon__item"
              id="login-btn"
              v-if="!account"
              @click.prevent="isShowLogin = !isShowLogin"
            >
              <svg class="icon__user">
                <use xlink:href="/images/sprite.svg#icon-user"></use>
              </svg>
            </a>
            <a
              href="#"
              class="icon__item"
              id="login-btn"
              v-else
              @click.prevent="isShowLogin = !isShowLogin"
            >
              {{ JSON.parse(account).email }}
            </a>

            <!-- <a
              href="#"
              class="icon__item"
              id="search-btn"
              @click.prevent="isShowSearch = !isShowSearch"
            >
              <svg class="icon__search">
                <use xlink:href="/images/sprite.svg#icon-search"></use>
              </svg>
            </a> -->

            <a
              href="#"
              class="icon__item"
              id="cart-btn"
              @click.prevent="isShowCart = !isShowCart"
            >
              <svg class="icon__cart">
                <use xlink:href="/images/sprite.svg#icon-shopping-basket"></use>
              </svg>
              <span v-if="store.state.cart.length" id="cart__total">{{
                store.state.cart.length
              }}</span>
            </a>
          </div>
        </nav>
      </div>
    </div>

    <Hero />

    <div class="auth">
      <div v-if="!account">
        <form @submit.prevent="localAuth" action="" class="login-form" :class="{ active: isShowLogin }">
          <h3>Login now</h3>
          <input v-model="email" type="email" placeholder="your email" class="box" />
          <input v-model="password" type="password" placeholder="your password" class="box" />
          <p>Forgot your password? <a href="#">Click here</a></p>
          <p>no account? <a href="#">Create now</a></p>
          <input type="submit" value="Login now" class="btn" />
        </form>
      </div>
      <div v-else>
        <div class="login-form" :class="{ active: isShowLogin }">
          <button @click="handleLogout">Log Out</button>
        </div>
      </div>
    </div>

    <div class="searchF">
      <form action="" class="search-form" :class="{ active: isShowSearch }">
        <input type="search" id="search-box" placeholder="Search here.." />
        <label for="search-box" class="fas fa-search"></label>
      </form>
    </div>

    <div class="shopping-cart" :class="{ active: isShowCart }">
      <div v-for="item in store.state.cart" :key="item.id" class="box">
        <i class="fas fa-trash"></i>
        <img :src="item.image" />
        <div class="content">
          <h3>{{ item.title }}</h3>
          <span class="price">${{ item.price }}</span>
          <span class="quantity">quantity : {{ item.quantity }}</span>
        </div>
      </div>
      <div class="total">
        Total : $
        {{
          store.state.cart.length
            ? store.state.cart.reduce((a, b) => a + b.price * b.quantity, 0)
            : 0
        }}
      </div>
      <a href="#" class="btn">Checkout</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import Hero from "./Sections/Hero.vue";

const isShowCart = ref(false);
const isShowSearch = ref(false);
const isShowLogin = ref(false);

const store = useStore();
const account = ref(localStorage.getItem('account'))

const email = ref('');
const password = ref('');

const localAuth = () => {
  const authData = {
    email: email.value,
    password: password.value
  }

  localStorage.setItem('account', JSON.stringify(authData))
  account.value = localStorage.getItem('account')
}

const handleLogout = () => {
  localStorage.clear()
  account.value = null
}

</script>

<style></style>
