/**
 * convierte las unidades por el usuario
 * @method convertir unidades
 * @param (string) unidad - inidades ingresadas metros, pie, pulgada, yarda
 * @param (number) - valor numerico ingresado por el usuario
 * @return Valor que retorna
 */

function calcularvalor(unidad,valor){
    let metro, pie, pulgada, yarda;
    console.log(valor)
    console.log(isNaN(valor))
    if(valor.includes(",")){
      valor = valor.replace(",",".")
    }
    if (isNaN(valor)){
        alert("valor no valido")
        metro = ""
        pie = ""
        yarda = ""
        pulgada = ""
    }else if (unidad=="unid_metro"){
        metro= valor;
        pie = 3.28 * metro;
        pulgada=39.37 * metro;
        yarda=1.0936 * metro;
    }else if(unidad=="unid_pie"){
        pie=valor;
        metro= 0.3048 * pie;
        pulgada=12 * pie;
        yarda=0.3333 * pie;
    }else if(unidad=="unid_pulgada"){
        pulgada=valor;
        metro=12 * pulgada;
        pie=0.0833333 * pulgada;
        yarda=0.0277778 * pulgada;
    }
    else if (unidad=="unid_yarda"){
        yarda= valor;
        metro=yarda * 0.9144;
        pie=3 * yarda;
        pulgada=36 * yarda;
    }
    document.getElementById("metro").value = Number(metro).toFixed(2);
    document.getElementById("pulgada").value = pulgada.round(pulgada*100/100);
    document.getElementById("pie").value = Math.round(pie*100/100) ;
    document.getElementById("yarda").value = Number(yarda).toFixed(2);
}
let convertiror= (id, valor)=> {
    let cantidaddegrado, cantidadderadianes;
    if (id=="grados"){
        cantidaddegrado=valor;
        cantidadderadianes = cantidaddegrado* Math.PI/180;
        Document.getdocumentByID("radianes").value=cantidaddegrado;
    }else{
        cantidadderadianes=valor;
        cantidaddegrado = cantidadderadianes* Math.PI/180;
        Document.getdocumentByID("grado").value=cantidadderadianes;
    }
};

let mostrar_ocultardiv = (id) =>{
    if (id=="mostrarDiv"){
        document.getElementsByName("UnDiv")[0].style.display="block";
    }
    else{
        document.getElementsByName("UnDiv")[0].style.display="none";
    }
 };