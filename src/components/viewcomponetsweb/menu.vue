<template>
  <div id="menu">

      <router-link  class="un" tag="div"  to="/siguiente" >
        <div class="texto"> Inicio</div>
     
      </router-link>
      
     <router-link  class="un" tag="div" to="/siguiente" >
       <div class="texto"> Ayuda</div>
    
     </router-link>
     <router-link  class="un" tag="div" to="/siguiente" >
      <div class="texto"> Cerrar sesión</div>
    
     </router-link>

</div>

</template>

<script>
export default {

}
</script>

<style>
*{
    height: 100%;
    width: 100%
}
</style>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Manrope:200,300,400,500,600,700,800&display=swap');


#menu{
opacity: 0.84;
background-color: #633a82;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

font-family: 'Manrope', sans-serif;
font-weight: 300;
letter-spacing: 1px;

text-decoration: none;

}
.un{
  color:rgba(255, 255, 255, 0.582);
    cursor:pointer;
    padding: 10px;
    width: 100%;
    height: 3%;
    font-size: 18px;
    
}
.texto{
     padding-left: 10%;
}

.un:after {
  content: '';
  width: 0px;
  height: 3px;
display: flex;
  background: rgb(255, 255, 255);
  transition: 300ms;
}

.un:hover:after , .texto:hover{
 
  width: 100%;
   color:rgb(255, 255, 255); 
}
</style>

