(function(){var t,n,i;t=function(t){return $(document).ready(t),$(document).on("page:load",t)},n=function(){return $(".entry")},i=function(){var t,i;return window.location.pathname.match(/.*journeys\/[0-9]+$/)&&(i=new Map("map"),i.setDimensions("100%","500px"),i.initialize(),t=n(),t.each(function(){var t,n,e,a,o;return n=$(this).find(".location").text().split(","),a=$(this).find(".title").text(),o=$(this).find(".url").text(),t=$(this).find(".index").text(),e={lat:n[0],lng:n[1],title:a,info:"<h3>"+t+'. <a href="'+o+'">'+a+"</a></h3>"},i.addMarker(e)}),i.connectMarkers(),i.autoCenter()),window.location.pathname.match(/^\/$/)?(console.log("app"),i=new Map("map"),i.setDimensions("100%","100%"),i.initialize(),t=n(),t.each(function(){var t,n,e,a,o,r,h;return a=$(this).find(".location").text().split(","),r=$(this).find(".title").text(),h=$(this).find(".url").text(),t=$(this).find(".author").text(),n=$(this).find(".author_url").text(),e=$(this).find(".journey_url").text(),o={lat:a[0],lng:a[1],title:r,info:""},o.info='<h3><a href="'+h+'">'+r+"</a></h3>",o.info+='<p>Read the whole <a href="'+e+'">Journey</a></p>',o.info+="<br>",o.info+='<p><span class="fa fa-user"></span> <a href="'+n+'">'+t+"</a></h3>",i.addMarker(o)}),i.autoCenter()):void 0},t(i)}).call(this);