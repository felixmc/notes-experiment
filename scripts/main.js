$(document).ready(function(){var e=function(){var e="simple-notes";return void 0===localStorage[e]&&(localStorage[e]="[]"),{save:function(t){localStorage[e]=JSON.stringify(t)},load:function(){return JSON.parse(localStorage[e])}}}(),t=function(){var e=["small","normal","large","huge"],t=null,i=null,r="data-size",o="expanded",s="icon-resize-small",a="icon-resize-full",n=$("#text-editor"),l=$(".text-view .nav"),d=$(".text-view .nav .resize i"),c=$("#main-content"),u=$("#type-form .type-size"),h=$("#type-form .border-radius"),f=$('#type-form input[type="color"]'),g="text-size",v="editor-size",p="background-color-start",b="background-color-end",z="text-foreground-color",m="text-background-color",C="border-radius-key",x={};return x[g]=1,x[v]=!1,x[p]="#4694D4",x[b]="#3160C4",x[z]="#333333",x[m]="#ffffff",x[C]=10,{watcher:null,setWatcher:function(e){this.watcher=e},setup:function(){var e=this;$("#sidebar .toggler").click(function(){var e=$("#sidebar"),t="hidden";e.hasClass(t)?e.removeClass(t):e.addClass(t)}),$(document).on("click",".text-view .nav .resize",function(){e.toggleEditorSize()}),u.change(function(){e.setTextSize($(this).val())}),h.change(function(){e.setBorderRadius($(this).val())}),f.change(function(){$this=$(this),e.setColor($this.attr("class"),$this.val())})},setBorderRadius:function(e,t){n.css({"-moz-border-radius":e+"px","-webkit-border-radius":e+"px","border-radius":e+"px"}),$("li:first-of-type",l).css({"-moz-border-top-right-radius":e+"px","-webkit-border-top-right-radius":e+"px","border-top-right-radius":e+"px"}),t===!0?h.val(e):this.watcher.modelUpdate()},getBorderRadius:function(){return h.val()},setColor:function(e,r,o){switch(e){case m:n.css("backgroundColor",r);break;case z:n.css("color",r);break;case p:t=r,$("body").css("background","-webkit-linear-gradient("+t+", "+i+") fixed");break;case b:i=r,$("body").css("background","-webkit-linear-gradient("+t+", "+i+") fixed")}o===!0?f.filter("."+e).val(r):this.watcher.modelUpdate()},getColor:function(e){return f.filter("."+e).val()},setTextSize:function(t,i){n.attr(r,e[t]),i===!0?u.val(t):this.watcher.modelUpdate()},getTextSize:function(){return u.val()},getEditorSize:function(){return!c.hasClass(o)},setEditorSize:function(e,t){e===!0?(c.removeClass(o),d.removeClass(),d.addClass(a)):(c.addClass(o),d.removeClass(),d.addClass(s)),t!==!0&&this.watcher.modelUpdate()},toggleEditorSize:function(){this.setEditorSize(c.hasClass(o))},serialize:function(){var e={};return e[g]=this.getTextSize(),e[C]=this.getBorderRadius(),e[v]=this.getEditorSize(),e[p]=this.getColor(p),e[b]=this.getColor(b),e[z]=this.getColor(z),e[m]=this.getColor(m),e},deserialize:function(e){$.isEmptyObject(e)&&(e=x),this.setTextSize(e[g],!0),this.setBorderRadius(e[C],!0),this.setEditorSize(e[v],!0),t=e[p],this.setColor(b,e[b],!0),this.setColor(p,e[p],!0),this.setColor(z,e[z],!0),this.setColor(m,e[m],!0)}}}(),i=function(){return{model:null,view:null,init:function(e,t){this.model=e,this.view=t;var i=e.load();t.setWatcher(this),t.setup(),t.deserialize(i)},modelUpdate:function(){this.model.save(t.serialize())}}}();i.init(e,t)}),$(document).ready(function(){var e=function(){var e="simple-notes";return void 0===localStorage[e]&&(localStorage[e]="[]"),{save:function(t){localStorage[e]=JSON.stringify(t)},load:function(){return JSON.parse(localStorage[e])}}}(),t=function(){var e=["small","normal","large","huge"],t=null,i=null,r="data-size",o="expanded",s="icon-resize-small",a="icon-resize-full",n=$("#text-editor"),l=$(".text-view .nav"),d=$(".text-view .nav .resize i"),c=$("#main-content"),u=$("#type-form .type-size"),h=$("#type-form .border-radius"),f=$('#type-form input[type="color"]'),g="text-size",v="editor-size",p="background-color-start",b="background-color-end",z="text-foreground-color",m="text-background-color",C="border-radius-key",x={};return x[g]=1,x[v]=!1,x[p]="#4694D4",x[b]="#3160C4",x[z]="#333333",x[m]="#ffffff",x[C]=10,{watcher:null,setWatcher:function(e){this.watcher=e},setup:function(){var e=this;$("#sidebar .toggler").click(function(){var e=$("#sidebar"),t="hidden";e.hasClass(t)?e.removeClass(t):e.addClass(t)}),$(document).on("click",".text-view .nav .resize",function(){e.toggleEditorSize()}),u.change(function(){e.setTextSize($(this).val())}),h.change(function(){e.setBorderRadius($(this).val())}),f.change(function(){$this=$(this),e.setColor($this.attr("class"),$this.val())})},setBorderRadius:function(e,t){n.css({"-moz-border-radius":e+"px","-webkit-border-radius":e+"px","border-radius":e+"px"}),$("li:first-of-type",l).css({"-moz-border-top-right-radius":e+"px","-webkit-border-top-right-radius":e+"px","border-top-right-radius":e+"px"}),t===!0?h.val(e):this.watcher.modelUpdate()},getBorderRadius:function(){return h.val()},setColor:function(e,r,o){switch(e){case m:n.css("backgroundColor",r);break;case z:n.css("color",r);break;case p:t=r,$("body").css("background","-webkit-linear-gradient("+t+", "+i+") fixed");break;case b:i=r,$("body").css("background","-webkit-linear-gradient("+t+", "+i+") fixed")}o===!0?f.filter("."+e).val(r):this.watcher.modelUpdate()},getColor:function(e){return f.filter("."+e).val()},setTextSize:function(t,i){n.attr(r,e[t]),i===!0?u.val(t):this.watcher.modelUpdate()},getTextSize:function(){return u.val()},getEditorSize:function(){return!c.hasClass(o)},setEditorSize:function(e,t){e===!0?(c.removeClass(o),d.removeClass(),d.addClass(a)):(c.addClass(o),d.removeClass(),d.addClass(s)),t!==!0&&this.watcher.modelUpdate()},toggleEditorSize:function(){this.setEditorSize(c.hasClass(o))},serialize:function(){var e={};return e[g]=this.getTextSize(),e[C]=this.getBorderRadius(),e[v]=this.getEditorSize(),e[p]=this.getColor(p),e[b]=this.getColor(b),e[z]=this.getColor(z),e[m]=this.getColor(m),e},deserialize:function(e){$.isEmptyObject(e)&&(e=x),this.setTextSize(e[g],!0),this.setBorderRadius(e[C],!0),this.setEditorSize(e[v],!0),t=e[p],this.setColor(b,e[b],!0),this.setColor(p,e[p],!0),this.setColor(z,e[z],!0),this.setColor(m,e[m],!0)}}}(),i=function(){return{model:null,view:null,init:function(e,t){this.model=e,this.view=t;var i=e.load();t.setWatcher(this),t.setup(),t.deserialize(i)},modelUpdate:function(){this.model.save(t.serialize())}}}();i.init(e,t)});