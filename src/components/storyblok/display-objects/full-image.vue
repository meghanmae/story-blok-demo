<template>
  <v-img
    :width="blok.width"
    :height="blok.height"
    :src="blok.image.filename"
    class="rounded-lg"
  >
    <v-container fill-height align-center>
      <v-row justify="center">
        <v-card-text
          class="white--text text-md-h1 text-h3 font-weight-bold text-center"
        >
          {{ blok.imageTitle }}
        </v-card-text>
        <v-card-text
          class="white--text text-center text-h5"
          v-html="imageTextHtml"
        />
      </v-row>
    </v-container>
  </v-img>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import StoryBlokService from '@/services/story-blok-service';

@Component({ components: {} })
export default class FullImage extends Vue {
  @Prop({ required: true })
  blok!: any;

  storyblokService = new StoryBlokService();

  get imageTextHtml() {
    if (!this.blok.imageText) return '';
    let html = this.storyblokService.jsonToHtml(this.blok.imageText);
    return html;
  }
}
</script>
