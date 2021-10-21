<template>
  <v-container fill-height>
    <v-card class="mx-auto" min-width="700">
      <v-toolbar color="primary" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>DVLab Repository Index</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.title"
                class="font-weight-bold"
              ></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            link
            @click="openLink(child.link)"
          >
            <v-list-item-avatar size="30">
              <!-- <v-icon class="primary" small> mdi-eye </v-icon> -->
              <img
                src="https://media.pokemoncentral.it/wiki/thumb/8/8f/Artwork246_HGSS.png/200px-Artwork246_HGSS.png"
                alt="John"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="child.title" class="font-italic">
              </v-list-item-title>
              <v-list-item-subtitle
                v-text="child.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
            <!-- <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1" @click="openLink(child.link)"
                  >mdi-information</v-icon
                >
              </v-btn>
            </v-list-item-action> -->
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    items: [
      {
        action: "mdi-ticket",
        items: [{ title: "List Item", link: "" }],
        title: "Active Customers Projects",
        active: true
      },
      {
        action: "mdi-silverware-fork-knife",
        items: [
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" }
        ],
        title: "Closed Customers Projects"
      },
      {
        action: "mdi-school",
        items: [
          {
            title: "Larvitar",
            subtitle: "ciccio",
            link: "https://github.com/dvisionlab/Larvitar"
          }
        ],
        title: "OpenSource Libraries"
      },
      {
        action: "mdi-run",
        items: [{ title: "List Item" }],
        title: "Internal Tools"
      },
      {
        action: "mdi-bottle-tonic-plus",
        items: [{ title: "List Item" }],
        title: "Misc"
      }
    ]
  }),
  methods: {
    openLink(url: string): void {
      console.log(url);
      window.open(url, "_blank");
    }
  }
});
</script>
