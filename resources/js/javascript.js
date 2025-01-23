!function(t){t.fn.cardtable=function(a){var s,d=this,e={headIndex:0},n=t.extend({},e,a)
return s=a&&a.headIndex?a.headIndex:1,d.each(function(){var a=t(this)
if(!a.hasClass("stacktable")){var s=t(this).prop("class"),d=t("<div></div>")
"undefined"!=typeof n.myClass&&d.addClass(n.myClass)
var e,l,h,i,r,c=""
a.addClass("stacktable large-only"),e=a.find("caption").clone(),l=a.find("tr").eq(0),a.find("tbody tr").each(function(){h="",i="",r=t(this).prop("class"),t(this).find("td,th").each(function(a){""!==t(this).html()&&(i+='<tr class="'+r+'">',i+=l.find("td,th").eq(a).html()?'<td class="st-key">'+l.find("td,th").eq(a).html()+"</td>":'<td class="st-key"></td>',i+='<td class="st-val '+t(this).prop("class")+'">'+t(this).html()+"</td>",i+="</tr>")}),c+='<table class=" '+s+' stacktable small-only"><tbody>'+h+i+"</tbody></table>"}),a.find("tfoot tr td").each(function(a,d){""!==t.trim(t(d).text())&&(c+='<table class="'+s+' stacktable small-only"><tbody><tr><td>'+t(d).html()+"</td></tr></tbody></table>")}),d.prepend(e),d.append(t(c)),a.before(d)}})},t.fn.stacktable=function(a){var s,d=this,e={headIndex:1},n=t.extend({},e,a)
return s=a&&a.headIndex?a.headIndex:1,d.each(function(){var a=t(this).prop("class"),d=t('<table class="'+a+' stacktable small-only"><tbody></tbody></table>')
"undefined"!=typeof n.myClass&&d.addClass(n.myClass)
var e,l,h,i,r,c,o=""
e=t(this),e.addClass("stacktable large-only"),l=e.find("caption").clone(),h=e.find("tr").eq(0),e.find("tr").each(function(a){i="",r="",c=t(this).prop("class"),0===a?o+='<tr class=" '+c+' "><th class="st-head-row st-head-row-main" colspan="2">'+t(this).find("th,td").eq(s).html()+"</th></tr>":(t(this).find("td,th").each(function(a){a===s?i='<tr class="'+c+'"><th class="st-head-row" colspan="2">'+t(this).html()+"</th></tr>":""!==t(this).html()&&(r+='<tr class="'+c+'">',r+=h.find("td,th").eq(a).html()?'<td class="st-key">'+h.find("td,th").eq(a).html()+"</td>":'<td class="st-key"></td>',r+='<td class="st-val '+t(this).prop("class")+'">'+t(this).html()+"</td>",r+="</tr>")}),o+=i+r)}),d.prepend(l),d.append(t(o)),e.before(d)})},t.fn.stackcolumns=function(a){var s=this,d={},e=t.extend({},d,a)
return s.each(function(){var a=t(this),s=a.find("tr").eq(0).find("td,th").length
if(!(3>s)){var d=t('<table class="stacktable small-only"></table>')
"undefined"!=typeof e.myClass&&d.addClass(e.myClass),a.addClass("stacktable large-only")
for(var n=t("<tbody></tbody>"),l=1;s>l;)a.find("tr").each(function(a){var s=t("<tr></tr>")
0===a&&s.addClass("st-head-row st-head-row-main")
var d=t(this).find("td,th").eq(0).clone().addClass("st-key"),e=l
if(t(this).find("*[colspan]").length){var h=0
t(this).find("td,th").each(function(){var a=t(this).attr("colspan")
return a?(a=parseInt(a,10),e-=a-1,h+a>l&&(e+=h+a-l-1),h+=a):h++,h>l?!1:void 0})}var i=t(this).find("td,th").eq(e).clone().addClass("st-val").removeAttr("colspan")
s.append(d,i),n.append(s)}),++l
d.append(t(n)),a.before(d)}})}}(jQuery)


var ci = $('.slider');
var olv = $('.olvidar');
var reg = $('.regresar');
var cer = $('.cerrar');

$( document ).ready(function(){
	$(".dropdown-button").dropdown();
	$('.fixed-action-btn').openFAB();
	$('.fixed-action-btn').closeFAB();
	$('select').material_select();
  	$('#textarea1').trigger('autoresize');
  	$('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15 // Creates a dropdown of 15 years to control year
	  });
  $('.button-collapse').sideNav();
})

$(document).keyup(function (e) {
    if($(".btnToastAceptar").length>0 && (e.keyCode == 13)){
        $(".btnToastAceptar").first().click();
    }else if ($(".frmFiltros").length>0 && (e.keyCode == 13)) {
        if($(".frmFiltros").find("button#btnBuscar").length>0){
            $(".frmFiltros").find("button#btnBuscar").first().click();
        }
    }else if ($("input").is(":focus") && (e.keyCode == 13)) {
        console.log("EVENTO ENTER EN INPUT");
    }
});

