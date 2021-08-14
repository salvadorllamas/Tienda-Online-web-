<template>
  <v-container class="text-center">
    <v-card color="white" class="black--text">
      <v-row class="justify-center ma-2" v-for="(item, index) in store[0].contenido" :key="index">
        <v-col cols="12" v-if="item.titulo">
          <h2 class="text-center">
            <FONT size="6">{{item.titulo}}</FONT>
          </h2>
        </v-col>

        <v-col cols="12" v-if="item.src" >
         <v-responsive height="350" class="mx-auto">
          <v-card class="d-inline-block mx-auto" color="white"  elevation="0">
            <v-img max-width="600" height="350" contain :src="item.src"></v-img>
          </v-card>
        </v-responsive>
        </v-col>

        <v-col cols="12" sm="6">
          <p class="text-left">{{item.parrafo}}</p>

          <h3 class="text-left mt-2">{{item.tituloLista}}</h3>

          <ul class="text-left ml-4" v-if="item.listas">
            <li class="mt-3" v-for="(lista, index) in item.listas " :key="index">
              <p>
                <b v-if="item.suptitulosLista">{{item.suptitulosLista[index]}} :</b>
                {{lista}}
              </p>
            </li>
          </ul>
          <ul class="text-left ml-4 mb-5" v-if="item.links">
            <li class="mt-3" v-for="(links, index) in item.links " :key="index">
              <h4>
                <a target="_blank" alt :href="links.ruta">{{links.nombre}}</a>
              </h4>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    store: {
      type: Array
    }
  }
}
</script>