<script setup lang="ts">
const { type } = defineProps<{
  type: 'primary' | 'secondary'
}>();

</script>

<template>
  <div class="button" :class="type">
    <slot />
  </div>
</template>

<style lang='scss'>
@use "@/assets/var";

.button {
  border-radius: 5px;
  font: var.$button-text;
  width: 325px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.primary {
  background-color: var.$primary;
  color: var.$white;
}

.secondary {
  border: 1px solid var.$primary;
  color: var.$primary;
}
</style>
