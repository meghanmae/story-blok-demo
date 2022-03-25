<template>
  <v-card class="mt-2 mb-7">
    <v-card-text>
      <template v-for="item in blok.body">
        <component :key="item._uid" :blok="item" :is="item.component" />
      </template>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Card extends Vue {
  @Prop({ required: true })
  blok!: any;
}
</script>
