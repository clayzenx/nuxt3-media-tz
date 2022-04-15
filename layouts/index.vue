<template>
  <div class="wrapper">
    <Header />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/var";

.wrapper {
  max-width: var.$desktop-width;
  margin: 0 auto;
}
</style>
