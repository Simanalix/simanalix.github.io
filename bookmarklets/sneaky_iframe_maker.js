(function(){
  window.global_simons_sneaky_iframe_maker_url = "https://simanalix.github.io/bookmarklets/sneaky_iframe_maker.html";

  let el = document.createElement("div");
  document.body.appendChild(el);
  el.innerHTML = "<div class = 'wawa_wrapper'>" +
    "<div class = 'wawa_iframe'></div>" +
  "</div>";
  el.id = "simons_sneaky_iframe_maker";
  let el_iframe = el.querySelector("input.wawa_iframe");
  let display_hotbar = function(){
  };
  let hide_hotbar = function(){
  };
  let display_iframe = function(){
    display_hotbar();
    if(window.global_simons_sneaky_iframe){
      window.global_simons_sneaky_iframe.style.display = 'block';
    }
    else{
      let parent = el.querySelector(".wawa_iframe");
      window.global_simons_sneaky_iframe = document.createElement("iframe");
      window.global_simons_sneaky_iframe.src = el_url.value;
      parent.appendChild(window.global_simons_sneaky_iframe);
    }
  };
  let close_iframe = function(){
    if(window.global_simons_sneaky_iframe){
      window.global_simons_sneaky_iframe.remove();
      window.global_simons_sneaky_iframe = null;
      display_hotbar();
    }
  };
  let open_iframe = function(){
    close_iframe();
    display_iframe();
  };
  let hide_iframe = function(){
    el.style.display = 'none';
    hide_hotbar();
  };
  
  window.global_simons_sneaky_iframe = false;
  
  el_url.onkeyup = function(){
    window.global_simons_sneaky_iframe = false;
    el_js.value = `(function(){
let s = document.createElement("script");
s.src = "https://simanalix.github.io/bookmarklets/sneaky_iframe_maker.js";
document.body.appendChild(s);
window.global_simons_sneaky_iframe_maker_url = "${el_url.value}";
    })();`;
  };
  el_load_btn.onclick = function(){
    open_iframe();
  };
  el_hide_btn.onclick = function(){
    hide_hotbar();
  };
  el_url.onkeyup = function(e){
    if(e.key === "Enter"){
      open_iframe();
    }
  }
  let ctrl_down = false;
  let alt_down = false;
  let s = document.createElement("style");
  document.body.appendChild(s);
  //s.innerHTML = ":not(.this.specific.selector.will.gaurantee.that.my.styles.are.applied)";
  if(true){
    let s = document.createElement("style");
    document.body.appendChild(s);
    s.innerHTML = `#simons_sneaky_iframe_maker, #simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere) *{
  margin: 0;
}

#simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere){
  width: 100%;
  height: 100%;
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  background: rgb(0,22,66);
  color: black;
  font-family: arial;
  font-size: 18px;
} 
#simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere) .wawa_hotbar{
  display: flex;
  padding: 1em;
  height: 3.1415928em;
  overflow: auto;
}
#simons_sneaky_iframe_maker .wawa_hotbar.wawa_one{
  background: rgb(10,220,90);
}
#simons_sneaky_iframe_maker .wawa_hotbar.wawa_two{
  background: rgb(220,170,20);
}
#simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere) .wawa_hotbar p{
  flex: 5;
}
#simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere) .wawa_hotbar button{
  flex: 2;
}
#simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere) p{
  display: relative;
  padding: 0.25em;
  border: 0.125em solid rgb(11,0,11);
}
#simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere) input{
  width: 8em;
}
#simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere) .wawa_two input{
  width: 4em;
}
#simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere) button{
  border-radius: 0vw;
  border: 0.25em double rgb(40,40,190);
  background: rgb(255,200,200);
}
#simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere) button:is(:focus,:hover){
  border-style: solid;
  background: rgb(255,180,180);
}
#simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere) button:active{
  background: rgb(244,150,150);
}
#simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere) iframe{width: 100vw; height: 100vh;}
    `;
  }
  if(window.global_simons_sneaky_iframe_maker_url){
    el_url.value = window.global_simons_sneaky_iframe_maker_url;
    el_url.onkeyup();
    display_iframe();
  }
})();
