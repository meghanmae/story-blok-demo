<template>
  <v-container>
    <template v-for="item in blok.body">
      <component :key="item._uid" :blok="item" :is="item.component" />
    </template>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Container extends Vue {
  @Prop({ required: true })
  blok!: any;
}
</script>
