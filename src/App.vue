<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      links: {
        linksCentralLeft: [
          {
            image: '0',
            text: 'Home',
            href: '#'
          },
          {
            image: null,
            text: 'Pages',
            href: '#'
          },
          {
            image: null,
            text: 'Menu',
            href: '#'
          }
        ],
        linksCentralRight: [
          {
            image: null,
            text: 'Event',
            href: '#'
          },
          {
            image: null,
            text: 'Blog',
            href: '#'
          },
          {
            image: null,
            text: 'Landing',
            href: '#'
          }
        ],
        linksRight: [
          {
            image: '1',
            text: 'Cart',
            href: '#'
          },
          {
            image: null,
            text: 'Search',
            href: '#'
          },
        ],
      },
      borderdImagesLine: [
        {
          desc: 'New place with a city as background',
          url: 'h3-img-1.jpg',
        },
        {
          desc: 'Mangia una buona pizza',
          url: 'h3-img-2.jpg',
        },
        {
          desc: 'Yum with a man dancing as background',
          url: 'h3-img-3.jpg',
        },
        {
          desc: 'La pizza è più grande di tutti',
          url: 'h3-img-4.jpg',
        },
      ],
      imagesLine: [
        {
          name: 'PETER ANDERSON',
          job: 'Head Chef',
          desc: 'Guy with a hat smiling',
          url: 'h1-team-1a-700x700.jpg',
        },
        {
          name: 'SHARON HAYES',
          job: 'Executive Chef',
          desc: 'Girl with blonde hair smiling',
          url: 'h1-team-2a.jpg',
        },
        {
          name: 'FRANK BAILY',
          job: 'Kitchen Porter',
          desc: 'Sitting guy with a hat posing',
          url: 'h1-team-3a.jpg',
        },
        {
          name: 'CAROL SIMPSON',
          job: 'Sous Chef',
          desc: 'Girl with red hair posing',
          url: 'h1-team-4a.jpg',
        },
      ],
      logosImagesLine: [
        {
          desc: 'Cowboy Logo',
          url: 'h1-clients-img-4.png',
        },
        {
          desc: 'Gordon Pizza Logo',
          url: 'h1-clients-img-3.png',
        },
        {
          desc: 'Big Cheese logo',
          url: 'h1-clients-img-1.png',
        },
        {
          desc: 'Bludoos Bar logo',
          url: 'h1-clients-img-2.png',
        },
        {
          desc: 'Vegan logo',
          url: 'h1-clients-img-5.png',
        },
      ],
      headerCarouselImages: [
        {
          id: 1,
          desc: 'Crust',
          bgUrl: 'h3-rev-img-1',
          frontUrl: 'h3-rev-img-2'
        },
        {
          id: 2,
          desc: 'Taste',
          bgUrl: 'h3-rev-img-3',
          frontUrl: 'h3-rev-img-4'
        },
        {
          id: 3,
          desc: 'Urban',
          bgUrl: 'h3-rev-img-5',
          frontUrl: 'h3-rev-img-6'
        },
      ],
      mainCarouselImages: [
        {
          id: 4,
          content: '“Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”',
          subContent: 'Washington post 2018'
        },
        {
          id: 5,
          content: '“You will try one of the most originals pizzas in all the world”',
          subContent: 'Time post 2019'
        },
        {
          id: 6,
          content: '“The quality is at the top of our interests, you will taste all the best ingedients from Italy ”',
          subContent: 'News post 2020'
        },
      ],
      sectionsSplit: [
        {
          image: 'h1-img-4.jpg',
          frontImage: 'h1-img-7n.png',
          desc: 'Women talking in a bar',
          textBgImage: null
        },
        {
          image: 'h3-img-5a.jpg',
          frontImage: null,
          desc: 'Comics pizza',
          textBgImage: 'cielostellato.PNG'
        },
        {
          image: 'footer-img-1.jpg',
          frontImage: null,
          desc: 'Hymans seafood',
          textBgImage: 'cielostellato.PNG'
        },
      ],
      specials: [
        {
          price: 10,
          name: 'Combo piccolo',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.'
        },
        {
          price: 20,
          name: 'Combo medio',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.'
        },
        {
          price: 30,
          name: 'Combo grande',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.'
        }
      ],
      pizzas: [
        {
          name: 'BISMARK',
          price: '$30.00',
          url: 'h3-product-img-1a-100x100.png'
        },
        {
          name: 'FIORI DI ZUCCA',
          price: '$7.00 - $50.00',
          url: 'h3-product-img-2a-150x150.png'
        },
        {
          name: 'VALDOSTANA',
          price: '$55.00',
          url: 'h3-product-img-3a-150x150.png'
        },
        {
          name: 'PIZZA TARTUFATA',
          price: '$45.00',
          url: 'h3-product-img-4a-150x150.png'
        },
        {
          name: 'FRANCESCANA',
          price: '$25.00',
          url: 'h3-product-img-5a-150x150.png'
        },
        {
          name: 'CAMPAGNOLA',
          price: '$50.00 - $95.00',
          url: 'h3-product-img-6a-100x100.png'
        },
      ],
      pizzasDeals: [
        {
          date: {
            number: '02',
            month: 'NOV'
          },
          name: 'Traditional Neapolitan Pies In Kyoto Pizza Mercato',
          location: '204 E. Pizzetta Tommaso'
        },
        {
          date: {
            number: '03',
            month: 'NOV'
          },
          name: 'Traditional Neapolitan Pies In Kyoto Pizza Mercato',
          location: '204 E. Pizzetta Tommaso'
        },
        {
          date: {
            number: '05',
            month: 'NOV'
          },
          name: 'Traditional Neapolitan Pies In Kyoto Pizza Mercato',
          location: '204 E. Pizzetta Tommaso'
        },
      ],
      specialsImages:
      {
        frontImage: 'h1-img-7n.png',
        bgImage: 'h1-img-4.jpg'
      },
      pizzasDealsImages:
      {
        frontImage: null,
        bgImage: 'h3-img-5a.jpg'
      },
      bgSlider: 'h3-background-img.jpg'
    }
  }
}
</script>

<template>
  <!-- header -->
  <AppHeader :links="links" :headerCarouselImages="headerCarouselImages" />
  <!-- main -->
  <AppMain :borderdImagesLine="borderdImagesLine" :mainCarouselImages="mainCarouselImages" :specials="specials"
    :bgSlider="bgSlider" :imagesLine="imagesLine" :logosImagesLine="logosImagesLine" :pizzas="pizzas"
    :pizzasDeals="pizzasDeals" :specialsImages="specialsImages" :pizzasDealsImages="pizzasDealsImages" />
</template>

<style lang="scss">
@use './assets/sass/style.scss'
</style>
