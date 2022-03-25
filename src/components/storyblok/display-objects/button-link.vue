<template>
  <v-card-actions class="pa-4">
    <v-spacer
      v-if="blok.alignment === 'right' || blok.alignment === 'center'"
    />
    <v-btn
      :width="blok.width"
      :height="blok.height"
      color="globalPrimary"
      dark
      @click="navigateToLink(blok.link.url)"
    >
      {{ blok.text }}
    </v-btn>
    <v-spacer v-if="blok.alignment === 'center'" />
  </v-card-actions>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({ components: {} })
export default class ButtonLink extends Vue {
  @Prop({ required: true })
  blok!: any;

  navigateToLink(link: string) {
    window.location.replace(link);
  }
}
</script>
