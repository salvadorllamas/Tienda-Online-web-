<template>
  <div>
    <v-card elevation="24">
      <div v-for="item in articulos" :key="item.id">
        <nuxt-link :to="`/ejercicios/${item.id}`">
          <h1>{{item.title}}</h1>
        </nuxt-link>
        <p>{{item.body}}</p>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      articulos: []
    }
  },
  head: {
    title: 'Articulos'
  },
  meta: [{ name: 'ejercicios', content: 'descripcion 1 ' }],
  async created() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      //console.log(res.data)
      this.articulos = res.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>