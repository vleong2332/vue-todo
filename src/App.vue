<template>
  <div id="app">
    <Header title="Vue Todo" />
    <main role="main" class="md-layout">
      <section class="md-layout-item container">
        <Todo />
      </section>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
import Todo from './components/Todo'

export default {
  name: 'app',
  components: {
    Header,
    Todo,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  max-width: 960px;
  min-width: 320px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
}
</style>