olv.on('click',function(){
	ci.css('left','-100%');
})

reg.on('click',function(){
	ci.css('left','0');
})

cer.on('click',function(){
	ci.css('left','0');
})


$(document).on('keydown',function(e){
	 switch (e.which) {
	 	case 27:
	 		window.location="#mod";
	 		break;
	 }
});

$('#res').stacktable();
$('.resp').stacktable();

function alerta(texto,tiempo,modo,funcion){
    if(tiempo==null){
        tiempo=((texto.length)/8)*1000;
    }
    if(modo==null){
        modo="";
    }
    if(funcion==null){
        funcion = function(){};
    }
    Materialize.toast(texto, tiempo,modo,funcion);
//    alert(texto);
}

function alert(texto){
    alerta(texto);
}
var loader = '<div class="preloader-wrapper small active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';

function comprobarAjaxPendientes(ejecutar){
    setTimeout(function (){
        if(jQuery.active>0){
            comprobarAjaxPendientes(ejecutar);
        }else{
            eval(ejecutar);
        }
    },1000);
}

function selectAJAX_JSON(url,parametros,label,propID,propOption,div,name,id,seleccionado,funcion,todos,ejecutar,bloquear){
    if(seleccionado==null || seleccionado.trim().length==0){
        seleccionado = "0";
    }
    $("#"+div).empty().html('<div class="center">'+loader+'<input type="hidden" name="'+name+'" value="'+seleccionado+'"></div>');
    var optionTodos = "";
    if(todos==null){
        todos=true;
        optionTodos = '(TODOS)';
    }else{
        if(typeof(todos)=="string"){
            optionTodos = todos;
            todos=true;
        }else{
            optionTodos = '(TODOS)';
        }
    }
    //console.log(bloquear);
    if(bloquear!=null){
        $(bloquear).each(function (key,val){
            //console.log(val);
            $("#"+val).hide();
        });
    }
    $.ajax({
        async:true,    
        cache:false,
        type: 'GET',   
        url: "/Selgestiun/"+url,
        data: parametros, 
        success:  function(a){
            a = JSON.parse(a);
            //console.log(a);
            var html = '<select name="'+name+'" id="'+id+'"  onchange="'+funcion+'">';
            if(todos){
                html = html + '<option value="0">'+optionTodos+'</option>';
            }
            $(a).each(function (key,val){
                //html = html + '<option value="'+val.Id+'" ';
                eval("html = html + '<option value=\"'+val."+propID+"+'\" ';");
                eval("if(seleccionado==val."+propID+"){html = html + ' selected=\"\"';}");
                //html = html + '>'+val.Abreviatura+'</option>';
                eval("html = html + '>'+val."+propOption+"+'</option>';");
            });
            html = html + '</select><label>'+label+'</label>';
            $("#"+div).empty().html(html);
            $("select").material_select();
            if(ejecutar!=null){
                eval(ejecutar);
            }
            if(bloquear!=null){
                var mostrar='';
                $(bloquear).each(function (key,val){
                    mostrar = mostrar + '$("#'+val+'").show();';
                });
                comprobarAjaxPendientes(mostrar);
            }
        },
        beforeSend:function(){},
        error:function(objXMLHttpRequest){}
    });
}

function autocompleteAJAX_JSON(url,parametros,label,propID,propOption,div,name,id,funcionClick,funcionBlur,claseEspecial,ejecutar,bloquear){
    $("#"+div).empty().html('<div class="center">'+loader+'</div>');
    if(bloquear!=null){
        $(bloquear).each(function (key,val){
            //console.log(val);
            $("#"+val).hide();
        });
    }
    $.ajax({
        async:true,    
        cache:false,
        type: 'GET',   
        url: "/Selgestiun/"+url,
        data: parametros, 
        success:  function(a){
            a = JSON.parse(a);
            //console.log(a);
            var html = '<input type="text" autocomplete="off" class="autocomplete" name="'+name+'" id="'+id+'" onblur="'+funcionBlur+'" last_selected=""><label for="'+id+'">'+label+'</label>';
            $("#"+div).empty().html(html);
            var datos = '';
            var js = 'var datos = {';
            $(a).each(function (key,val){
                var dataMostrar = '';
                var js2 = 'var dataMostrar = ';
                $(propID).each(function (key2,val2){
                    js2 = js2 + "val."+val2+"+'|'+";
                });
                js2 = js2 + "'';";
                eval(js2);
                dataMostrar = dataMostrar.substring(0, dataMostrar.length - 1);
                eval("js = js + '\"'+val."+propOption+"+'\": \"'+dataMostrar+'\",';");
            });
            js = js + '};';
            eval(js);
            $("#"+id).autocomplete({
                    data: datos
                },funcionClick,claseEspecial);
            if(ejecutar!=null){
                eval(ejecutar);
            }
            if(bloquear!=null){
                var mostrar='';
                $(bloquear).each(function (key,val){
                    mostrar = mostrar + '$("#'+val+'").show();';
                });
                comprobarAjaxPendientes(mostrar);
            }
        },
        beforeSend:function(){},
        error:function(objXMLHttpRequest){}
    });
}

