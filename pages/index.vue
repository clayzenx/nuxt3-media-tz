<script setup lang="ts">
const config = useRuntimeConfig();
let page = ref(1);
const { data } = await useFetch(() => `posts?_page=${page.value}&take=9&_embed=comments`, { baseURL: config.API_URL });
</script>

<template>
  <PostGrid v-if="data">
    <Post v-for="post in data" :post="post" />
  </PostGrid>
</template>


