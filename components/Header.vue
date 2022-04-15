<template>
  <header class="header">
    <h2 class="header__title">Посты</h2>
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
  padding: 20px 10px;

  @media screen and (max-width: var.$tablet-width) {
    justify-content: center;
    flex-direction: column;
  }

  &__logo {
    font: var.$logo;
    color: var.$black;

    @media screen and (max-width: var.$tablet-width) {
      display: none;
    }
  }

  &__title {
    font: var.$mobile-title;
    color: var.$black;
    align-self: self-start;
    margin-bottom: 10px;

    @media screen and (min-width: var.$tablet-width) {
      display: none;
    }

  }

  @media screen and (min-width: var.$tablet-width) {}

  @media screen and (min-width: var.$desktop-width) {
    padding: 24px 0 46px 0;
  }

}
</style>
