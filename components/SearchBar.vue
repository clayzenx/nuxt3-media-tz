<script setup lang="ts">
const emit = defineEmits(['change', 'input'])
</script>

<template>
  <div class="search-wrapper">
    <img class="search-icon" src="search.svg" alt="">
    <input class="search-bar" type="text" placeholder="Поиск" @input="e => emit('input', e)"
      @change="e => emit('change', e)">
  </div>
</template>

<style lang="scss">
@use "@/assets/var";

.search-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 17px;
}

.search-bar {
  border: 0;
  background-color: var.$grey-10;
  padding: 14px 42px;
  width: 309px;
  border-radius: 10px;
  color: var.$grey-60;
  font: var.$text;
}
</style>
