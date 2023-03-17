import BaseDivider from './baseDivider.vue'
import BaseHeading from './BaseHeading.vue'

export const registerComponents = (app) => {
  app.component('base-divider', BaseDivider)
  app.component('base-heading', BaseHeading)
}
