<template>
  <div v-editable="blok">
    <template v-for="item in blok.body">
      <component :key="item._uid" :blok="item" :is="item.component" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Page extends Vue {
  @Prop({ required: true })
  blok!: any;
}
</script>
