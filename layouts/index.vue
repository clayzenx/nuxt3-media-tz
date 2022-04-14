<template>
  <div class="wrapper">
    <Header />
    <slot />
  </div>
</template>

<style lang="scss">
@use "@/assets/var";

.wrapper {
  max-width: var.$desktop-width;
  margin: 0 auto;
  padding: 10px;

  @media screen and (min-width: var.$tablet-width) {}

  @media screen and (min-width: var.$desktop-width) {
    padding: 0px;
  }
}
</style>
