<template>
  <v-container fill-height class="pa-0" style="background-color: red">
    <v-card class="mt-4" style="width: 100%" color="#26c6da">
      <v-toolbar color="primary" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>DVLab Shortcuts</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
          icon
          href="https://github.com/login/oauth/authorize?=clientId:c13baa4f7103dd91b51f"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card class="mx-auto my-4" width="500">
        <v-list color="secondary">
          <v-list-group :value="true" prepend-icon="mdi-account-circle">
            <template v-slot:activator>
              <v-list-item-title>Repos</v-list-item-title>
            </template>

            <v-list-group
              v-for="(item, i) in items"
              :key="item.id"
              v-model="item.active"
              no-action
              sub-group
              @change="save(item.active, i)"
            >
              <template v-slot:activator>
                <v-list-item-icon>
                  <v-icon class="mr-2">mdi-eye</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.group"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="(repo, i) in item.repos" :key="i" link>
                <v-list-item-title v-text="repo.name"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="repo.icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </v-list-group>

          <v-divider> </v-divider>

          <v-list-item
            href="https://github.com/pulls?q=is%3Aopen+is%3Apr+archived%3Afalse+user%3Advisionlab"
          >
            <v-list-item-icon>
              <v-icon>mdi-eye</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Open Pull Requests</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { getGroupedRepos, savePreferences, loadPreferences } from "@/ts/utils";

// import { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";
// type UpdateLabelParameters =
//   RestEndpointMethodTypes["issues"]["updateLabel"]["parameters"];

import { item } from "@/ts/types";

// let items: item[];

export default Vue.extend({
  data: () => ({
    items: [] as item[]
  }),
  // data: () => ({
  //   items: [
  //     {
  //       id: 1,
  //       group: "Ongoing Customer Projects",
  //       repos: [{ name: "Muse", icon: "mdi-file-outline" }],
  //       active: false
  //     },
  //     {
  //       id: 2,
  //       group: "Open Source Libraries",
  //       repos: [{ name: "Larvitar", icon: "mdi-file-outline" }],
  //       active: false
  //     },
  //     {
  //       id: 3,
  //       group: "Internal Tools",
  //       repos: [{ name: "Ditto", icon: "mdi-file-outline" }],
  //       active: false
  //     },
  //     {
  //       id: 4,
  //       group: "Misc",
  //       repos: [{ name: "repoIndex", icon: "mdi-file-outline" }],
  //       active: false
  //     }
  //   ]
  // }),
  methods: {
    openLink(url: string): void {
      console.log("open", url);
      window.open(url, "_blank");
    },
    save(active: boolean, itemIndex: number): void {
      // freeze to avoid conflicts when negating "active"
      let freezed: item[] = [];

      this.items.forEach(val => {
        let init: item = {
          id: 0,
          group: "",
          repos: [],
          active: false
        };

        let obj = Object.assign(init, val);
        freezed.push(obj);
      });

      freezed[itemIndex].active = !freezed[itemIndex].active;
      console.log(freezed);

      savePreferences(freezed);
    }
  },
  async beforeMount() {
    let repos = await getGroupedRepos();
    this.items = loadPreferences(repos);
  }
});
</script>
