<script setup lang="ts">
const { searchResult } = defineProps<{
  searchResult: IPost[]
}>()

</script>

<template>
  <div class="search_result" v-if="searchResult">
    <ResultItem v-for="item in searchResult.slice(0, 9)" :item="item" :key="item" />
  </div>
</template>

<style lang="scss">
@use "@/assets/var";

.search_result {
  background-color: var.$white;
  position: absolute;
  top: 60px;
  width: 100%;
  border: 1px solid var.$grey-10;
  border-radius: 20px;
  padding: 20px 0px;

}
</style>
