<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

const { modelValue, pages } = defineProps<{
  modelValue: number,
  pages: number
}>();

const currentPage = ref(modelValue);
const pagination = toRefs(reactive(
  {
    first: [],
    before: [],
    after: [],
    last: []
  }
));

const generatePagination = () => {
  let current = currentPage.value;
  pagination.first.value = [1, 2].filter(num => num < current);
  pagination.last.value = [pages - 1, pages].filter(num => num > current);
  pagination.before.value = [current - 2, current - 1].filter(num => num > pagination.first.value[1]);
  pagination.after.value = [current + 1, current + 2].filter(num => num < pagination.last.value[0]);
}
generatePagination();

const nextPage = () => {
  let newVal = currentPage.value + 1;
  if (newVal > pages) return;
  currentPage.value = newVal;
  generatePagination();
  emit('update:modelValue', newVal);
}
const prevPage = () => {
  let newVal = currentPage.value - 1;
  if (newVal < 1) return;
  currentPage.value = newVal;
  generatePagination();
  emit('update:modelValue', newVal);
}

const updatePage = (newVal: number) => {
  currentPage.value = newVal;
  generatePagination();
  emit('update:modelValue', currentPage.value);
}
</script>

<template>
  <div class="pagination">

    <PaginationLink :class="{ disable: currentPage - 1 <= 0 }" @click="prevPage">&lt</PaginationLink>

    <PaginationLink v-for='link in pagination.first.value' :key='link' @click="updatePage" :value="link" />
    <PaginationLink class="disable" v-if="pagination.first.value[1] + 1 < pagination.before.value[0]">...
    </PaginationLink>
    <PaginationLink v-for='link in pagination.before.value' :key='link' @click="updatePage" :value="link" />

    <PaginationLink active>
      {{ currentPage }}
    </PaginationLink>

    <PaginationLink v-for='link in pagination.after.value' :key='link' @click="updatePage" :value="link" />
    <PaginationLink class="disable" v-if="pagination.after.value[1] + 1 < pagination.last.value[0]">...
    </PaginationLink>
    <PaginationLink v-for='link in pagination.last.value' :key='link' @click="updatePage" :value="link" />

    <PaginationLink :class="{ disable: currentPage + 1 > pages }" @click="nextPage">></PaginationLink>
  </div>
</template>

<style lang="scss">
@use "@/assets/var";

.pagination {
  display: flex;
  justify-content: flex-end;
  padding: 40px 0;
  gap: 8px;
}

.disable {
  color: var.$grey-10;
  cursor: text;
}
</style>
