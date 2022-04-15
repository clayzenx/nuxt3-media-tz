<template>
  <div class="wrapper">
    <Header class="header" />
    <MobileHeader class="mobile-header" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/var";

.wrapper {
  max-width: var.$desktop-width;
  margin: 0 auto;
}

.header {
  display: none;

  @media screen and (min-width: var.$tablet-width) {
    display: flex;
  }
}

.mobile-header {
  display: flex;

  @media screen and (min-width: var.$tablet-width) {
    display: none;
  }

}
</style>
