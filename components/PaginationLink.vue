<script setup lang="ts">
const emit = defineEmits(['click']);

const { active, value } = withDefaults(defineProps<{
  active?: boolean,
  value?: number,
}>(), {
  active: false
});

const linkClick = () => {
  emit("click", value)
}

</script>

<template>
  <div class="pagination_link" :class="{ active }" @click="linkClick">
    <slot>
      {{ value }}
    </slot>
  </div>
</template>

<style lang="scss">
@use "@/assets/var";

.pagination_link {
  border: 1px solid var.$grey-10;
  width: 32px;
  height: 32px;
  text-align: center;
  cursor: pointer;
  font: var.$pagination-link;
  color: var.$black;
  padding: 5px;
  border-radius: 4px;

}

.active {
  border-color: var.$primary;
  color: var.$primary;
}
</style>
