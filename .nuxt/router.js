import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _69866fa0 = () => interopDefault(import('..\\pages\\about-us-01.vue' /* webpackChunkName: "pages/about-us-01" */))
const _694e119c = () => interopDefault(import('..\\pages\\about-us-03.vue' /* webpackChunkName: "pages/about-us-03" */))
const _6931e29a = () => interopDefault(import('..\\pages\\about-us-04.vue' /* webpackChunkName: "pages/about-us-04" */))
const _ec386464 = () => interopDefault(import('..\\pages\\career.vue' /* webpackChunkName: "pages/career" */))
const _958ac7be = () => interopDefault(import('..\\pages\\contact-us-modern.vue' /* webpackChunkName: "pages/contact-us-modern" */))
const _43f80b57 = () => interopDefault(import('..\\pages\\contact-us-with-map.vue' /* webpackChunkName: "pages/contact-us-with-map" */))
const _4cc42114 = () => interopDefault(import('..\\pages\\home-authentic-studio.vue' /* webpackChunkName: "pages/home-authentic-studio" */))
const _a5ca9a1a = () => interopDefault(import('..\\pages\\home-blog-grid.vue' /* webpackChunkName: "pages/home-blog-grid" */))
const _6a7f9cac = () => interopDefault(import('..\\pages\\home-corona.vue' /* webpackChunkName: "pages/home-corona" */))
const _e7276876 = () => interopDefault(import('..\\pages\\home-creative-agency.vue' /* webpackChunkName: "pages/home-creative-agency" */))
const _163ecb38 = () => interopDefault(import('..\\pages\\home-creative-portfolio.vue' /* webpackChunkName: "pages/home-creative-portfolio" */))
const _086a5bb2 = () => interopDefault(import('..\\pages\\home-design-studio.vue' /* webpackChunkName: "pages/home-design-studio" */))
const _4c3fba30 = () => interopDefault(import('..\\pages\\home-digital-agency.vue' /* webpackChunkName: "pages/home-digital-agency" */))
const _1c008d30 = () => interopDefault(import('..\\pages\\home-essential.vue' /* webpackChunkName: "pages/home-essential" */))
const _6aeba591 = () => interopDefault(import('..\\pages\\home-freelancer.vue' /* webpackChunkName: "pages/home-freelancer" */))
const _322b31e6 = () => interopDefault(import('..\\pages\\home-fullscreen-slider-left-vertical-header.vue' /* webpackChunkName: "pages/home-fullscreen-slider-left-vertical-header" */))
const _5229af71 = () => interopDefault(import('..\\pages\\home-indie-musician.vue' /* webpackChunkName: "pages/home-indie-musician" */))
const _93805c0e = () => interopDefault(import('..\\pages\\home-landing.vue' /* webpackChunkName: "pages/home-landing" */))
const _22673fa8 = () => interopDefault(import('..\\pages\\home-masonry-gallery.vue' /* webpackChunkName: "pages/home-masonry-gallery" */))
const _7e24b882 = () => interopDefault(import('..\\pages\\home-minimal-agency.vue' /* webpackChunkName: "pages/home-minimal-agency" */))
const _a3092898 = () => interopDefault(import('..\\pages\\home-minimal-metro-grid.vue' /* webpackChunkName: "pages/home-minimal-metro-grid" */))
const _2e1bb8fe = () => interopDefault(import('..\\pages\\home-minimal-portfolio.vue' /* webpackChunkName: "pages/home-minimal-portfolio" */))
const _5ce23252 = () => interopDefault(import('..\\pages\\home-onepage.vue' /* webpackChunkName: "pages/home-onepage" */))
const _4bd9d0ef = () => interopDefault(import('..\\pages\\home-photo-slider-gallery.vue' /* webpackChunkName: "pages/home-photo-slider-gallery" */))
const _3c30fc4e = () => interopDefault(import('..\\pages\\home-portfolio-slide.vue' /* webpackChunkName: "pages/home-portfolio-slide" */))
const _c07f4fca = () => interopDefault(import('..\\pages\\home-product-landing.vue' /* webpackChunkName: "pages/home-product-landing" */))
const _6528224b = () => interopDefault(import('..\\pages\\home-restaurant.vue' /* webpackChunkName: "pages/home-restaurant" */))
const _25abdf97 = () => interopDefault(import('..\\pages\\home-service.vue' /* webpackChunkName: "pages/home-service" */))
const _2c2f9ff4 = () => interopDefault(import('..\\pages\\home-start-up.vue' /* webpackChunkName: "pages/home-start-up" */))
const _0a04ab90 = () => interopDefault(import('..\\pages\\home-vertical-menu.vue' /* webpackChunkName: "pages/home-vertical-menu" */))
const _082a4903 = () => interopDefault(import('..\\pages\\pricing-plans.vue' /* webpackChunkName: "pages/pricing-plans" */))
const _5348581a = () => interopDefault(import('..\\pages\\services-classic.vue' /* webpackChunkName: "pages/services-classic" */))
const _bd1641e6 = () => interopDefault(import('..\\pages\\services-list.vue' /* webpackChunkName: "pages/services-list" */))
const _6d31d164 = () => interopDefault(import('..\\pages\\services-modern.vue' /* webpackChunkName: "pages/services-modern" */))
const _46fe726e = () => interopDefault(import('..\\pages\\team-carousel-01.vue' /* webpackChunkName: "pages/team-carousel-01" */))
const _470c89ef = () => interopDefault(import('..\\pages\\team-carousel-02.vue' /* webpackChunkName: "pages/team-carousel-02" */))
const _29ad2696 = () => interopDefault(import('..\\pages\\team-grid.vue' /* webpackChunkName: "pages/team-grid" */))
const _587d7610 = () => interopDefault(import('..\\pages\\blog\\blog-creative.vue' /* webpackChunkName: "pages/blog/blog-creative" */))
const _79ae9789 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _1722dad4 = () => interopDefault(import('..\\pages\\blog\\blog-details-modern-layout.vue' /* webpackChunkName: "pages/blog/blog-details-modern-layout" */))
const _fd497058 = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic.vue' /* webpackChunkName: "pages/blog/blog-grid-classic" */))
const _58d14a3a = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic-sidebar.vue' /* webpackChunkName: "pages/blog/blog-grid-classic-sidebar" */))
const _79a5c083 = () => interopDefault(import('..\\pages\\blog\\blog-grid-mesonry.vue' /* webpackChunkName: "pages/blog/blog-grid-mesonry" */))
const _b8e3053a = () => interopDefault(import('..\\pages\\blog\\blog-grid-minimal.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal" */))
const _59dea950 = () => interopDefault(import('..\\pages\\blog\\blog-grid-minimal-outline.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal-outline" */))
const _72adb966 = () => interopDefault(import('..\\pages\\blog\\blog-grid-modern.vue' /* webpackChunkName: "pages/blog/blog-grid-modern" */))
const _2e4b2f40 = () => interopDefault(import('..\\pages\\blog\\blog-grid-simple.vue' /* webpackChunkName: "pages/blog/blog-grid-simple" */))
const _4604ea6b = () => interopDefault(import('..\\pages\\blog\\blog-grid-standard.vue' /* webpackChunkName: "pages/blog/blog-grid-standard" */))
const _7f1ab1b5 = () => interopDefault(import('..\\pages\\blog\\blog-standard-list.vue' /* webpackChunkName: "pages/blog/blog-standard-list" */))
const _15331ec8 = () => interopDefault(import('..\\pages\\element\\accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _31d0b5e6 = () => interopDefault(import('..\\pages\\element\\brand-logo.vue' /* webpackChunkName: "pages/element/brand-logo" */))
const _3117b098 = () => interopDefault(import('..\\pages\\element\\call-to-action-banner.vue' /* webpackChunkName: "pages/element/call-to-action-banner" */))
const _2bf8bd7c = () => interopDefault(import('..\\pages\\element\\carousel-slider.vue' /* webpackChunkName: "pages/element/carousel-slider" */))
const _397318b1 = () => interopDefault(import('..\\pages\\element\\contact-subscribe.vue' /* webpackChunkName: "pages/element/contact-subscribe" */))
const _2cd6d1d6 = () => interopDefault(import('..\\pages\\element\\dividers.vue' /* webpackChunkName: "pages/element/dividers" */))
const _0d16f9ae = () => interopDefault(import('..\\pages\\element\\flexible-image-slider.vue' /* webpackChunkName: "pages/element/flexible-image-slider" */))
const _0711158a = () => interopDefault(import('..\\pages\\element\\gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _65c06f7e = () => interopDefault(import('..\\pages\\element\\icon-boxes.vue' /* webpackChunkName: "pages/element/icon-boxes" */))
const _15cd23f4 = () => interopDefault(import('..\\pages\\element\\instagram.vue' /* webpackChunkName: "pages/element/instagram" */))
const _0ce0de69 = () => interopDefault(import('..\\pages\\element\\lists.vue' /* webpackChunkName: "pages/element/lists" */))
const _0b31dcd9 = () => interopDefault(import('..\\pages\\element\\message-box.vue' /* webpackChunkName: "pages/element/message-box" */))
const _427f4d98 = () => interopDefault(import('..\\pages\\element\\pricing-box.vue' /* webpackChunkName: "pages/element/pricing-box" */))
const _325e8d2e = () => interopDefault(import('..\\pages\\element\\tab.vue' /* webpackChunkName: "pages/element/tab" */))
const _6efcc78e = () => interopDefault(import('..\\pages\\element\\team.vue' /* webpackChunkName: "pages/element/team" */))
const _6d590d73 = () => interopDefault(import('..\\pages\\element\\testimonial.vue' /* webpackChunkName: "pages/element/testimonial" */))
const _5d21fc48 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-ajax-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-ajax-filter" */))
const _64611476 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details.vue' /* webpackChunkName: "pages/portfolio/portfolio-details" */))
const _5e06e56e = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-image-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-image-with-caption" */))
const _f57eca5e = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-left-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-left-wide" */))
const _3ab852d8 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-right.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right" */))
const _5cbb86c8 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-right-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right-wide" */))
const _0ec311b0 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-boxed.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-boxed" */))
const _616c0f62 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-filter" */))
const _42275fc2 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-metro-01.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-01" */))
const _41ef01be = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-metro-03.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-03" */))
const _3f1af9bd = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-wide" */))
const _25ef2828 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-with-caption" */))
const _4c2f3690 = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _90ee2e9c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/about-us-01",
    component: _69866fa0,
    name: "about-us-01"
  }, {
    path: "/about-us-03",
    component: _694e119c,
    name: "about-us-03"
  }, {
    path: "/about-us-04",
    component: _6931e29a,
    name: "about-us-04"
  }, {
    path: "/career",
    component: _ec386464,
    name: "career"
  }, {
    path: "/contact-us-modern",
    component: _958ac7be,
    name: "contact-us-modern"
  }, {
    path: "/contact-us-with-map",
    component: _43f80b57,
    name: "contact-us-with-map"
  }, {
    path: "/home-authentic-studio",
    component: _4cc42114,
    name: "home-authentic-studio"
  }, {
    path: "/home-blog-grid",
    component: _a5ca9a1a,
    name: "home-blog-grid"
  }, {
    path: "/home-corona",
    component: _6a7f9cac,
    name: "home-corona"
  }, {
    path: "/home-creative-agency",
    component: _e7276876,
    name: "home-creative-agency"
  }, {
    path: "/home-creative-portfolio",
    component: _163ecb38,
    name: "home-creative-portfolio"
  }, {
    path: "/home-design-studio",
    component: _086a5bb2,
    name: "home-design-studio"
  }, {
    path: "/home-digital-agency",
    component: _4c3fba30,
    name: "home-digital-agency"
  }, {
    path: "/home-essential",
    component: _1c008d30,
    name: "home-essential"
  }, {
    path: "/home-freelancer",
    component: _6aeba591,
    name: "home-freelancer"
  }, {
    path: "/home-fullscreen-slider-left-vertical-header",
    component: _322b31e6,
    name: "home-fullscreen-slider-left-vertical-header"
  }, {
    path: "/home-indie-musician",
    component: _5229af71,
    name: "home-indie-musician"
  }, {
    path: "/home-landing",
    component: _93805c0e,
    name: "home-landing"
  }, {
    path: "/home-masonry-gallery",
    component: _22673fa8,
    name: "home-masonry-gallery"
  }, {
    path: "/home-minimal-agency",
    component: _7e24b882,
    name: "home-minimal-agency"
  }, {
    path: "/home-minimal-metro-grid",
    component: _a3092898,
    name: "home-minimal-metro-grid"
  }, {
    path: "/home-minimal-portfolio",
    component: _2e1bb8fe,
    name: "home-minimal-portfolio"
  }, {
    path: "/home-onepage",
    component: _5ce23252,
    name: "home-onepage"
  }, {
    path: "/home-photo-slider-gallery",
    component: _4bd9d0ef,
    name: "home-photo-slider-gallery"
  }, {
    path: "/home-portfolio-slide",
    component: _3c30fc4e,
    name: "home-portfolio-slide"
  }, {
    path: "/home-product-landing",
    component: _c07f4fca,
    name: "home-product-landing"
  }, {
    path: "/home-restaurant",
    component: _6528224b,
    name: "home-restaurant"
  }, {
    path: "/home-service",
    component: _25abdf97,
    name: "home-service"
  }, {
    path: "/home-start-up",
    component: _2c2f9ff4,
    name: "home-start-up"
  }, {
    path: "/home-vertical-menu",
    component: _0a04ab90,
    name: "home-vertical-menu"
  }, {
    path: "/pricing-plans",
    component: _082a4903,
    name: "pricing-plans"
  }, {
    path: "/services-classic",
    component: _5348581a,
    name: "services-classic"
  }, {
    path: "/services-list",
    component: _bd1641e6,
    name: "services-list"
  }, {
    path: "/services-modern",
    component: _6d31d164,
    name: "services-modern"
  }, {
    path: "/team-carousel-01",
    component: _46fe726e,
    name: "team-carousel-01"
  }, {
    path: "/team-carousel-02",
    component: _470c89ef,
    name: "team-carousel-02"
  }, {
    path: "/team-grid",
    component: _29ad2696,
    name: "team-grid"
  }, {
    path: "/blog/blog-creative",
    component: _587d7610,
    name: "blog-blog-creative"
  }, {
    path: "/blog/blog-details",
    component: _79ae9789,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-details-modern-layout",
    component: _1722dad4,
    name: "blog-blog-details-modern-layout"
  }, {
    path: "/blog/blog-grid-classic",
    component: _fd497058,
    name: "blog-blog-grid-classic"
  }, {
    path: "/blog/blog-grid-classic-sidebar",
    component: _58d14a3a,
    name: "blog-blog-grid-classic-sidebar"
  }, {
    path: "/blog/blog-grid-mesonry",
    component: _79a5c083,
    name: "blog-blog-grid-mesonry"
  }, {
    path: "/blog/blog-grid-minimal",
    component: _b8e3053a,
    name: "blog-blog-grid-minimal"
  }, {
    path: "/blog/blog-grid-minimal-outline",
    component: _59dea950,
    name: "blog-blog-grid-minimal-outline"
  }, {
    path: "/blog/blog-grid-modern",
    component: _72adb966,
    name: "blog-blog-grid-modern"
  }, {
    path: "/blog/blog-grid-simple",
    component: _2e4b2f40,
    name: "blog-blog-grid-simple"
  }, {
    path: "/blog/blog-grid-standard",
    component: _4604ea6b,
    name: "blog-blog-grid-standard"
  }, {
    path: "/blog/blog-standard-list",
    component: _7f1ab1b5,
    name: "blog-blog-standard-list"
  }, {
    path: "/element/accordion",
    component: _15331ec8,
    name: "element-accordion"
  }, {
    path: "/element/brand-logo",
    component: _31d0b5e6,
    name: "element-brand-logo"
  }, {
    path: "/element/call-to-action-banner",
    component: _3117b098,
    name: "element-call-to-action-banner"
  }, {
    path: "/element/carousel-slider",
    component: _2bf8bd7c,
    name: "element-carousel-slider"
  }, {
    path: "/element/contact-subscribe",
    component: _397318b1,
    name: "element-contact-subscribe"
  }, {
    path: "/element/dividers",
    component: _2cd6d1d6,
    name: "element-dividers"
  }, {
    path: "/element/flexible-image-slider",
    component: _0d16f9ae,
    name: "element-flexible-image-slider"
  }, {
    path: "/element/gradation",
    component: _0711158a,
    name: "element-gradation"
  }, {
    path: "/element/icon-boxes",
    component: _65c06f7e,
    name: "element-icon-boxes"
  }, {
    path: "/element/instagram",
    component: _15cd23f4,
    name: "element-instagram"
  }, {
    path: "/element/lists",
    component: _0ce0de69,
    name: "element-lists"
  }, {
    path: "/element/message-box",
    component: _0b31dcd9,
    name: "element-message-box"
  }, {
    path: "/element/pricing-box",
    component: _427f4d98,
    name: "element-pricing-box"
  }, {
    path: "/element/tab",
    component: _325e8d2e,
    name: "element-tab"
  }, {
    path: "/element/team",
    component: _6efcc78e,
    name: "element-team"
  }, {
    path: "/element/testimonial",
    component: _6d590d73,
    name: "element-testimonial"
  }, {
    path: "/portfolio/portfolio-ajax-filter",
    component: _5d21fc48,
    name: "portfolio-portfolio-ajax-filter"
  }, {
    path: "/portfolio/portfolio-details",
    component: _64611476,
    name: "portfolio-portfolio-details"
  }, {
    path: "/portfolio/portfolio-details-image-with-caption",
    component: _5e06e56e,
    name: "portfolio-portfolio-details-image-with-caption"
  }, {
    path: "/portfolio/portfolio-details-left-wide",
    component: _f57eca5e,
    name: "portfolio-portfolio-details-left-wide"
  }, {
    path: "/portfolio/portfolio-details-right",
    component: _3ab852d8,
    name: "portfolio-portfolio-details-right"
  }, {
    path: "/portfolio/portfolio-details-right-wide",
    component: _5cbb86c8,
    name: "portfolio-portfolio-details-right-wide"
  }, {
    path: "/portfolio/portfolio-grid-boxed",
    component: _0ec311b0,
    name: "portfolio-portfolio-grid-boxed"
  }, {
    path: "/portfolio/portfolio-grid-filter",
    component: _616c0f62,
    name: "portfolio-portfolio-grid-filter"
  }, {
    path: "/portfolio/portfolio-grid-metro-01",
    component: _42275fc2,
    name: "portfolio-portfolio-grid-metro-01"
  }, {
    path: "/portfolio/portfolio-grid-metro-03",
    component: _41ef01be,
    name: "portfolio-portfolio-grid-metro-03"
  }, {
    path: "/portfolio/portfolio-grid-wide",
    component: _3f1af9bd,
    name: "portfolio-portfolio-grid-wide"
  }, {
    path: "/portfolio/portfolio-with-caption",
    component: _25ef2828,
    name: "portfolio-portfolio-with-caption"
  }, {
    path: "/blog/:id?",
    component: _4c2f3690,
    name: "blog-id"
  }, {
    path: "/",
    component: _90ee2e9c,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
