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
          url: 'h3-img-1',
        },
        {
          desc: 'Mangia una buona pizza',
          url: 'h3-img-2',
        },
        {
          desc: 'Yum with a man dancing as background',
          url: 'h3-img-3',
        },
        {
          desc: 'La pizza è più grande di tutti',
          url: 'h3-img-4',
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
          content: '“1 Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”',
          subContent: 'Washington post 2018'
        },
        {
          id: 5,
          content: '“2 Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”',
          subContent: 'Washington post 2018'
        },
        {
          id: 6,
          content: '“3 Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”',
          subContent: 'Washington post 2018'
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
      bgSlider: 'h3-background-img.jpg'
    }
  }
}
</script>

<template>
  <AppHeader :links="links" :headerCarouselImages="headerCarouselImages" />
  <AppMain :borderdImagesLine="borderdImagesLine" :mainCarouselImages="mainCarouselImages" :specials="specials"
    :bgSlider="bgSlider" />
</template>

<style lang="scss">
@use './assets/sass/style.scss'
</style>
