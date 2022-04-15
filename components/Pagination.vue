<script setup lang="ts">
const emit = defineEmits(['update:page'])

let { page, pages } = defineProps<{
  page: number,
  pages: number
}>();
let current = ref(page);

const pagination = toRefs(reactive(
  {
    first: [],
    before: [],
    after: [],
    last: []
  }
));

const generatePagination = () => {
  const cur = current.value
  pagination.first.value = [1, 2].filter(num => num < cur);
  pagination.last.value = [pages - 1, pages].filter(num => num > cur);
  pagination.before.value = [cur - 2, cur - 1].filter(num => num > pagination.first.value[1]);
  pagination.after.value = [cur + 1, cur + 2].filter(num => num < pagination.last.value[0]);

}
generatePagination();

const nextPage = () => {
  if (current.value + 1 > pages) return;
  current.value++;
  emit('update:page', current.value);
  generatePagination();
}
const prevPage = () => {
  if (current.value - 1 < 1) return;
  current.value--;
  emit('update:page', current.value);
  generatePagination();
}

const updatePage = (page: number) => {
  current.value = page;
  emit('update:page', current.value);
  generatePagination();
}
</script>

<template>
  <div class="pagination">
    <PaginationLink :class="{ disable: page - 1 <= 0 }" @click="prevPage">&lt</PaginationLink>

    <PaginationLink v-for='link in pagination.first.value' :key='link' @click="updatePage" :value="link" />
    <PaginationLink class="disable" v-if="pagination.first.value[1] + 1 < pagination.before.value[0]">...
    </PaginationLink>
    <PaginationLink v-for='link in pagination.before.value' :key='link' @click="updatePage" :value="link" />

    <PaginationLink active>
      {{ page }}
    </PaginationLink>

    <PaginationLink v-for='link in pagination.after.value' :key='link' @click="updatePage" :value="link" />
    <PaginationLink class="disable" v-if="pagination.after.value[1] + 1 < pagination.last.value[0]">...
    </PaginationLink>
    <PaginationLink v-for='link in pagination.last.value' :key='link' @click="updatePage" :value="link" />

    <PaginationLink :class="{ disable: page + 1 > pages }" @click="nextPage">></PaginationLink>
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
