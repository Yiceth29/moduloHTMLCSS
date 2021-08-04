function isfull(num1 , num2){
   

    if(num1 === "" || num2 === "" ){
        alert("por favor llena todos los campos")
        return false;
    } else {
        return true;
    }

}



function suma(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
  
    let verify = isfull(num1 , num2) //true o false
  
    let num1Convertido = parseInt(num1)
    let num2Convertido = parseInt(num2)
  
    if(verify === true){
      let resultado = num1Convertido + num2Convertido
      document.getElementById('result').innerHTML = `<h3>Resultado:</h3><p>${resultado}</p>`
      //document.getElementById('elIdDelElemntoALlamar').propiedad
    } else {
      alert("Por favor llene todos los campos")
    }}

    function multiplicar(){
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
      
        let verify = isfull(num1 , num2) //true o false
      
        let num1Convertido = parseInt(num1)
        let num2Convertido = parseInt(num2)
      
        if(verify === true){
          let resultado = num1Convertido * num2Convertido
          document.getElementById('result').innerHTML = `<h3>Resultado:</h3><p>${resultado}</p>`
          //document.getElementById('elIdDelElemntoALlamar').propiedad
        } else {
          alert("Por favor llene todos los campos")
        }}


function resta(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
  
    let verify = isfull(num1 , num2) //true o false
  
    let num1Convertido = parseInt(num1)
    let num2Convertido = parseInt(num2)
  
    if(verify === true){
      let resultado = num1Convertido - num2Convertido
      document.getElementById('result').innerHTML = `<h3>Resultado:</h3><p>${resultado}</p>`
      //document.getElementById('elIdDelElemntoALlamar').propiedad
    } else {
      alert("Por favor llene todos los campos")
    }}

    function multiplicar(){
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
      
        let verify = isfull(num1 , num2) //true o false
      
        let num1Convertido = parseInt(num1)
        let num2Convertido = parseInt(num2)
      
        if(verify === true){
          let resultado = num1Convertido * num2Convertido
          document.getElementById('result').innerHTML = `<h3>Resultado:</h3><p>${resultado}</p>`
          //document.getElementById('elIdDelElemntoALlamar').propiedad
        } else {
          alert("Por favor llene todos los campos")
        }}

        function dividir(){
            let num1 = document.getElementById("num1").value;
            let num2 = document.getElementById("num2").value;
          
            let verify = isfull(num1 , num2) //true o false
          
            let num1Convertido = parseInt(num1)
            let num2Convertido = parseInt(num2)
          
            if(verify === true){
              let resultado = num1Convertido / num2Convertido;
              let error = "no puedes dividir N manzanas entre 0 amigos"
        

              document.getElementById('result').innerHTML = `<h3>Resultado:</h3><p>${resultado === Infinity ? error : resultado}</p>`
              //document.getElementById('elIdDelElemntoALlamar').propiedad
            } else {
              alert("Por favor llene todos los campos")
            }}

          
    