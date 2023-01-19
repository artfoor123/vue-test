<template>
  <div class="text-center">
    <div class="row">
      <div class="col-md-2" v-for="(item, index) in data.pokemon" :key="index">
        <img :src="`${urlImg}${id + index + 1}.png`" alt="" />
        <p>{{ item.name }}</p>
      </div>
      <b-pagination
        class="mt-5 d-flex justify-content-center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </div>
    <div ref="test">beer</div>
  </div>
</template>
<script lang="ts">
import { ref, reactive, onMounted, defineComponent, watch } from "vue";
import type { Ref } from "vue";
import axios from "axios";
interface TypePokemon {
  name: string;
  url?: string;
}
export default defineComponent({
  setup: () => {
    const perPage: Ref<number> = ref(24);
    const currentPage: Ref<number> = ref(1);
    const rows: Ref<number> = ref(0);
    const id: Ref<number> = ref(0);
    const urlImg: Ref<string> = ref(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    );
    const data = reactive({
      pokemon: <TypePokemon[]>[],
    });
    onMounted(
      async (): Promise<void> =>
        await getPokemon(perPage.value, currentPage.value)
    );
    watch(currentPage, async (): Promise<void> => {
      await getPokemon(perPage.value, currentPage.value);
    });
    const getPokemon = async (limit: number, offset: number): Promise<void> => {
      let setoffset: number = offset * limit - limit;
      const pokemon = await axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${setoffset}`
        )
        .then((res) => {
          return res.data;
        });
      data.pokemon = pokemon.results;
      rows.value = pokemon.count;
      id.value = setoffset;
    };

    return {
      data,
      urlImg,
      perPage,
      currentPage,
      rows,
      id,
    };
  },
});
</script>
