/* CHAT */
var LHCChatOptions = {};
LHCChatOptions.opt = {widget_height:340,widget_width:300,popup_height:520,popup_width:500};
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    var referrer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://')+1)) : '';
    var location  = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
    po.src = '//bib-chat.cc.upv.es/index.php/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true/(theme)/2?r='+referrer+'&l='+location;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
/*  FIN CHAT */

/* JQUERY EN PRIMO */

javascript:(function(){
    var script=document.createElement("SCRIPT");
    script.src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type='text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
    var checkReady=function(callback){if(window.jQuery){callback(jQuery)}
        else{window.setTimeout(function(){checkReady(callback)},100)}};
             checkReady(
                function($)
                   {$('primo-explore').find('*[parent-ctrl="ctrl"]').each(
                        function(){

                              $(document).ready(function () {
                                  $('iframe').load(function () {
                                      process();
                                  });
                                  function process() {
                                      alert('iframe has now loaded!'); // substitute for the code you wish to run.
                                  }
                              });

                          })})})();

/* FIN JQUERY EN PRIMO */
/* GOOGLE ANALITYCS */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-27943738-3', 'auto');
  ga('send', 'pageview');

/*  FIN GOOGLE ANALITYCS */



(function(){
    "use strict";
    'use strict';

/*
 * load custom view
 */
 var app = angular.module('viewCustom', ['angularLoad']);

 console.log("ANLLOSA01 vista upv personalizacion");

    app.controller('FullViewAfterController', ['angularLoad', function (angularLoad) {


        var vm = this;
        console.log(" ANLLOSA01 FullViewAfterController");
        vm.doi = vm.parentCtrl.item.pnx.addata.doi[0] || '';

        vm.$onInit = function () {
            angularLoad.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {

            });



        };
    }]);


    app.component('prmFullViewAfter', {     
        bindings: {parentCtrl: '<'},
        controller: 'FullViewAfterController',
        template: '<div class="full-view-section loc-altemtrics" flex-md="65" flex-lg="65" flex-xl="65" flex>                    <div class="layout-full-width full-view-section-content" ng-if="$ctrl.doi">                    <div class="section-header" layout="row" layout-align="center center">                    <h2 class="section-title md-title light-text">Social Popularity Statistics (AltMetrics) :</h2>                    <md-divider flex>                    </md-divider>                    </div>                    <div class="full-view-section">                    <div class="full-view-section-content">                    <div class="section-body" layout="row" layout-align="center center">                    <div class="spaced-rows" layout="column">                    <div ng-if="$ctrl.doi" class="altmetric-embed" data-badge-type="medium-donut" data-badge-details="right" data-doi="{{$ctrl.doi}}">                    </div>                    </div>                                                    </div>                                                                               </div>                                                                               </div>                                                                                                   </div>                                                                                                                       </div>'
    });





      



} ) ()