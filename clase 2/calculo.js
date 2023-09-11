/**capturar los textos */

const depositotexto=document.getElementById(`depositoActual`),
      retirotexto=document.getElementById(`retiroActual`),
      balancetexto=document.getElementById(`balanceActual`),

      /*capturar los input*/

    inputdeposito=document.getElementById(`depositoInput`),
    inputretiro=document.getElementById(`retiroInput`),

    /*capturar botones*/

    btndeposito=document.getElementById(`calcularDeposito`),
    btnretiro=document.getElementById(`calcularRetiro`)

    /*agregar evento deposito*/

    btndeposito.addEventListener(`click`,(event)=>{
        const valordeposito=inputdeposito.value;

        const totaldeposito=Number(depositotexto.innerText)+Number(valordeposito)
        const totalbalance=Number(balancetexto.innerText)+Number(valordeposito)
        depositotexto.innerHTML=totaldeposito
        balancetexto.innerHTML=totalbalance

        inputdeposito.value=""

    })

    /*evento retiro*/

    btnretiro.addEventListener(`click`,(event)=>{
        const valorretiro=inputretiro.value;
        if(valorretiro==0){
            alert("no tengo nada que retirar")
            return
        }
        if(Number(valorretiro)>Number(balancetexto.innerText)){
            alert("no hay dinero suficiente")
        }
        alert("retiro exitoso")


    })

    

