<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-chip class="ma-2"> {{ name }} </v-chip>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { pasticcio } from "@/ts/dep";

const ciccio: {
  text: string;
  age: number;
} = {
  text: "ciccio",
  age: 30
};

// using vue.extend enables type inference
export default Vue.extend({
  name: "About",
  props: {},
  data() {
    return {};
  },
  computed: {
    name(): string {
      return ciccio.text + pasticcio.text;
    }
  }
});
</script>