function limpiarAutocomplete(inptTxt,inptHdd,spanClear){
    $("#"+inptTxt).val("");
    $("#"+inptTxt).attr("last_selected","");
    $("#"+inptHdd).val("0");
    $(spanClear).parent().removeClass("select-wrapper");
    $("#"+inptTxt).prop("readonly",false);
    $(spanClear).remove();
    $("#"+inptTxt).focus();
}

function cargarTabla_JSON(formulario,tBody,divPaginacion,href){
    $("#"+tBody).empty().html('<tr><td colspan="100"><div class="center">'+loader+'</div></td></tr>');
    $("#"+divPaginacion).empty();
    var url = $("#"+formulario).attr("action");
    var data = $("#"+formulario).serialize();
    if(href!=null){
        url = href;
        data = "";
    }
    $.ajax({
        async:true,    
        cache:false,
        type: "GET",   
        url: url,
        data: data, 
        success:  function(a){
            if(a!=null){
                a = JSON.parse(a);
                var html = '';
                var tabla = a.tabla;
                var npag = a.npag;
                var href = a.href;
                var clases = a.clases;
                var styles = a.styles;
                var Npaginas = Number(a.Npaginas);
                var Npaginacion = Number(a.Npaginacion);
                var Nlateral = (Npaginacion%2==0)?(Npaginacion/2):((Npaginacion-1)/2);
                if(tabla.length>0){
                    $(tabla).each(function (key,val){
                        html = html + '<tr ';
                        if(clases!=null){
                            html = html + clases[key];
                        }else if(styles!=null){
                            html = html + ' style="'+styles[key]+'"';
                        }
                        html = html + '>';
                        $(val).each(function (key2,val2){
                            html = html + '<td>'+val2+'</td>';
                        });
                        html = html + '</tr>';
                    });
                    $("#"+tBody).html(html);
                    html = '';
                    html = html + '<div class="col s12">';
                    html = html + '    <ul class="pagination center">';
                    html = html + '      <li>';
                    if(npag>1){
                        html = html + '<a href="#" onclick="cargarTabla_JSON(\'\',\''+tBody+'\',\''+divPaginacion+'\',\''+href+'npag='+(npag-1).toString()+'\')"><i class="material-icons">chevron_left</i></a>';
                    }
                    html = html + '      </li>';
                    var begin = 0;
                    var end = 0;
                    if(Npaginas<=Npaginacion){ begin = 1;
                    }else{ if(npag-Nlateral<1){ begin = 1;
                    }else{ if(npag-Nlateral>Npaginas-Npaginacion+1){ begin = Npaginas-Npaginacion+1;
                    }else{ begin = npag-Nlateral;}}}
                    if(Npaginas<=Npaginacion){ end = Npaginas;
                    }else{ if(npag+Nlateral<Npaginacion){ end = Npaginacion;
                    }else{ if(npag+Nlateral>Npaginas){ end = Npaginas;
                    }else{ end = npag+Nlateral;}}}
                    for (var i=begin; i<=end; i++){
                        html = html + '<li  onclick="cargarTabla_JSON(\'\',\''+tBody+'\',\''+divPaginacion+'\',\''+href+'npag='+i+'\')" class="';
                        if(npag == i){
                            html = html + 'active';
                        }else{
                            html = html + 'waves-effect';
                        }
                        html = html + '"><a href="#" onclick="cargarTabla_JSON(\'\',\''+tBody+'\',\''+divPaginacion+'\',\''+href+'npag='+i+'\')">'+i+'</a></li>';
                    }
                    html = html + '      <li>';
                    if(npag < Npaginas){
                        html = html + '<a href="#" onclick="cargarTabla_JSON(\'\',\''+tBody+'\',\''+divPaginacion+'\',\''+href+'npag='+(npag + 1).toString()+'\')"><i class="material-icons">chevron_right</i></a>';
                    }
                    html = html + '    </ul>';
                    html = html + '</div>';
                    $("#"+divPaginacion).html(html);
                }else{
                    $("#"+tBody).empty().html('<tr><td colspan="100">No se encontro ninguna coincidencia</td></tr>');
                }
                $('#res').stacktable();
                $('.resp').stacktable();
                $('.resp').first().remove();
                $('.resp').first().remove();
            }else{
                window.location='/Selgestiun/';
            }
        },
        beforeSend:function(){},
        error:function(objXMLHttpRequest){}
    });
}
