<script setup lang="ts">
const { item } = defineProps<{
  item: IPost
}>()
let url = `/post/${item.id}`;

</script>

<template>
  <NuxtLink :to="url">
    <section class="result_item">
      <img class="result_item__image" src="/post-preview.svg">
      <h3 class="result_item__title">{{ item.title }}</h3>
    </section>
  </NuxtLink>
</template>

<style lang="scss">
@use "@/assets/var";

.result_item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: var.$grey-10
  }

  &__image {
    width: 35px;
  }

  &__title {
    color: var.$black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;


    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
