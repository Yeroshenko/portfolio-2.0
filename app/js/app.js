document.addEventListener('DOMContentLoaded', () => {

  /* LIBS */
  const fullPage = new fullpage('#fullpage', {

    anchors: ['home', 'works', 'about', 'contacts'],
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'left',

  })

  const welcomeParallax = {

    welcomeSection: document.querySelector('.welcome'),
    layers: document.getElementById('parallax-container').children,

    init() {
      const moveLayers = (e) => {

        let initialX = (window.innerWidth / 2) - e.pageX
        let initialY = (window.innerHeight / 2) - e.pageY

        // Array.prototype.slice.calll() => node list to array
        Array.prototype.slice.call(this.layers).forEach((layer, i) => {

          const divider = (i + 1) / 80
          const positionX = initialX * divider
          const positionY = initialY * divider
          const bottomPosition = (window.innerHeight / 2) * divider

          layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
          layer.style.bottom = ` -${bottomPosition}px`
        })
      }

      this.welcomeSection.addEventListener('mousemove', moveLayers)
    }
  }

  welcomeParallax.init()

  const menu = {

    menu: document.querySelector('.menu'),
    menuTriger: document.querySelector('.gamburger'),
    menuItem: document.querySelectorAll('.menu-list__item'),

    init() {

      const toggleMenu = () => {
        this.menuTriger.classList.toggle('open')
        this.menu.classList.toggle('is-active')
      }

      this.menuTriger.addEventListener('click', toggleMenu)

      this.menuItem.forEach((item) => {
        item.addEventListener('click', toggleMenu)
      })

    }
  }

  menu.init()

  const cardMove = {

    cards: document.querySelectorAll('.content__inner'),

    init() {

      this.cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {

          const divider = 65

          const halfHeight = card.offsetHeight / 2
          const halfWidth = card.offsetWidth / 2

          const tiltX = (e.offsetY - halfHeight) / divider
          const tiltY = (e.offsetX - halfWidth) / divider

          card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
        })
      })
    }
  }

  cardMove.init()


})