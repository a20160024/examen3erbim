var nom=prompt("Su nombre?");
var preg1=prompt("¿En qué departamento se encuentra el lago Titicaca?\nA:Tacna\nB:Puno\nC:Cusco")
if (preg1=="B"){
    preg1=1
}
else{
    preg1=0
}
var preg2=prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA:Lima e Ica\nB:Arequipa y Tacna\nC:Piura y Tumbes")
if (preg2=="C"){
    preg2=1
}
else{
    preg2=0
}
var preg3=prompt("Plato típico de la Selva peruana\nA:Tacacho con cecina\nB:Arroz con pollo\nC:Lomo saltado")
if (preg3=="A"){
    preg3=1
}
else{
    preg3=0
}
var total=preg1+preg2+preg3
document.write("Tienes",total)
if (total>2){
    document.write("Lo has echo bien ",nom)
    }
else{
    document.write("Puedes hacerlo mejor",nom)
    }
alert("Bienvenido")