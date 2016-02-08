;window.Modernizr=function(a,b,c){function u(a){j.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e}),m.rgba=function(){return u("background-color:rgba(150,255,150,.5)"),x(j.backgroundColor,"rgba")};for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};var miEntryPage={renderFunction:function(){var $this=$(this);if($('.dealsLightPagination').length>0){var itemLenth,itemWidth,leftValue,itemVisible;$('.dealsLightPagination').each(function(){var item=$(this).parents('.deals-container').find('.deals-component-wrapper');itemLenth=item.length;itemWidth=item.parents('.deals-container').find('.deals-container-data').outerWidth();leftValue=itemWidth*(-1);itemVisible=1;$(this).parents('.deals-container').find('.deals-light-pagination-active').text(itemVisible);$(this).parents('.deals-container').find('.deals-light-pagination-last').text(itemLenth);$(item).each(function(){$(this).width(itemWidth);$(this).parents('.deals-container').find('.deals-component-list').width(itemWidth*itemLenth);});});$('.deals-light-pagination-button').click(function(){var dealsLightPaginationNextClick=false;var dealsLightPaginationPrevClick=false;if($(this).hasClass("deals-light-pagination-next")){dealsLightPaginationNextClick=true;}
if($(this).hasClass("deals-light-pagination-prev")){dealsLightPaginationPrevClick=true;}
if(dealsLightPaginationNextClick)
{if(leftValue=="0")
{leftValue=itemWidth*(-1);}}
if(dealsLightPaginationPrevClick)
{if(itemVisible=="1")
{leftValue=leftValue-itemWidth;}
else
{leftValue=leftValue+itemWidth;$(this).parents('.deals-container').find('.deals-light-pagination-next').show();}}
$(this).parents('.deals-container').find('.deals-component-list').animate({left:leftValue},200,function(){});if(dealsLightPaginationNextClick)
{itemVisible=itemVisible+1;if(itemLenth!=itemVisible)
{leftValue=leftValue-itemWidth;}
if(itemVisible==itemLenth)
{$(this).parents('.deals-container').find('.deals-light-pagination-next').hide();if(itemVisible==2)
{$(this).parents('.deals-container').find('.deals-light-pagination-prev').show();}}
else
{$(this).parents('.deals-container').find('.deals-light-pagination-prev').show();}}
if(dealsLightPaginationPrevClick)
{itemVisible=itemVisible-1;if(itemVisible=="1")
{$(this).parents('.deals-container').find('.deals-light-pagination-prev').hide();}}
$(this).parents('.deals-container').find('.deals-light-pagination-active').text(itemVisible);return false;});}
if($('#recordsPerPage').length>0){$("#recordsPerPage").change(function(){window.location=this.value;});}
if($('#flash-card-container').length>0){var flashCardAttributes=new Array();$('#flash-card-container').addClass("loaded");if($('#flash-card-container .flash-card').length===4){$('#flash-card-container .flash-card-4').addClass('flash-card-6').removeClass('flash-card-4');}
$('#flash-card-container .flash-card:first-child').addClass('front-card');var i=1;$('#flash-card-container .flash-card').each(function(){if($(this).children('input.fc-text-color').attr('value')){$(this).css('color',$(this).children('input.fc-text-color').attr('value'));}
if($(this).hasClass('fc-layout-4')||$(this).hasClass('fc-layout-5')||$(this).hasClass('fc-layout-6')){$(this).children('.card-content').css({'margin-top':(354-$(this).children('.card-content').height()-$(this).children('h2').height())/2+'px'});}
else if($(this).hasClass('fc-layout-7')||$(this).hasClass('fc-layout-8')||$(this).hasClass('fc-layout-9')){$(this).children('.card-content').css({'margin-top':354-$(this).children('.card-content').height()-$(this).children('h2').height()+'px'});}
if(i===1||i===2||i===4){$(this).data('header-align','card-header-1');$(this).find('h2').addClass('card-header-1');}else if(i===3||i===5){$(this).data('header-align','card-header-2');$(this).find('h2').addClass('card-header-2');}
flashCardAttributes["flash-card-"+i]=new Object();flashCardAttributes["flash-card-"+i].pos={top:$(this).position().top,left:$(this).position().left};flashCardAttributes["flash-card-"+i].grown={top:$(this).position().top-10,left:$(this).position().left-10};flashCardAttributes["flash-card-"+i].zIndex=$(this).css('zIndex');i++;});function eatMe(){if(!$(this).hasClass('front-card')){$(this).dequeue().animate({top:flashCardAttributes[$(this).attr("id")].pos.top-5},200);}}
function drinkMe(){if(!$(this).hasClass('front-card')){$(this).dequeue().animate(flashCardAttributes[$(this).attr("id")].pos,200);}}
function killLink(event){event.preventDefault();}
$('#flash-card-container .flash-card a').click(killLink);$('#flash-card-container .front-card a').unbind('click',killLink);function cardSwapper(event){$('#flash-card-container .flash-card').unbind('mouseenter',eatMe);$('#flash-card-container .flash-card').unbind('mouseleave',drinkMe);$('#flash-card-container .flash-card').dequeue();if(!$(this).hasClass('front-card')){var clickedCard=$(this);var clickedCardAtts=flashCardAttributes[clickedCard.attr('id')];var currentFrontCard=$(this).siblings('.front-card');var currentFrontCardAtts=flashCardAttributes[currentFrontCard.attr('id')];$.blockUI.defaults.message=null;$.blockUI.defaults.overlayCSS.opacity=0;$.blockUI.defaults.overlayCSS.cursor='pointer';if($(clickedCard).position().left>310){$(currentFrontCard).find('div.card-content').css("text-align","right");$(currentFrontCard).find('h2').removeClass().addClass('card-header-2');}
flashCardAttributes[clickedCard.attr('id')]=currentFrontCardAtts;flashCardAttributes[currentFrontCard.attr('id')]=clickedCardAtts;if($(currentFrontCard).hasClass('search-flash-card')){$(currentFrontCard).find('h3.active').each(function(){$(this).data('toggle-state','open');}).click();}
clickedCard.css('zIndex',flashCardAttributes[clickedCard.attr('id')].zIndex).animate(flashCardAttributes[clickedCard.attr('id')].pos,600,function(){if($(clickedCard).hasClass('search-flash-card')){$('.search-card .search-swappable-tabs, #search-saved').unblock();}
$(clickedCard).find('h3.toggle').each(function(){if($(this).data("toggle-state")==="open"){$(this).click();$(this).data("toggle-state")==="";}});});currentFrontCard.css('zIndex',flashCardAttributes[currentFrontCard.attr("id")].zIndex).animate(flashCardAttributes[currentFrontCard.attr('id')].pos,600,function(){if($(currentFrontCard).hasClass('search-flash-card')){$('.search-card .search-swappable-tabs, #search-saved').block();}
$('#flash-card-container .flash-card').mouseenter(eatMe);$('#flash-card-container .flash-card').mouseleave(drinkMe);});$(currentFrontCard).removeClass('front-card');$(clickedCard).addClass('front-card');$(clickedCard).find('div.card-content').css("text-align","left");$(clickedCard).find('h2').removeClass().addClass('card-header-1');$('#flash-card-container .flash-card a').click(killLink);$('#flash-card-container .front-card a').unbind('click',killLink);}else{if($(this).children('.fc-link').length===1){window.location=$(this).children('.fc-link').attr('href');}}}
$('#homepage #layout-body').css('background','none');$('#homepage #layout-body-container').css('background','none');if(document.getElementById("homepage")){$('.flash-card').animate(flashCardAttributes[$('.front-card').attr("id")].pos,0,function(){$('#flash-card-container').css('display','none');$('#flash-card-container').css('left','0');});if(jQuery.support.opacity){$('#flash-card-container:hidden').fadeIn(1500,function(){$('.flash-card').each(function(){$(this).animate(flashCardAttributes[$(this).attr("id")].pos,1700,function(){$('#flash-card-container .flash-card').mouseenter(eatMe);$('#flash-card-container .flash-card').mouseleave(drinkMe);$('#flash-card-container .flash-card').click(cardSwapper);});});});}
else{$('#flash-card-container').css('display','block');$('.flash-card').each(function(){$(this).animate(flashCardAttributes[$(this).attr("id")].pos,1700,function(){$('#flash-card-container .flash-card').mouseenter(eatMe);$('#flash-card-container .flash-card').mouseleave(drinkMe);$('#flash-card-container .flash-card').click(cardSwapper);});});}}
else{$('#flash-card-container').css('left','0');$('#flash-card-container .flash-card').mouseenter(eatMe);$('#flash-card-container .flash-card').mouseleave(drinkMe);$('#flash-card-container .flash-card').click(cardSwapper);}
if(typeof(DD_belatedPNG)!=='undefined'){DD_belatedPNG.fix('.flash-card.search-flash-card');}}
$('#carousel-container-outer #carousel-container').css('left','0');if($('#carousel-container-outer #carousel-container ul li').length>4){$('#carousel-container').jCarouselLite({btnNext:"#carousel-next",btnPrev:"#carousel-prev",circular:true,visible:4,scroll:4});$('#carousel-container-outer #carousel-container').css('left','45px');}
$('#carousel-container-outer #carousel-container .carousel-content').hide();$('#carousel-container-outer #carousel-container li').hover(function(){$(this).find('.carousel-image').stop().animate({height:122,width:74});$(this).find('.carousel-content-container').stop().animate({left:88});if(jQuery.support.opacity){$(this).find('.carousel-content').fadeIn(300);}else{$(this).find('.carousel-content').show();}},function(){$(this).find('.carousel-image').stop().animate({height:61,width:37});$(this).find('.carousel-content-container').stop().animate({left:45});if(jQuery.support.opacity){$(this).find('.carousel-content').fadeOut(100);}else{$(this).find('.carousel-content').hide();}});$('#carousel-prev').hover(function(){$(this).addClass('hover-prev');},function(){$(this).removeClass('hover-prev');});$('#carousel-next').hover(function(){$(this).addClass('hover-next');},function(){$(this).removeClass('hover-next');});if($('#carousel-container-outer-272X100 #carousel-container ul li').length>2){var carouselCircularVal=true;if($('#carousel-container-outer-272X100 #carousel-container ul li').length<4){carouselCircularVal=false;}
$('#carousel-container-outer-272X100 #carousel-container').jCarouselLite({btnNext:"#carousel-next",btnPrev:"#carousel-prev",circular:carouselCircularVal,visible:3,scroll:3});$('#carousel-container-outer-272X100 #carousel-container').css('left','8px');$('#carousel-container-outer-272X100 #carousel-container').css('width','842px');}
$('#carousel-container-outer-272X100 #carousel-container li').hover(function(){$(this).find('.carousel-content-container').stop().animate({top:0},400);},function(){$(this).find('.carousel-content-container').stop().animate({top:100},400);});$('#carousel-container-outer-272X100 #carousel-next').click(function(){loadHpCarouselImages(3)});$('#carousel-container-outer-272X100 #carousel-prev').click(function(){loadHpCarouselImages(6)});function loadHpCarouselImages(numberOfImages){var nextOrPrev=numberOfImages;var carouselSlot4=$('#carousel-container-outer-272X100 .carousel-item-4 img').attr('src');var carouselSlot4iURL=$('.carousel-item-4 input').val();var carouselSlot7=$('#carousel-container-outer-272X100 .carousel-item-7 img').attr('src');var carouselSlot7iURL=$('.carousel-item-7 input').val();$('#carousel-container-outer-272X100 li a img').removeClass('hidden');if(nextOrPrev==6&&carouselSlot7==carouselSlot7iURL&&carouselSlot4!=carouselSlot4iURL){nextOrPrev=3;}else if(nextOrPrev==3&&carouselSlot4==carouselSlot4iURL){nextOrPrev=6;}
if(carouselSlot4!=carouselSlot4iURL||carouselSlot7!=carouselSlot7iURL){for(var x=nextOrPrev+1;x<=(nextOrPrev+3);x++){var iURL=$('.carousel-item-'+x+' input').val();$('#carousel-container-outer-272X100 #carousel-container .carousel-item-'+x+' img').attr('src',iURL);}}}
$(".accordion").accordion({autoHeight:false,header:"h2",icons:{'header':'ui-icon-up','headerSelected':'ui-icon-down'}});$('.accordion-panel').prepend("<span class='panel-top png-fix'>&nbsp;</span>");$('.accordion-panel').append("<span class='panel-bottom png-fix'>&nbsp;</span>");$('.ui-accordion-header').attr('tabindex','0');$('.accordion-panel .layout-5 img, .accordion-panel .layout-6 img').each(function(){var floatedElement=($(this).parent().is('a'))?$(this).parent():$(this);var floatedElementWrapperWidth=$(this).attr('width')+parseInt($(this).css("marginLeft"))+parseInt($(this).css("marginRight"));var panel=$(this).closest('.accordion-panel');var panelContent=panel.find('.panel-content');var panelUnstretchedWidth=panel.prev('.ui-accordion-header').width();var contentWrapperWidth=panelUnstretchedWidth-parseInt(panelContent.css("paddingLeft"))-parseInt(panelContent.css("paddingRight"))-floatedElementWrapperWidth;var floatDirection=$(this).css('float');var floatedElementWrapperStyle="float:"+floatDirection+"; width:"+floatedElementWrapperWidth+"px;"+"margin-"+(floatDirection=='left'?'right':'left')+":-"+(floatedElementWrapperWidth+1)+"px;";var contentWrapperStyle="overflow:hidden; padding-"+floatDirection+":"+floatedElementWrapperWidth+"px;";floatedElement.siblings().wrapAll('<div style="'+contentWrapperStyle+'"></div>');floatedElement.wrap('<div style="'+floatedElementWrapperStyle+'"></div>');});$('.column .flash-wrapper > object').each(function(){$(this).parent().height($(this).attr('height')+'px');});$('.page-section').each(function(){$(this).children('.column').filter(function(){return $(".accordion",this).length==0;}).height($(this).height());});$('input.column-bg-color').each(function(){if($(this).attr('value')!=''){$(this).parent().children('.article-content').css("background-color",$(this).attr('value'));$(this).parent().prev().children('.article-content').css("padding-right","10px");$(this).siblings('.article-content').css("padding-right","10px");$(this).siblings('.article-content.layout-12').css("padding","0 10px 3px 10px");}
var tabid=$(this).parent().attr('id')+'';if($(this).children('.article-content').length==0&&tabid.indexOf("tabs")!=0){$(this).parent().prev().children('.article-content').css("padding-right","10px");}});$('input.column-text-color').each(function(){$(this).parent().css("color",$(this).attr('value'));});$('input.column-invert-links').each(function(){if($(this).attr('value')=='1'){$(this).parent().addClass('link-set-2');}});$('.component-head').click(function(){$(this).next('div').slideToggle();$(this).parent('.closable-panel').toggleClass('closed');});$('.closable-panel').each(function(){$('.article-content.layout-7 img').addClass('closable-panel-img');$('.article-content.layout-3 img').addClass('closable-panel-img');});if(document.getElementById("leftNoWrap-border-2")){$('img#leftNoWrap-border-2').each(function(){var imageHeight=$('div img#leftNoWrap-border-2').height();$(".article-content.layout-5.leftNoWrap-border").animate({height:imageHeight},"fast");});}
if($('div.article-container').hasClass('left-column')){$('.left-column').wrapAll("<div class='placement-left'></div>");}
if($('div.article-container').hasClass('right-column')){$('.right-column').wrapAll("<div class='placement-right'></div>");}
if($('div.article-container').hasClass('leftside-column')){$('.leftside-column').wrapAll("<div class='placement-leftside'></div>");}
if($('div.article-container').hasClass('rightside-column')){$('.rightside-column').wrapAll("<div class='placement-rightside'></div>");}
if($('div.article-container').hasClass('leftmost-column')){$('.leftmost-column').wrapAll("<div class='placement-leftmost'></div>");}
if($('div.article-container').hasClass('middle-column')){$('.middle-column').wrapAll("<div class='placement-middle'></div>");}
if($('div.article-container').hasClass('rightmost-column')){$('.rightmost-column').wrapAll("<div class='placement-rightmost'></div>");}
$(window).load(function(){var billboard=$('#billboard.layout-1','#billboard.layout-2','#billboard.layout-3','.full-width-carousel');var billboard=$('#billboard.layout-2');var playText=$("div#billboard").data("carousel-play");var pauseText=$("div#billboard").data("carousel-pause");$(billboard).append('<div class="carousel-pagination" />');if(billboard.length>0){$(billboard).find('ul').carouFredSel({items:1,onCreate:function(){var carHeight=$('#billboard.layout-2 .photo').height();billboard.css('height',carHeight);$('.firstCarouselImage').remove();$('#billboard.layout-2').css({'position':'relative','left':'auto'});},pagination:".carousel-pagination",auto:{button:'.icon-pause',duration:1000,timeoutDuration:5000,pauseOnEvent:true}}).trigger("play");$('#switcher-container > .icon-pause').append('<a href="#play-pause"><span class="is-hidden-text">'+pauseText+'</span></a>');}
var billboard=$('#billboard.layout-1');$(billboard).append('<div class="carousel-pagination" />');if(billboard.length>0){$(billboard).find('ul').carouFredSel({items:1,onCreate:function(){var carHeight=$('#billboard.layout-1 .photo').height();billboard.css('height',carHeight);$('.firstCarouselImage').remove();$('#billboard.layout-1').css({'position':'relative','left':'auto'});},pagination:".carousel-pagination",auto:{button:'.icon-pause',duration:1000,timeoutDuration:5000,pauseOnEvent:true}}).trigger("play");$('#switcher-container > .icon-pause').append('<a href="#play-pause"> <span class="is-hidden-text">'+pauseText+'</span></a>');}
$("switcher-container").on('click','.icon-pause',function(){$(this).toggleClass("pause icon-play");});var billboard=$('.full-width-carousel');var numImgs=$('.photo img').length;var count=$(".photo > img").size();$(billboard).append('<div class="carousel-pagination" />');if(billboard.length>0){var switchercontainer=$('<div class="icon-arrow-left"/><div class="icon-arrow-right"/>');billboard.css('position','relative').append(switchercontainer);billboard.find('ul').carouFredSel({items:{visible:1},onCreate:function(){var carHeight=$('.full-width-carousel').height();var alignArrows=carHeight/2
$('.firstCarouselImage').remove();$('.full-width-carousel').css({'position':'relative','left':'auto'});$('.icon-arrow-left, .icon-arrow-right').css('top',alignArrows);},pagination:{container:'.carousel-pagination',keys:'true'},prev:'.prev',next:'.next',next:{button:'.icon-arrow-right',key:'right'},prev:{button:'.icon-arrow-left',key:'left'},auto:{button:'.icon-pause',duration:1000,timeoutDuration:5000,pauseOnEvent:true},scroll:{onAfter:function(){numImgs++;if(count<=3){if(numImgs==count*2+2){$('.photo img').trigger("pause");}
else{$('.photo img').trigger("play");}}}}}).trigger('play');}
$("#switcher-container").on('click','.icon-pause',function(){$(this).toggleClass("pause icon-play");var a=$(".icon-pause > .is-hidden-text").text();if(a==pauseText){$(".icon-pause > .is-hidden-text").text(playText);}
else if(a==playText){$(".icon-pause > .is-hidden-text").text(pauseText);}});var billboard=$('#billboard.layout-3');var $imagesIcons=$('#switcher-container').find('li');$(billboard).prepend('<div class="icon-pause" />');$('#billboard > .icon-pause').append('<a href="#play-pause"><span class="is-hidden-text">'+pauseText+'</span></a>');if(billboard.length>0){$(billboard).find('ul').carouFredSel({items:1,onCreate:function(){var carHeight=$('#billboard.layout-3 .photo').height();billboard.css('height',carHeight);$('.firstCarouselImage').remove();$('#billboard.layout-3').css({'position':'relative','left':'auto'});},auto:{button:'.icon-pause',duration:1000,timeoutDuration:5000,pauseOnEvent:true},pagination:{container:"#billboard-switcher",anchorBuilder:function(nr){return'<a href="#'+nr+'"><span>'+$($imagesIcons.get(nr-1)).html()+'</span></a>';}}}).trigger("play");}
$("#billboard.layout-3").on('click','.icon-pause',function(){$(this).toggleClass("pause icon-play");var a=$(".icon-pause > .is-hidden-text").text();if(a==pauseText){$(".icon-pause > .is-hidden-text").text(playText);}
else if(a==playText){$(".icon-pause > .is-hidden-text").text(pauseText);}});$('.article-content.layout-5 img, .article-content.layout-6 img').each(function(){var floatedElement=($(this).parent().is('a'))?$(this).parent():$(this);if(floatedElement.closest('span').hasClass('media-overlay-wrap')){}
else if(floatedElement.closest('div').hasClass('article-content')){var floatedElementWrapperWidth=$(this).prop('width')+parseInt($(this).css("marginLeft"))+parseInt($(this).css("marginRight"));var articleContainer=$(this).closest('.article-content');var contentWrapperWidth=articleContainer.width()-parseInt(articleContainer.css("paddingLeft"))-parseInt(articleContainer.css("paddingRight"))-floatedElementWrapperWidth;var floatDirection=$(this).css('float');var floatedElementWrapperStyle="float:"+floatDirection+"; width:"+floatedElementWrapperWidth+"px;"+"margin-"+(floatDirection=='left'?'right':'left')+":-"+(floatedElementWrapperWidth+1)+"px;";var contentWrapperStyle="overflow:hidden; margin-"+floatDirection+":"+floatedElementWrapperWidth+"px;"+"float:"+(floatDirection=='left'?'right':'left');floatedElement.siblings().wrapAll('<div style="'+contentWrapperStyle+'"></div>');floatedElement.wrap('<div style="'+floatedElementWrapperStyle+'"></div>');}});});}};(function($){var mTabs,undefined,href=function(e){return $(e).attr("href");},type=function(o){return o===null&&"Null"||o===undefined&&"Undefined"||({}).toString.call(o).slice(8,-1);};$.fn.mTabs=function(){var arguments=[true,location.hash];var s=mTabs.args.apply(this,arguments),action="bind";s.area=this;mTabs[action](s);if(navigator.userAgent.toLowerCase().indexOf('msie 7')!=-1&&$(this).hasClass('verticalright')){var w=this.width()-$(this).find('ul').first().width()-32;$('div[role="tabpanel"]',this).width(w);}
if($(this).hasClass('verticalright')||$(this).hasClass('verticaleft')){var h=$(this).find('ul').first().height()-5;$('div[role="tabpanel"]',this).css('min-height',h+'px');}
if($('.subtabs',this).length>0){$('.subtabs',this).each(function(){$(this).mTabs();});}
return this;};mTabs=$.mTabs=function(tabarea,options,data){var e,tabs,items,test=$(),meta=$.data?$(tabarea).data():{},s={tab:mTabs.tab,item:mTabs.item};s=$.extend(s,mTabs.settings,meta,options||{});if($(tabarea).hasClass('subtabs')){s.tabarea=$(tabarea).parent();}else{s.tabarea=$(tabarea);}
s.data=data||"mTabs"+new Date;$.each({selected:'.',event:'!',start:'#'},function(n,c){if(type(s[n])=="String"&&s[n].indexOf(c)==0)
s[n]=s[n].substr(1);});if(s.start===null)s.start=0;items=[];s.tabs=tabs=s.tabarea.find("ul").first().find("li > a[href^=#tabs]");tabs.each(function(){test=s.item(href(this));if(test.length)items=items.concat(test.get());});s.items=$(items).hide();e="mTabs."+s.event;data=s.tabarea.data("mTabs")||{};data[e]=s;s.tabarea.data("mTabs",data);$('div[role="tabpanel"]',s.tabarea).find("a[href^=#tabs]").each(function(){if(!$(this).parent().parent().is('ul.subtabs')){var id=href(this);$(this).addClass('tablink').click(function(e){e.preventDefault();var a=$("a[href="+href(this)+"]:not(.tablink)").first();a.click();var p=a.parent().parent();if(p.hasClass('subtabs')){$("a[href=#"+p.parent().attr('id')+"]").click();}});}});tabs.trigger(e).data(s.data,s).bind(s.event,{s:s},mTabs.find);tabs.eq(0).trigger(s.event);type(s.start)=="Number"&&(s.start<0||(test=tabs.eq(s.start)).length)||type(s.start)=="String"&&(test=tabs.filter("a[href=#"+s.start+"]")).length||(test=tabs.filter('.'+s.selected).removeClass(s.selected)).length||(s.start===undefined&&(test=tabs.eq(0)).length);if(test.length){test.trigger(s.event);var p=test.parent().parent();if(p.hasClass('subtabs')&&href(test)==location.hash){$("a[href=#"+p.parent().attr('id')+"]").click();}}
return s;};mTabs.args=function(){var a,i=0,s={},args=arguments,str=function(_,a){if(a.indexOf('.')==0)s.selected=a;else if(a.indexOf('!')==0)
if(/^!(true|false)$/i.test(a))s.toggle=/^!true$/i.test(a);else s.event=a;else if(a.indexOf(':')==0){a=a.substr(1).toLowerCase();if(a.indexOf('!')==0)s[a.substr(1)]=false;else s[a]=true;}else if(a)s.start=a;};while(i<args.length){a=args[i++];switch(type(a)){case"Object":$.extend(s,a);break;case"Boolean":s.change=a;break;case"Number":s.start=a;break;case"Function":s.click=a;break;case"Null":s.start=a;break;case"String":$.each(a.split(/\s+/g),str);default:break;}}
return s;};mTabs.bind=function(s){if(!s)return;var data="mTabs"+new Date;s.area.each(function(){$.mTabs(this,s,data);});};mTabs.find=function(e){e.preventDefault();var self=this,ret=false,s=e.data.s;$("a[href="+href(this)+"]:first",s.area).each(function(){var t=$(this).data(s.data);if(t)ret=mTabs.showtab.call(t.tabarea==s.tabarea?self:this,t,e)||ret;});return ret;};mTabs.showtab=function(s,e){if(!s||!s.toggle&&$(this).is('.'+s.selected))
return s&&s.change;var id=href(this);if(s.toggle&&$(this).is('.'+s.selected))id=null;return mTabs.show.call(this,id,s,e);};mTabs.show=function(id,s){s.tabs.removeClass(s.selected);s.tab(id).addClass(s.selected);s.items.hide();s.item(id).show();return s.change;};mTabs.unbind=function(e){var s=e.data.s;$(this).removeData(s.data).unbind("mTabs."+s.event);return false;};mTabs.extend=function(){var args=arguments;return function(){[].push.apply(args,arguments);this.mTabs.apply(this,args);};};mTabs.tab=function(id){if(!id)return $([]);return $("a[href="+id+"]",this.tabarea);};mTabs.item=function(id){if(!id)return $([]);var item=$(id);return item.length?item:$('.'+id.substr(1));};mTabs.settings={start:0,change:false,click:null,selected:".selected",event:"!click"};})(jQuery);jQuery(document).ready(function($){miEntryPage.renderFunction();$(".mtab-container").each(function(){$(this).mTabs()});if($('.media-overlay-wrap').length){function hexToRgb(hex){if(hex!=null){var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:null;}}
$('.media-overlay-wrap').find('.media-over').each(function(){var bgColor=$(this).data("background");var opacity=$(this).data("opacity");var txtColor=$(this).data("txtcolor");if(bgColor){fullRGB=(hexToRgb(bgColor));red=(fullRGB.r);green=(fullRGB.g);blue=(fullRGB.b);var rgb=(red+', '+green+', '+blue);}
if(opacity==100||opacity==''){var alpha=100;}else{var alpha='.'+opacity}
if(typeof(window.Modernizr)!=="undefined"&&Modernizr.rgba){$(this).css('background-color','rgba('+rgb+', '+alpha+')');}else{$(this).css('background-color',bgColor);}
$(this).css('color',txtColor);});$('.media-overlay-wrap').find('.overlay-logo').each(function(){imgbgColor=$(this).data("background");$(this).css('background-color',imgbgColor);});}});