<template>
  <div>
    <v-card-title class="font-weight-black pa-0">
      {{ blok.title }}
    </v-card-title>
    <v-card-text class="wysiwyg-styles pa-0" v-html="html" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import StoryBlokService from '@/services/story-blok-service';

@Component({ components: {} })
export default class TextTitle extends Vue {
  @Prop({ required: true })
  blok!: any;

  storyblokService = new StoryBlokService();

  get html() {
    let html = this.storyblokService.jsonToHtml(this.blok.text);
    return html;
  }
}
</script>

<style>
.wysiwyg-styles img {
  width: 100%;
}
</style>
