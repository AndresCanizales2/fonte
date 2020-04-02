<template>
  <div id="button">
    <p>INICIAR SESIÓN</p>

    <img src="../imagenes/next.png" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /*     text-align: center; */
  padding-top: 2px;
  background: linear-gradient(#45108a, #2ddaf3);
}
 #button{
    position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   color: white;
   text-align: center;
} 
p {
  padding-right: 2rem;
  background: transparent;
  font-weight: bold;
}
</style>
