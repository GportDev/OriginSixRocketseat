/*Abre e fecha menu, icones principais (hamb e x)*/ 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show') //Tira se tiver 'show', coloca o 'show' se não tiver
  })
}

/*Abre e fecha o menu quando usamos os links*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

/*Mudar a sombra do header no scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    //Menor que a altura do header
    header.classList.remove('scroll')
  }
}


/* Testimonials slider */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breapoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    1092: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostra de forma suave e dinâmica os elementos da página*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 650,
  reset: true
})

scrollReveal.reveal(`
#home .text, #home .image,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonial,
#contact .text, #contact .links,
footer .brand, footer .social
`, { interval: 100 })

/* Botão de voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  })

}



/* Active link */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + ((window.innerHeight / 8) * 4)
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <=sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')

    } else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
    }
  }
}




/* When scroll */
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
