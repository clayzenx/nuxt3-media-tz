<script setup lang="ts">
const { comment } = defineProps<{
  comment: IComment
}>()

console.log(comment)

</script>

<template>
  <div class="com">
    <img src="/dude.svg" alt="avatar">
    <span class="comment">
      <p class="comment__author">{{ comment.email }}</p>
      <p class="comment__message">{{ comment.body }}</p>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/var";

.com {
  display: flex;
  gap: 18px;
  align-items: start;
}

.comment {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__author {
    font: var.$mobile-back-page;
    color: var.$black;
  }
}
</style>
