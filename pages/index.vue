<script setup lang="ts">
const config = useRuntimeConfig();
let page = ref(1);
let posts = useState('posts');

const { data } = await useFetch(() => `posts?_page=${page.value}&_limit=9&_embed=comments`, { baseURL: config.API_URL });
posts.value = data;

</script>

<template>
  <NuxtLayout name="index">
    <PostGrid v-if="posts">
      <Post v-for="post in posts" :post="post" />
    </PostGrid>
  </NuxtLayout>
</template>

