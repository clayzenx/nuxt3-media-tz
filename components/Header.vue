<template>
  <header class="header">
    <h2 class="header__logo">Logo</h2>
    <HeaderPannel />
  </header>
</template>

<style lang="scss">
@use "@/assets/var";

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 46px 0;

  &__logo {
    font: var.$logo;
    color: var.$black;
  }
}
</style>
