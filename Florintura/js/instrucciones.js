alert("Bienvenido a Florintura :) ")
var respuesta;
respuesta=prompt("Desea ingresar a nuestro Whatsapp: ")
if (respuesta && respuesta.toLowerCase() === "si"){
    alert("En unos minutos ingresaras a nuestra linea de whatsapp :)")
    window.open("https://wa.me/573043519445?text=Bienvenido%20ingrese%20la%20referencia%20del%20producto%20o%20en%20que%20servicio%20esta%20interesado", "_blank");
}
else{
    alert("Sera la proxima :)")
}