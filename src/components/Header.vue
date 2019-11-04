<template>
  <header role="banner">
    <md-toolbar>
      <img class="header__logo" alt="Vue logo" src="../assets/logo.png" />
      <h1 class="md-title">{{ title }}</h1>
    </md-toolbar>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'App Title',
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
}
.header__logo {
  width: 24px;
  height: 24px;
}
</style>
