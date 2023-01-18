<template>
  <div class="text-center">
    <div class="row">
      <div
        class="col-md-2"
        v-for="(item, index) in pokamon"
        :key="index"
      >
        <img :src="`${urlImg}${id + index + 1 }.png`" alt="" />
        <p>{{ item.name }}</p>
      </div>
      <b-pagination
        class="mt-5 d-flex justify-content-center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      pokamon: [],
      urlImg:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      rows: 0,
      perPage: 24,
      currentPage: 1,
      id : 0 ,
      urlApi : "https://pokeapi.co/api/v2/pokemon"
    };
  },
  watch : {
    currentPage() {
      this.getPokamon()
    }
  },
  mounted() {
    this.getPokamon();
  },
  methods: {
    getPokamon() {
      axios
        .get(`${this.urlApi}?limit=${this.perPage}&offset=${this.currentPage * this.perPage - this.perPage}`)
        .then((response) => {
          this.pokamon = response.data.results;
          this.rows = response.data.count;
          this.id = this.currentPage * this.perPage - this.perPage
        });
    },
  },
};
</script>

<style></style>
