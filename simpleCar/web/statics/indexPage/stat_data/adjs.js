function $() {
  var elements = new Array();

  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);

    if (arguments.length == 1)
      return element;

    elements.push(element);
  }

  return elements;
}


	var bitClass = {
	  create : function() {
		return function() {
		  this.initialize.apply(this, arguments);
		}
	  }
	}
	
    window._setTimeout=function(fRef,obj,mDelay){   
	      if(typeof   fRef   ==   'function'){   
		      var   argu   =   Array.prototype.slice.call(arguments,3);  		      
    		  
		      var   f   =   (function(){   fRef.apply(obj,   argu);   });   
		      return   window.setTimeout(f,mDelay);   
	       }   
	       return   window.setTimeout(fRef,mDelay);   
      }  
      
      window._attachEvent=function(fRef,Obj,sEvent){
            var   argu   =   Array.prototype.slice.call(arguments,3);
            var f=function(){
            fRef.apply(Obj,argu);
           }
           window.attachEvent(sEvent,f);
      }
      
     

	var bitDelegate=bitClass.create();
    
	bitDelegate.prototype={
		initialize:function(){
			this.event=new Array();			
		},		
		add:function(fun,obj){		    
			this.event[this.event.length]=function(){
			fun.apply(obj,arguments);			
			};			
		},
		exec:function(){		    
			for(var i=0;i<this.event.length;i++)
			{
				this.event[i].apply(null,arguments);
			}
		},
		del:function (num){
			if (num < this.event.length)
			{
				this.event.splice(num, 1);				
			}
		}
	}	
	
	window._onload=new bitDelegate();	

/*
Browser Object
*/
var Browser = new Object();
Browser.isMozilla = (typeof document.implementation != 'undefined') && (typeof document.implementation.createDocument != 'undefined') && (typeof HTMLDocument!='undefined');
Browser.isIE = window.ActiveXObject ? true : false;
Browser.isFirefox = (navigator.userAgent.toLowerCase().indexOf("firefox")!=-1);
Browser.isOpera = (navigator.userAgent.toLowerCase().indexOf("opera")!=-1);

     



function SimpleAjax(){
   
    this.initXMLHTTPRequest=function (){ 
        var xRequest = null;      
        try {
           
            xRequest = new ActiveXObject("Msxml2.XMLHTTP");
            return xRequest;
        } 
        catch (othermicrosoft) {
            try {
                xRequest = new ActiveXObject("Microsoft.XMLHTTP");
                return xRequest;
            } 
            catch (failed) {
               
                try{
                    xRequest = new XMLHttpRequest();
                    return xRequest;
                }
                catch(error){
                    alert(error);
                    return null;
                }
            }
        } 
     };
    
     this.sendRequest=function(url,isAsync,HttpMethod,handler,resulttype){    
        if(!HttpMethod){
            HttpMethod = "GET";
        }
        var req = this.initXMLHTTPRequest(); 
        if(req){           
            req.onreadystatechange = function(hanlder){ 
                var READY_STATE_UNINITIALIZED=0;
                var READY_STATE_LOADING=1;
                var READY_STATE_LOADED=2;
                var READY_STATE_INTERACTIVE=3;
                var READY_STATE_COMPLETE=4;
                var RESULT_AS_TEXT=0;
                var RESULT_AS_XML=1;
                var RESULT_AS_STREAM=2;
                var RESULT_AS_ARRAY=4; 
                 
                var ready = req.readyState;
                var result = null;
             
                if(ready==READY_STATE_COMPLETE){            
                    if(req.status==200){    
                        if(resulttype== RESULT_AS_TEXT){
                        result= req.responseText;
                        }
                        else if(resulttype== RESULT_AS_XML){                
                            result= req.responseXML;
                        }
                        else if(resulttype== RESULT_AS_STREAM){
                            result= req.responseStream;
                        }
                        else if(resulttype== RESULT_AS_ARRAY){
                            result= req.responseBody;
                            
                        }   
                        handler(result);              
                    }
                    else{
                    //result.value = req.status;
                    }
                }
                else{
                //data = "loading…["+ready+"]";
                }
        
            }
            
            try{
                req.open(HttpMethod,url,isAsync);
            }
            catch(error){
                alert(error);
            }         
            req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            req.send(null);  
        }
    }    
}



//AD底层类库 
var bitAdFrame={
	$:function(id){return document.getElementById(id)}
	,tagArr:function(o,name){return o.getElementsByTagName(name)}
	,nameArr:function(name){return document.getElementsByName(name)}
	,att:function(o,name,fun){return document.all ? o.attachEvent(name,fun) : o.addEventListener(name.substr(2),fun,false);}
	,style:function(o){return o.currentStyle || document.defaultView.getComputedStyle(o,null);}
	,scroll:function(type){return document.documentElement[type] || document.body[type]}
	,client:function(type){return document.documentElement[type] || document.body[type]}
	,buildTag:function(id,tagName,arr,object){//循环生成标签
		var obj=document.createElement(tagName);
		if(id){obj.id=id;}
		if(arr){
			for(i=0;i<arr.length;i++){
				obj.style[arr[i][0]]=arr[i][1];
			}
		}
		object.appendChild(obj);
	}
	,buildHtml:function(con,close){
		var str='';
		var col=close?('<div style="font-size:12px;cursor:pointer;" onclick="this.parentNode.style.display=\'none\'">关闭</div>'):'';
		if(con.type=='image'){
			str='<a href="'+con.link+'" target="_blank"><img src="'+con.url+'" style="border:none; width:'+con.width+'px;height:'+con.height+'px"/></a>'+col;
		}else{
			str+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+con.width+'" height="'+con.height+'">';
			str+='  <param name="movie" value="'+con.url+'" />';
			str+='  <param name="quality" value="high" />';
			str+=' <param value="transparent" name="wmode"/>';
			str+='  <embed src="'+con.url+'" quality="high"  wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+con.width+'" height="'+con.height+'"></embed>';
			str+='</object>';
			str+=col;
		}
		return str;
	}
	,roll:function(id,top){
		var obj=bitAdFrame.$(id);
		var space=top+bitAdFrame.scroll('scrollTop'),objTop=parseInt(bitAdFrame.style(obj).top),pro=this,a;
		if(objTop<space){
			a=(space-objTop)*0.01;
			obj.style.top=objTop+a*20+'px';
		}else if(objTop>space){
			a=(objTop-space)*0.01;
			obj.style.top=objTop-a*20+'px';
		}
		setTimeout(function(){pro.roll(id,top)},10);
	}
};

