<template>
  <v-container fill-height class="pa-0" style="background-color: black">
    <v-card class="mt-4" style="width: 100%">
      <v-toolbar color="primary">
        <v-app-bar-nav-icon> </v-app-bar-nav-icon>

        <v-toolbar-title>DVLab Shortcuts</v-toolbar-title>

        <v-spacer></v-spacer>
        <img src="https://www.dvisionlab.com/images/logo_dv.png" />

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card class="mx-auto my-4" width="700">
        <v-list color="secondary">
          <v-list-group :value="true" prepend-icon="mdi-application-brackets">
            <template v-slot:activator>
              <v-list-item-title class="text-h6">Repos</v-list-item-title>
            </template>

            <v-list-group
              v-for="(item, i) in items"
              :key="item.id"
              v-model="item.active"
              no-action
              sub-group
              @change="save(item.active, i)"
              :prepend-icon="item.icon"
            >
              <template v-slot:activator>
                <!-- <v-list-item-icon>
                  <v-icon class="mr-2">mdi-eye</v-icon>
                </v-list-item-icon> -->
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.group"
                    class="text-h6"
                  ></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(repo, i) in item.repos"
                :key="i"
                link
                :href="repo.html_url"
                target="_blank"
              >
                <v-list-item-title class="text-overline">{{
                  repo.name
                }}</v-list-item-title>
                <v-list-item-subtitle>
                  last push: {{ new Date(repo.pushed_at).toLocaleString() }}
                </v-list-item-subtitle>
                <v-list-item-icon>
                  <v-icon v-text="repo.icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </v-list-group>

          <v-divider> </v-divider>

          <v-list-item
            href="https://github.com/pulls?q=is%3Aopen+is%3Apr+archived%3Afalse+user%3Advisionlab"
            target="_blank"
          >
            <v-list-item-icon>
              <v-icon>mdi-source-pull</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="text-h6"
              >Pending Pull Requests</v-list-item-title
            >
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
          active: false,
          icon: ""
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
