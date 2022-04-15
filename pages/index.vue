<script setup lang="ts">
const PAGE_LIMIT = 9;
const config = useRuntimeConfig();
const page = usePage();
const posts = usePosts();
const showPagination = usePagination();

const { data } = await useFetch(
  () => `posts?_page=${page.value}&_limit=${PAGE_LIMIT}&_embed=comments`,
  { baseURL: config.API_URL }
);
posts.value = data;

const lastPageLink: string = (await getPaginationLinks(page.value, PAGE_LIMIT)).last;
const numOfPages: number = +getPageNumberFromLink(lastPageLink);

</script>

<template>
  <NuxtLayout name="index">
    <PostGrid v-if="posts">
      <Post v-for="post in posts" :post="post" />
    </PostGrid>
    <Pagination v-if="showPagination" v-model:page="page" :pages="numOfPages" />
  </NuxtLayout>
</template>

