<script setup lang="ts">
const config = useRuntimeConfig();
const PAGE_LIMIT = 9;
let page = useState('page', () => 1);
let posts = useState('posts');
let showPagination = useState('showPagination', () => true);

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
    <Pagination v-if="showPagination" v-model="page" :pages="numOfPages" />
  </NuxtLayout>
</template>

