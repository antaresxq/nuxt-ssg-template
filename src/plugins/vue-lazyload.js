import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import picture from '@/assets/sprite/svg/img-placeholder.svg'

Vue.use(VueLazyload, {
  preLoad: 1,
  attempt: 1,
  loading: picture,
})
