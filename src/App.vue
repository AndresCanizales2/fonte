<template>
  <div id="app">
    <cabeza />
    <cuerpo />
    <iniciar />
  </div>
</template>

<script>
import cabeza from './components/cabeza';
import cuerpo from './components/body';
import iniciar from './components/iniciar';
export default {
  name: 'App',
  components: {
    cabeza , cuerpo,iniciar
  }
}
</script>

<style>
*{
  padding: 0%;
  margin: 0%;
}
</style>
 
 