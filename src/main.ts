import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// Error: Import implicitly has any type
// Ignore this error when importing the CMS as it shouldn't have any impact
import StoryblokVue from 'storyblok-vue';

// Components
import Page from '@/components/storyblok/components-page.vue';
import Card from '@/components/storyblok/card.vue';
import Container from '@/components/storyblok/container.vue';
import Row from '@/components/storyblok/row.vue';
import TextTitle from '@/components/storyblok/display-objects/text-title.vue';
import FullImage from '@/components/storyblok/display-objects/full-image.vue';
import ButtonLink from '@/components/storyblok/display-objects/button-link.vue';
import DividerBar from '@/components/storyblok/display-objects/divider-bar.vue';

Vue.config.productionTip = false

// Story blok
Vue.use(StoryblokVue);
Vue.component('page', Page);
Vue.component('card', Card);
Vue.component('container', Container);
Vue.component('row', Row);
Vue.component('text-title', TextTitle);
Vue.component('full-image', FullImage);
Vue.component('button-link', ButtonLink);
Vue.component('divider-bar', DividerBar);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
