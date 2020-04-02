<template>
    <div id="body">
        <div id="texto"><p>Teléfono:</p></div>
       <div id="numeros">
            <p>+57</p>
        <input placeholder="321 959 473" >

       </div>
       
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
*{
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    margin: 0% auto; /* centrar sin aplicar flexbox */
    width: 100%;
    height: 15%;

    padding-top: 2px;
}
 

 #body{
       width: 85%;
 }
input{
   
    font-style: italic;
    width: 205px;
    height: 35px;
    letter-spacing: 2px;
    font-size: 22px;
    border: none;

    }
#texto{
    display: flex;
    width: 100%;
    margin-top: 104px;
    color:#808080;
    
    }

#numeros{
 
    display: flex;
    flex-direction: row;
    align-items: center;
        border: 0.1px #70707057 solid; 
   -webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.27);
-moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.27);
box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.27);
}
#numeros p{
    line-height: 38px;
    width: 0px;
     height: 38px;
    

    font-size: 22px;
      color:#808080;
}
#texto p{
    
     text-align: left;
     
}

input:focus{
    outline: none;
}
</style>