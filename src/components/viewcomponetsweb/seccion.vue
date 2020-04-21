<template>
  <div>
      <div class="menusuperior">
          <!-- <div class="icono"><img src="../../imagenes/notifications-bell-button_icon-icons.com_72648.svg"  style="width: 20px;" /> </div>
             -->

          <div class="icono">
              <img src="../../imagenes/notifications-bell-button_icon-icons.com_72648.svg">
          </div>


          <div class="foto" id="fotoperfil">
              Oscar Smit
              <img src="https://www.thispersondoesnotexist.com/image" />
          </div>
      </div>

      <div class="segundomenu">
          <div class="subtitulo">Pasajeros </div>

          <div class="user">
              <div class="foto" id="fotospasajeros">
                  <img src="https://www.thispersondoesnotexist.com/image" />
              </div>
              <div class="nombreyrol">
                  <div class="nombre">Cristian Canizales</div>
                  <div class="rol">Conductor</div>
              </div>
          </div>
          <div class="user">
              <div class="foto" id="fotospasajeros">
                  <img src="https://www.thispersondoesnotexist.com/image" />
              </div>
              <div class="nombreyrol">
                  <div class="nombre">Sergio rubiano</div>
                  <div class="rol">Pasajero</div>
              </div>
          </div>
          <div class="user">
              <div class="foto" id="fotospasajeros">
                  <img src="https://www.thispersondoesnotexist.com/image" />
              </div>
              <div class="nombreyrol">
                  <div class="nombre">Juan camilo Vega</div>
                  <div class="rol">Psajero</div>
              </div>
          </div>
     

      </div>


      <div class="tiempo">
         <h3>Tiempo estimado de llegada</h3> <br/>
           <span class="duracion">05:50 </span> <h1 class="minutos">minutos </h1> 
      </div>
  </div>
</template>

<script>
export default {

}
</script>





<style scoped>
@import url('https://fonts.googleapis.com/css?family=Baloo+Tamma+2:400,800|Manrope:200,300,400,500,600,700,800|Noto+Sans+KR|Noto+Sans:400,400i,700,700i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');
*{
    
    background-color: #ffffff;
  
}

.menusuperior{
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 20px ;

    
}


.icono{
    width: 10%;

}

.icono img{
    width: 30px;
    padding-left: 20px;
}

.foto   {
    align-items: center;
    align-items: center;
    padding:    0 20px 0  20px ;
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
}
#fotoperfil{
    display: flex;
    justify-content: flex-end;
}
.foto img{
    width: 80px;
    height: 83px;
    border-radius: 100px;
    margin-left: 20px ;
    border: solid 2px #45108a;
}








.segundomenu{
    display: flex;
    flex-direction: column;
    height: auto;

    
}
.subtitulo{
    width: auto;
     height: auto;
    font-family: 'Noto Sans', sans-serif;
     font-weight: 600;
     font-size: 25px;
     padding-left: 20px;
     padding-top:20px ;
}
.user{
    display: flex;
    flex-direction: row;
   
    display: flex;
    font-family: 'Noto Sans', sans-serif;
   align-items: center;
   padding-top:17px;
}


.nombreyrol{
    display: flex;
    flex-direction: column;
    
    
  
}

.rol, .nombre{

 height: auto;

}

.rol{
    font-size: 13px;
    color: rgba(0, 0, 0, 0.479);
}
#fotospasajeros{
    width: auto;
    
}


.tiempo{
    padding-top:  30px;
    height: auto;
    text-align: center;
}


.minutos{
    font-family: 'Noto Sans KR', sans-serif;
   
}


.duracion{
font-family: 'Noto Sans KR', sans-serif;
font-size: 30px;

}


h3{
     font-family: 'Noto Sans', sans-serif;
     font-weight:200;
}
</style>

