/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function calcularvalor(unidad,valor){
    let metro, pie, pulgada, yarda;
    console.log(valor)
    console.log(isNaN(valor))
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
    document.getElementById("metro").value = metro;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("yarda").value = yarda;
    document.getElementById("pie").value = pie;
}