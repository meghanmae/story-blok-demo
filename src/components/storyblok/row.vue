<template>
  <v-row dense>
    <v-col
      :cols="col.columnSizeMobile"
      :md="col.columnSizeLaptop"
      :lg="col.columnSizeDesktop"
      v-for="col in blok.columns"
      :key="col._uid"
    >
      <template v-for="body in col.body">
        <component :key="body._uid" :blok="body" :is="body.component" />
      </template>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Row extends Vue {
  @Prop({ required: true })
  blok!: any;
}
</script>
