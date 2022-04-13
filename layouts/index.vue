<template>
  <div class="wrapper">
    <Header />
    <slot />
  </div>
</template>

<style lang="scss">
$wrapper-width: 973px;

.wrapper {
  width: $wrapper-width;
  margin: 0 auto;
}
</style>
