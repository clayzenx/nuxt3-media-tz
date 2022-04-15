<script setup lang="ts">
const router = useRouter();

</script>

<template>
  <div class="mobile-header">
    <div class="mobile-header__back" @click="() => router.back()">
      &lt; Назад
    </div>
    <div class="mobile-header__title">
      Пост
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/var";

.mobile-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;

  &__back {
    font: var.$mobile-back-page;
    color: var.$primary;
    cursor: pointer;
  }

  &__title {
    width: 55%;
    justify-self: start;
    font: var.$mobile-back-page;
    color: var.$black;
  }

}
</style>
