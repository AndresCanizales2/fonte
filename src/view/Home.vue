<template>
  <div id="app">
    

    <burger class="burger" />
    <auto class="auto"/>
    <seccion  class="seccion" />
 
  <router-view />
  </div>
  
</template>

<script>

import burger from '../components/viewcomponetsweb/menu';
import auto from '../components/viewcomponetsweb/auto';
import seccion from '../components/viewcomponetsweb/seccion'



export default {
  name: 'Home',
  components: {
    burger, auto,seccion
  }
}


</script>

<style>
*{

}
#app{
  display: flex;
  flex-direction: row;
}


/*otros */
.burger{
 width: 10%;
-webkit-box-shadow: 23px 9px 62px -30px rgba(0,0,0,0.75);
-moz-box-shadow: 23px 9px 62px -30px rgba(0,0,0,0.75);
box-shadow: 23px 9px 62px -30px rgba(0,0,0,0.75);
}
.auto{
  width: 60%;
  
}
.seccion{
  width: 30%;
-webkit-box-shadow: -28px 9px 62px -30px rgba(0,0,0,0.75);
-moz-box-shadow: -28px 9px 62px -30px rgba(0,0,0,0.75);
box-shadow: -28px 9px 62px -30px rgba(0,0,0,0.75);

}
</style>
 