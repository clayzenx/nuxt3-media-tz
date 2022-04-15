<script setup lang="ts">
const PAGE_LIMIT = 9;
const config = useRuntimeConfig();
const page = usePage();
const posts = usePosts();

const req = () => `/posts?_page=${page.value}&_limit=${PAGE_LIMIT}&_embed=comments`;

useFetch(req, { baseURL: config.API_URL })
  .then(({ data }) => posts.value = data);

const numOfPages = await getPageCountFromRequest(`${config.API_URL}${req()}`);
</script>

<template>
  <NuxtLayout name="index">
    <PostGrid v-if="posts">
      <Post v-for="post in posts" :post="post" />
    </PostGrid>
    <Pagination v-model:page="page" :pages="numOfPages" />
  </NuxtLayout>
</template>

