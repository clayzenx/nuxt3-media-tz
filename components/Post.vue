<script setup lang="ts">
const { post } = defineProps<{
  post: IPost
}>()
</script>

<template>
  <section class="post">
    <img src="post-preview.svg" class="post__preview" alt="preview">
    <h3 class="post__title">
      {{ post.title }}
    </h3>
    <p class="post__body">
      {{ post.body }}
    </p>
    <span class="post__icons">
      <span class="post__icons-comments">
        <img src="comment.svg" alt="comment-icon">
        <p>{{ post.comments.length }}</p>
      </span>
      <span>
        <img src="pen.svg" alt="pen">
      </span>
    </span>
  </section>
</template>

<style lang="scss">
@use "@/assets/var";

$card-width: 309px;
$card-height: 430px;

.post {
  display: flex;
  flex-direction: column;
  border: 1px solid var.$grey-10;
  border-radius: 20px;
  padding: 16px;
  cursor: pointer;

  width: $card-width;
  height: $card-height;

  &__preview {
    color: red;
  }

  &__title {
    font: var.$title;
    color: var.$black;
    margin-top: 16px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__body {
    margin-top: 8px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }

  &__icons {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 20px;
    gap: 34px;

    &-comments {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
}
</style>

