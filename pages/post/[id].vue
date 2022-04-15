<script setup lang="ts">
const route = useRoute();
const post = ref(null);
const comments = ref(null);
const editMode = ref(false);
let p = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
post.value = p.data;
let c = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}/comments`);
comments.value = c.data;

let tmp = null;

const changeField = (e: Event, field: string) => {
  post.value.value[field] = (e.target as HTMLElement).innerText;
}

const saveChange = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${post.value.value.id}`,
    {
      method: 'PATCH', body: JSON.stringify({
        body: post.value.value.body,
        title: post.value.value.title
      })
    })
    .catch(console.error)
  editMode.value = false;
}

const reset = () => {
  post.value.value = tmp;
  editMode.value = false;
}

const edit = () => {
  tmp = Object.assign({}, post.value.value);
  editMode.value = true;
}
</script>

<template>
  <NuxtLayout name="post">
    <div class="post">
      <div class="post__image"></div>
      <h3 class="post__title" :contenteditable="editMode" @blur="(e) => changeField(e, 'title')">
        {{ post.value.title }}
      </h3>
      <hr class="post__delimeter">
      <p class="post__body" :contenteditable="editMode" @blur="(e) => changeField(e, 'body')">
        {{ post.value.body }}
      </p>
      <div v-if="editMode" class="post__actions">
        <Button type="primary" @click="saveChange">Сохранить изменения</Button>
        <Button type="secondary" @click="reset">Отменить</Button>
      </div>
      <span class="post__edit" v-else @click="edit">
        <img src="/pen-primary.svg" alt="pen">
        <p>Редактировать текст</p>
      </span>
      <h3 class="post__comments-title">
        Комментарии
      </h3>
      <div class="post__comments">
        <Comment v-for=" comment in comments.value" :comment="comment" />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use "@/assets/var";

.post {

  &__image {
    width: 100%;
    height: 280px;
    background-color: var.$post-image-bg;
    background-image: url('/post-image-mobile.svg');
    background-repeat: no-repeat;
    background-position: 100% 0%;
    margin-top: 0px;

    @media screen and (min-width: var.$tablet-width) {
      background-image: url('/post-image.svg');
      background-repeat: no-repeat;
      background-position: 50%;
      height: 285px;
      margin-top: 46px;
    }

    @media screen and (min-width: var.$tablet-width) {
      margin-top: 0;
    }
  }

  &__title {
    font: var.$title;
    color: var.$black;
    padding: 10px 15px;

    &::first-letter {
      text-transform: uppercase;
    }

    @media screen and (min-width: var.$tablet-width) {
      padding: 10px 0;
    }
  }

  &__delimeter {
    border: none;
    border-bottom: 1px solid var.$grey-10;
    margin: 10px 15px;

    @media screen and (min-width: var.$tablet-width) {
      margin: 20px 0;
    }
  }

  &__body {
    font: var.$text;
    padding: 10px 15px;

    @media screen and (min-width: var.$tablet-width) {
      padding: 10px 0;
    }
  }

  &__edit {
    color: var.$primary;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;
    font: var.$header-action;
    padding: 10px 15px;

    @media screen and (min-width: var.$tablet-width) {
      padding: 10px 0;
    }

  }

  &__actions {
    padding: 10px 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    @media screen and (min-width: var.$tablet-width) {
      padding: 10px 0;
    }
  }

  &__comments-title {
    font: var.$sub-title;
    color: var.$black;
    padding: 10px 15px;

    @media screen and (min-width: var.$tablet-width) {
      padding: 10px 0;
    }

  }

  &__comments {
    padding: 38px 15px;
    display: flex;
    flex-direction: column;
    gap: 36px;

    @media screen and (min-width: var.$tablet-width) {
      padding: 38px 0;
    }


  }
}
</style>
