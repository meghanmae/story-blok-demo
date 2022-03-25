<template>
  <div>
    <v-divider v-if="!blok.hideLine" :class="padding" />
    <v-spacer v-else :class="padding" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class DividerBar extends Vue {
  @Prop({ required: true })
  blok!: any;

  get padding() {
    return `mt-${this.blok.topPadding} mb-${this.blok.bottomPadding}`;
  }
}
</script>
