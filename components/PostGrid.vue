<template>
  <div class="grid">
    <slot />
  </div>
</template>

<style lang="scss">
.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 23px;
}
</style>
