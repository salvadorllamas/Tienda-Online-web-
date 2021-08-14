<template>
  <v-container>
    <v-card color="white" class="black--text ma-2   d-flex justify-center">
      <v-row class="ma-5">
        <v-col cols="6">
          <p
            v-for="(item, index) in 100"
            :key="index"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde alias maiores quasi ea? Necessitatibus asperiores sit temporibus quae. Id beatae aut nemo non nostrum deleniti, sequi odit unde sed iure.</p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>