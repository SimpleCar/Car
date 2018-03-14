document.createElement("canvas").getContext||function(){var t=Math,e=t.round,i=t.sin,r=t.cos,s=t.abs,n=t.sqrt,a=10,o=a/2;function h(){return this.context_||(this.context_=new w(this))}var l=Array.prototype.slice;function c(t,e){var i=l.call(arguments,2);return function(){return t.apply(e,i.concat(l.call(arguments)))}}var u={init:function(t){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var e=t||document;e.createElement("canvas");e.attachEvent("onreadystatechange",c(this.init_,this,e))}},init_:function(t){t.namespaces.g_vml_||t.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");t.namespaces.g_o_||t.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");if(!t.styleSheets.ex_canvas_){var e=t.createStyleSheet();e.owningElement.id="ex_canvas_";e.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}var i=t.getElementsByTagName("canvas"),r=0;for(;r<i.length;r++)this.initElement(i[r])},initElement:function(t){if(!t.getContext){t.getContext=h;t.innerHTML="";t.attachEvent("onpropertychange",_);t.attachEvent("onresize",f);var e=t.attributes;if(e.width&&e.width.specified)t.style.width=e.width.nodeValue+"px";else t.width=t.clientWidth;if(e.height&&e.height.specified)t.style.height=e.height.nodeValue+"px";else t.height=t.clientHeight}return t}};function _(t){var e=t.srcElement;switch(t.propertyName){case"width":e.style.width=e.attributes.width.nodeValue+"px";e.getContext().clearRect();break;case"height":e.style.height=e.attributes.height.nodeValue+"px";e.getContext().clearRect();break}}function f(t){var e=t.srcElement;if(e.firstChild){e.firstChild.style.width=e.clientWidth+"px";e.firstChild.style.height=e.clientHeight+"px"}}u.init();var p=[],y=0;for(;y<16;y++){var d=0;for(;d<16;d++)p[y*16+d]=y.toString(16)+d.toString(16)}function x(){return[[1,0,0],[0,1,0],[0,0,1]]}function g(t,e){var i=x(),r=0;for(;r<3;r++){var s=0;for(;s<3;s++){var n=0,a=0;for(;a<3;a++)n+=t[r][a]*e[a][s];i[r][s]=n}}return i}function m(t,e){e.fillStyle=t.fillStyle;e.lineCap=t.lineCap;e.lineJoin=t.lineJoin;e.lineWidth=t.lineWidth;e.miterLimit=t.miterLimit;e.shadowBlur=t.shadowBlur;e.shadowColor=t.shadowColor;e.shadowOffsetX=t.shadowOffsetX;e.shadowOffsetY=t.shadowOffsetY;e.strokeStyle=t.strokeStyle;e.globalAlpha=t.globalAlpha;e.arcScaleX_=t.arcScaleX_;e.arcScaleY_=t.arcScaleY_;e.lineScale_=t.lineScale_}function v(t){var e,i=1;t=String(t);if(t.substring(0,3)=="rgb"){var r=t.indexOf("(",3),s=t.indexOf(")",r+1),n=t.substring(r+1,s).split(",");e="#";var a=0;for(;a<3;a++)e+=p[Number(n[a])];if(n.length==4&&t.substr(3,1)=="a")i=n[3]}else e=t;return{color:e,alpha:i}}function S(t){switch(t){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function w(t){this.m_=x();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=a*1;this.globalAlpha=1;this.canvas=t;var e=t.ownerDocument.createElement("div");e.style.width=t.clientWidth+"px";e.style.height=t.clientHeight+"px";e.style.overflow="hidden";e.style.position="absolute";t.appendChild(e);this.element_=e;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}var C=w.prototype;C.clearRect=function(){this.element_.innerHTML=""};C.beginPath=function(){this.currentPath_=[]};C.moveTo=function(t,e){var i=this.getCoords_(t,e);this.currentPath_.push({type:"moveTo",x:i.x,y:i.y});this.currentX_=i.x;this.currentY_=i.y};C.lineTo=function(t,e){var i=this.getCoords_(t,e);this.currentPath_.push({type:"lineTo",x:i.x,y:i.y});this.currentX_=i.x;this.currentY_=i.y};C.bezierCurveTo=function(t,e,i,r,s,n){var a=this.getCoords_(s,n),o=this.getCoords_(t,e),h=this.getCoords_(i,r);b(this,o,h,a)};function b(t,e,i,r){t.currentPath_.push({type:"bezierCurveTo",cp1x:e.x,cp1y:e.y,cp2x:i.x,cp2y:i.y,x:r.x,y:r.y});t.currentX_=r.x;t.currentY_=r.y}C.quadraticCurveTo=function(t,e,i,r){var s=this.getCoords_(t,e),n=this.getCoords_(i,r),a={x:this.currentX_+.6666666666666666*(s.x-this.currentX_),y:this.currentY_+.6666666666666666*(s.y-this.currentY_)};b(this,a,{x:a.x+(n.x-this.currentX_)/3,y:a.y+(n.y-this.currentY_)/3},n)};C.arc=function(t,e,s,n,h,l){s*=a;var c=l?"at":"wa",u=t+r(n)*s-o,_=e+i(n)*s-o,f=t+r(h)*s-o,p=e+i(h)*s-o;if(u==f&&!l)u+=.125;var y=this.getCoords_(t,e),d=this.getCoords_(u,_),x=this.getCoords_(f,p);this.currentPath_.push({type:c,x:y.x,y:y.y,radius:s,xStart:d.x,yStart:d.y,xEnd:x.x,yEnd:x.y})};C.rect=function(t,e,i,r){this.moveTo(t,e);this.lineTo(t+i,e);this.lineTo(t+i,e+r);this.lineTo(t,e+r);this.closePath()};C.strokeRect=function(t,e,i,r){var s=this.currentPath_;this.beginPath();this.moveTo(t,e);this.lineTo(t+i,e);this.lineTo(t+i,e+r);this.lineTo(t,e+r);this.closePath();this.stroke();this.currentPath_=s};C.fillRect=function(t,e,i,r){var s=this.currentPath_;this.beginPath();this.moveTo(t,e);this.lineTo(t+i,e);this.lineTo(t+i,e+r);this.lineTo(t,e+r);this.closePath();this.fill();this.currentPath_=s};C.createLinearGradient=function(t,e,i,r){var s=new P("gradient");s.x0_=t;s.y0_=e;s.x1_=i;s.y1_=r;return s};C.createRadialGradient=function(t,e,i,r,s,n){var a=new P("gradientradial");a.x0_=t;a.y0_=e;a.r0_=i;a.x1_=r;a.y1_=s;a.r1_=n;return a};C.drawImage=function(i){var r,s,n,o,h,l,c,u,_=i.runtimeStyle.width,f=i.runtimeStyle.height;i.runtimeStyle.width="auto";i.runtimeStyle.height="auto";var p=i.width,y=i.height;i.runtimeStyle.width=_;i.runtimeStyle.height=f;if(arguments.length==3){r=arguments[1];s=arguments[2];h=l=0;c=n=p;u=o=y}else if(arguments.length==5){r=arguments[1];s=arguments[2];n=arguments[3];o=arguments[4];h=l=0;c=p;u=y}else if(arguments.length==9){h=arguments[1];l=arguments[2];c=arguments[3];u=arguments[4];r=arguments[5];s=arguments[6];n=arguments[7];o=arguments[8]}else throw Error("Invalid number of arguments");var d=this.getCoords_(r,s),x=[];x.push(" <g_vml_:group",' coordsize="',a*10,",",a*10,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]){var g=[];g.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",e(d.x/a),",","Dy=",e(d.y/a),"");var m=d,v=this.getCoords_(r+n,s),S=this.getCoords_(r,s+o),w=this.getCoords_(r+n,s+o);m.x=t.max(m.x,v.x,S.x,w.x);m.y=t.max(m.y,v.y,S.y,w.y);x.push("padding:0 ",e(m.x/a),"px ",e(m.y/a),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",g.join(""),", sizingmethod='clip');")}else x.push("top:",e(d.y/a),"px;left:",e(d.x/a),"px;");x.push(' ">','<g_vml_:image src="',i.src,'"',' style="width:',a*n,"px;"," height:",a*o,'px;"',' cropleft="',h/p,'"',' croptop="',l/y,'"',' cropright="',(p-h-c)/p,'"',' cropbottom="',(y-l-u)/y,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",x.join(""))};C.stroke=function(i){var r=[],s=v(i?this.fillStyle:this.strokeStyle),n=s.color,o=s.alpha*this.globalAlpha;r.push("<g_vml_:shape",' filled="',!!i,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0 0" coordsize="',a*10," ",a*10,'"',' stroked="',!i,'"',' path="');var h={x:null,y:null},l={x:null,y:null},c=0;for(;c<this.currentPath_.length;c++){var u=this.currentPath_[c];switch(u.type){case"moveTo":r.push(" m ",e(u.x),",",e(u.y));break;case"lineTo":r.push(" l ",e(u.x),",",e(u.y));break;case"close":r.push(" x ");u=null;break;case"bezierCurveTo":r.push(" c ",e(u.cp1x),",",e(u.cp1y),",",e(u.cp2x),",",e(u.cp2y),",",e(u.x),",",e(u.y));break;case"at":case"wa":r.push(" ",u.type," ",e(u.x-this.arcScaleX_*u.radius),",",e(u.y-this.arcScaleY_*u.radius)," ",e(u.x+this.arcScaleX_*u.radius),",",e(u.y+this.arcScaleY_*u.radius)," ",e(u.xStart),",",e(u.yStart)," ",e(u.xEnd),",",e(u.yEnd));break}if(u){if(h.x==null||u.x<h.x)h.x=u.x;if(l.x==null||u.x>l.x)l.x=u.x;if(h.y==null||u.y<h.y)h.y=u.y;if(l.y==null||u.y>l.y)l.y=u.y}}r.push(' ">');if(i)if(typeof this.fillStyle=="object"){var _=this.fillStyle,f=0,p={x:0,y:0},y=0,d=1;if(_.type_=="gradient"){var x=_.x1_/this.arcScaleX_,g=_.y1_/this.arcScaleY_,m=this.getCoords_(_.x0_/this.arcScaleX_,_.y0_/this.arcScaleY_),w=this.getCoords_(x,g);f=Math.atan2(w.x-m.x,w.y-m.y)*180/Math.PI;if(f<0)f+=360;if(f<1e-6)f=0}else{var m=this.getCoords_(_.x0_,_.y0_),C=l.x-h.x,b=l.y-h.y;p={x:(m.x-h.x)/C,y:(m.y-h.y)/b};C/=this.arcScaleX_*a;b/=this.arcScaleY_*a;var T=t.max(C,b);y=2*_.r0_/T;d=2*_.r1_/T-y}var k=_.colors_;k.sort(function(t,e){return t.offset-e.offset});var P=k.length,E=k[0].color,M=k[P-1].color,X=k[0].alpha*this.globalAlpha,Y=k[P-1].alpha*this.globalAlpha,L=[],c=0;for(;c<P;c++){var A=k[c];L.push(A.offset*d+y+" "+A.color)}r.push('<g_vml_:fill type="',_.type_,'"',' method="none" focus="100%"',' color="',E,'"',' color2="',M,'"',' colors="',L.join(","),'"',' opacity="',Y,'"',' g_o_:opacity2="',X,'"',' angle="',f,'"',' focusposition="',p.x,",",p.y,'" />')}else r.push('<g_vml_:fill color="',n,'" opacity="',o,'" />');else{var j=this.lineScale_*this.lineWidth;if(j<1)o*=j;r.push("<g_vml_:stroke",' opacity="',o,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',S(this.lineCap),'"',' weight="',j,'px"',' color="',n,'" />')}r.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",r.join(""))};C.fill=function(){this.stroke(true)};C.closePath=function(){this.currentPath_.push({type:"close"})};C.getCoords_=function(t,e){var i=this.m_;return{x:a*(t*i[0][0]+e*i[1][0]+i[2][0])-o,y:a*(t*i[0][1]+e*i[1][1]+i[2][1])-o}};C.save=function(){var t={};m(this,t);this.aStack_.push(t);this.mStack_.push(this.m_);this.m_=g(x(),this.m_)};C.restore=function(){m(this.aStack_.pop(),this);this.m_=this.mStack_.pop()};function T(t){var e=0;for(;e<3;e++){var i=0;for(;i<2;i++)if(!isFinite(t[e][i])||isNaN(t[e][i]))return false}return true}function k(t,e,i){if(!!T(e)){t.m_=e;if(i)t.lineScale_=n(s(e[0][0]*e[1][1]-e[0][1]*e[1][0]))}}C.translate=function(t,e){k(this,g([[1,0,0],[0,1,0],[t,e,1]],this.m_),false)};C.rotate=function(t){var e=r(t),s=i(t);k(this,g([[e,s,0],[-s,e,0],[0,0,1]],this.m_),false)};C.scale=function(t,e){this.arcScaleX_*=t;this.arcScaleY_*=e;k(this,g([[t,0,0],[0,e,0],[0,0,1]],this.m_),true)};C.transform=function(t,e,i,r,s,n){k(this,g([[t,e,0],[i,r,0],[s,n,1]],this.m_),true)};C.setTransform=function(t,e,i,r,s,n){k(this,[[t,e,0],[i,r,0],[s,n,1]],true)};C.clip=function(){};C.arcTo=function(){};C.createPattern=function(){return new E};function P(t){this.type_=t;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}P.prototype.addColorStop=function(t,e){e=v(e);this.colors_.push({offset:t,color:e.color,alpha:e.alpha})};function E(){}G_vmlCanvasManager=u;CanvasRenderingContext2D=w;CanvasGradient=P;CanvasPattern=E}();