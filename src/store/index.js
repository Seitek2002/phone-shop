import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state() {
    return {
      count: 0,
      cart: [],
      products: [
        {
          id: 6,
          title: "Apple iPhone 11",
          image: "/images/products/iPhone/iphone3.jpeg",
          price: 760,
          category: "Featured Products",
        },
        {
          id: 3,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone2.jpeg",
          price: 265,
          category: "Special Products",
        },
        {
          id: 4,
          title: "Apple iPhone 11",
          image: "/images/products/iPhone/iphone2.jpeg",
          price: 850,
          category: "Special Products",
        },
        {
          id: 8,
          title: "Apple iPhone 11",
          image: "/images/products/iPhone/iphone4.jpeg",
          price: 290,
          category: "Featured Products",
        },
        {
          id: 5,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone3.jpeg",
          price: 250,
          category: "Special Products",
        },
        {
          id: 7,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone4.jpeg",
          price: 365,
          category: "Featured Products",
        },
        {
          id: 10,
          title: "Apple iPhone 11 Pro",
          image: "/images/products/iPhone/iphone5.jpeg",
          price: 385,
          category: "Special Products",
        },
        {
          id: 11,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone6.jpeg",
          price: 475,
          category: "Special Products",
        },
        {
          id: 13,
          title: "Apple iPhone 11",
          image: "/images/products/iPhone/iphone6.jpeg",
          price: 800,
          category: "Trending Products",
        },
        {
          id: 12,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone7.jpeg",
          price: 850,
          category: "Special Products",
        },
        {
          id: 14,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone7.jpeg",
          price: 360,
          category: "Trending Products",
        },
        {
          id: 9,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone5.jpeg",
          price: 320,
          category: "Special Products",
        },
        {
          id: 15,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone8.jpeg",
          price: 305,
          category: "Trending Products",
        },
        {
          id: 16,
          title: "Samsung Galaxy",
          image: "/images/products/sumsung/samsung6.jpeg",
          price: 400,
          category: "Special Products",
        },
        {
          id: 17,
          title: "Samsung Galaxy",
          image: "/images/products/sumsung/samsung5.jpeg",
          price: 550,
          category: "Trending Products",
        },
        {
          id: 2,
          title: "Apple iPhone 11",
          image: "/images/products/iPhone/iphone1.jpeg",
          price: 300,
          category: "Special Products",
        },
        {
          id: 18,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone9.jpeg",
          price: 630,
          category: "Trending Products",
        },
        {
          id: 20,
          title: "Samsung Galaxy",
          image: "/images/products/sumsung/samsung4.jpeg",
          price: 270,
          category: "Special Products",
        },
        {
          id: 19,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone10.jpeg",
          price: 250,
          category: "Trending Products",
        },
        {
          id: 1,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone1.jpeg",
          price: 265,
          category: "Special Products",
        },
        {
          id: 24,
          title: "Samsung Galaxy",
          image: "/images/products/sumsung/samsung2.jpeg",
          price: 500,
          category: "Featured Products",
        },
        {
          id: 21,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone11.jpeg",
          price: 700,
          category: "Trending Products",
        },
        {
          id: 25,
          title: "Samsung Galaxy",
          image: "/images/products/sumsung/samsung1.jpeg",
          price: 450,
          category: "Special Products",
        },
        {
          id: 22,
          title: "Samsung Galaxy",
          image: "/images/products/sumsung/samsung3.jpeg",
          price: 460,
          category: "Trending Products",
        },
        {
          id: 23,
          title: "Sony WH-CH510",
          image: "/images/products/headphone/headphone12.jpeg",
          price: 600,
          category: "Featured Products",
        },
      ],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addCart(state, data) {
      console.log(data);
      if(state.cart.find(item => item?.id == data.id)?.id) {
        state.cart = state.cart.map(item => {
          if(item.id == data.id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        state.cart.push({...data, quantity: 1})
      }
      console.log(state.cart);
    }
  },
});
