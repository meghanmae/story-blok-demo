<template>
  <div>
    <page :blok="storyBlokService.story.content" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StoryBlokService from '@/services/story-blok-service';

@Component({})
export default class Home extends Vue {
  storyBlokService = new StoryBlokService();

  created() {
    this.storyBlokService.create('home');
    console.log(this.storyBlokService.story.content)
  }
}
</script>