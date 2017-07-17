
(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/

    console.log("vista upv personalizacion");
/*
   app.controller('FullViewAfterController', ['angularLoad', function (angularLoad) {
        var vm = this;
       console.log("vista upv FullViewAfterController");
        
        
    }]);


app.component('prmFullViewAfter', {
        bindings: {parentCtrl: '<'},
        controller: 'FullViewAfterController',
        template: '<div >                     </div>'
    });
*/
/*
/* chat */

function chat() {}
				var LHCChatOptions = {};
				LHCChatOptions.opt = {widget_height:340,widget_width:300,popup_height:520,popup_width:500};
				(function() {
				var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
				var referrer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://')+1)) : '';
				var location  = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
				po.src = '//bib-chat.cc.upv.es/index.php/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true?r='+referrer+'&l='+location;
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
				})();

}

/*chat(); */
/*
function marca_enlace() {


	var nextLine =document.querySelectorAll('.nextLine');


	nextLine.each(
					function() {
						var $signatura = $(this);
						var $texto = $(this).text();
						novacio=true;
						if ($texto.trim() =="") {novacio=false} 
						
						//  si la biblioteca es la b y la sala es de otra biblioteca desactivamos el plano
						var posicionCadena="Additional location information: ";
						console.log("BIBUPVLOG"+texto);

                        

						if (  $texto.charAt(0)!="V" && $texto.charAt(0)!="D"  && novacio  ) {
						$signatura
								.html("<a   id='enlacePlano' TARGET='_blank' onclick='abreVentana();' href='http://polibuscador.upv.es/primo_library/libweb/planos/V2.0/visorPlanos.html?signatura=' >"
										+ $texto
										+ " <img src='http://polibuscador.upv.es/primo_library/libweb/planos/V2.0/imagenes/verPlano.png'></a>");
						var referenciaRAiz = $(this).children("a").attr("href");
						$(this).children("a").attr("href",
								referenciaRAiz + $texto);
						}
					});

}
*/

/*  marca_enlace();  */


        






})();

   
