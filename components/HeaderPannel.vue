<script lang="ts" setup>
const config = useRuntimeConfig();
let searchReq = ref('');
let posts = useState('posts');

const { data } = await useFetch(() => `posts?q=${searchReq.value}&_embed=comments`, { baseURL: config.API_URL });

const search = (e: InputEvent) => {
  searchReq.value = (e.target as HTMLInputElement).value
  posts.value = data
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
