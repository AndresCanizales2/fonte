<template>
    <div id="puestos">
        <div> 
            <img id="svg" src="../../imagenes/aa2Recurso 2.svg" style="width: 400px;" alt="Driver">

            <div class="placa">
                <span class="span1">Placa</span>
                <span class="span2">VAG-74E</span></div>
            <div class="sillas">

                <div class="filas">


                    <button class="puesto1">1A</button>
                    <button class="puesto1">2A</button>

                </div>



                <div class="filas">


                    <button class="puesto1">3B</button>
                    <button class="puesto1">4B</button>

                </div>



            </div>
        </div>



    </div>
</template>

<script>
export default {

}
</script>


<style>
* {
    height: 100%;
    width: 100%;
}
#svg{
    background: none;
  
}

</style>
<style scoped>@import url('https://fonts.googleapis.com/css?family=Manrope:200,300,400,500,600,700,800&display=swap');

* {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("../../imagenes/a3f668f964698bd50ebb5f5058774977.svg");
  

}

.placa span {
    color: #ffffff;
    background: none;
    font-family: 'Manrope', sans-serif;

}

.span1 {

    font-weight: 200;
    font-size: 40px;
    z-index: 1;

}

.span2 {
    font-weight: 600;
    font-size: 40px;
    z-index: 1;
}

.placa {
    padding-left: 20px;
    width: 17%;
    height: 6%;
    display: flex;
    flex-direction: row;
    z-index: 1;
    left: 10%;
    top: 5%;
    position: absolute;
    background: none;
    
}

.filas {

    background: none;
    display: flex;
    flex-direction: row;
}

#puestos img {
    display: inline-block;
    position: relative;
}

.sillas {
    width: 12%;
    height: 20%;
    display: flex;
    flex-direction: column;
    z-index: 1;
    top: 45%;
    left: 34%;
    position: absolute;
    background: none;


}

.puesto1 {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    border-radius: 104px 104px 33.94px 33.94px;
    background: rgba(255, 255, 255, 0.34);
    margin: 5px;
    border: none;
    outline: none;
    color: white;
}

.puesto1:active {

    background: rgba(255, 0, 0, 0.34);

}

.imagen{
    widows: 40%;
}
</style>