<script lang="ts" setup>
const config = useRuntimeConfig();
const request = (req: string) => `/posts?q=${req}&_embed=comments`;
const searchResult = ref(null);

const search = (e: InputEvent) => {
  let req = (e.target as HTMLInputElement).value;
  if (req) {
    fetch(`${config.API_URL}${request(req)}`)
      .then(r => r.json())
      .then(data => searchResult.value = data);
  } else {
    setTimeout(() => {
      searchResult.value = null;
    }, 500);
  }
}

</script>

<template>
  <div class="header-panel">
    <section class="header-panel__search">
      <SearchBar @input="search" />
      <SearchResult v-model:searchResult="searchResult" />
    </section>
    <section class="header-panel__actions">
      <span class="action">
        <img src="/grid.svg" alt="">
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

  &__search {
    position: relative;
  }
}
</style>
