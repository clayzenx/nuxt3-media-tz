<script lang="ts" setup>
const PAGE_LIMIT = 9;
const config = useRuntimeConfig();
let searchReq = ref('');

const { data } = await useFetch(() => `posts?q=${searchReq.value}&_embed=comments`, { baseURL: config.API_URL });


const search = (e: InputEvent) => {
}
</script>

<template>
  <div class="header-panel">
    <section>
      <SearchBar @input="search" />
    </section>
    <section class="header-panel__actions">
      <span class="action">
        <img src="grid.svg" alt="">
        <p class="action__text">
          Посты
        </p>
      </span>
    </section>
  </div>
</template>

<style lang="scss">
@use "@/assets/var";

.header-panel {
  display: flex;
  gap: 92px;

  &__actions {
    display: flex;

    @media screen and (max-width: var.$tablet-width) {
      display: none;
    }

    .action {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 9px;
    }

    .action__text {
      font: var.$header-action;
      color: var.$primary;
    }
  }
}
</style>
