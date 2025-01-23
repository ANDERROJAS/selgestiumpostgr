function AlertaEliminar(contenido,url){
    /*document.getElementById('contenidoalertamodal').innerHTML = contenido;
    document.getElementById('urlalertamodal').href = url;*/
    alertaToast("ADVERTENCIA",contenido,"window.location='"+url+"';");
}

function AlertaEliminar2(contenido,funcion){
    alertaToast("ADVERTENCIA",contenido,funcion);
}

function AlertaForm(formulario,contenido,fnValidacion){
    /*document.getElementById('urlalertamodal').onclick = function (){
        formulario.submit();
    };*/
    if(fnValidacion==null || fnValidacion.trim().length==0){
        fnValidacion = "true";
    }
    alertaToast("ADVERTENCIA",contenido,"if("+fnValidacion+"){document.getElementById('"+formulario+"').submit();}");
}

function AlertaFuncion(contenido,funcion){
    /*document.getElementById('contenidoalertamodal').innerHTML = contenido;
    document.getElementById('urlalertamodal').onclick = function (){
        funcion(id);
    };
    document.getElementById('urlalertamodal').href = "#";*/
    alertaToast("ADVERTENCIA",contenido,funcion);
}

var timeToast = 600000;

function cerrarToast(toast){
    $(toast).fadeOut(1000);
    setTimeout(function (){ $(toast).remove();},500);
    //$(toast).remove();
    /*$(".toast").each(function(key,val){
        $(val).remove();
    });*/
    //$('#toast-container').fadeOut();
}

function mensajeToast(titulo,contenido){
    //console.log("MENSAJE TOAST");
    contenido = decodeURIComponent(contenido);
    Materialize.toast('<div class="" style="width:100%;"><div class="row header" style="background-color:#f7f7f7;margin: 0px;padding: 15px;"><h4 class="center black-text" style="margin: 0px;">'+titulo+'</h4></div><div class="white row black-text" style="padding: 15px;margin: 0px;"><div class="col s12"><p style="word-break: break-word">'+contenido+'</p></div><div class="col s12"><div class="col s12"><div class="boton center"><button class="btn btn-large btnToastAceptar" onclick="cerrarToast($(this).parent().parent().parent().parent().parent().parent());" style="margin:0px;">ACEPTAR</button></div></div></div></div></div>', timeToast);
    $(".toast").each(function(key,val){
        $(val).css("padding","0px");
        $(val).css("width","100%");
        $(val).addClass("z-depth-5");
    });
    $("#toast-container").css("display","block");
    $("#toast-container").removeClass("z-depth-5");
    $("#toast-container").addClass("z-depth-5");
}

function alertaToast(titulo,contenido,funcion){
    //console.log("ALERTA TOAST");
    contenido = decodeURIComponent(contenido);
    Materialize.toast('<div class="" style="width:100%;"><div class="row header" style="background-color:#f7f7f7;margin: 0px;padding: 15px;"><h4 class="center black-text" style="margin: 0px;">'+titulo+'</h4></div><div class="white row black-text" style="padding: 15px;margin: 0px;"><div class="col s12"><p style="word-break: break-word">'+contenido+'</p></div><div class="col s12"><div class="col s6"><div class="boton center"><button class="btn btn-large btnToastAceptar" onclick="$(this).parent().parent().parent().parent().parent().parent().remove();'+funcion+'" style="margin:0px;">ACEPTAR</button></div></div><div class="col s6"><div class="boton center"><button class="btn btn-large red" onclick="cerrarToast($(this).parent().parent().parent().parent().parent().parent());" style="margin:0px;">CANCELAR</button></div></div></div></div></div>', timeToast);
    $(".toast").each(function(key,val){
        $(val).css("padding","0px");
        $(val).css("width","100%");
        $(val).addClass("z-depth-5");
    });
    $("#toast-container").css("display","block");
    $("#toast-container").removeClass("z-depth-5");
    $("#toast-container").addClass("z-depth-5");
}
