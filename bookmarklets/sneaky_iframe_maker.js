(function(){
  let el = document.createElement("div");
  document.body.appendChild(el);
  el.innerHTML = "<div class = 'wawa_wrapper'>" +
    "<div class = 'wawa_hotbar wawa_one'>" +
      "<p> <span> Iframe source: </span> <br> <input class = 'wawa_url' type = 'url' value='https://'> </p> <p> <span> Bookmarklet script: </span> <br> <input class = 'wawa_js' type = 'text'> </p>" +
      "<button class = 'wawa_load'> Load </button> <button class = 'wawa_hide'> Hide </button>" +
    "</div>" +
    "<div class = 'wawa_hotbar wawa_two'>" +
    "<p><b> Keys: </b></p> <p> <span> Hide: </span> <br> <input class = 'wawa_key wawa_hide' type = 'text' value = 'i'> </p> <p> <span> Display: </span> <br> <input class = 'wawa_key wawa_display' type = 'text' value = 'j'> </p> <p> <span> Close: </span> <br> <input class = 'wawa_key wawa_close' type = 'text' value = 'k'> </p> <p> <span> Open: </span> <br> <input class = 'wawa_key wawa_open' type = 'text' value = 'l'> </p>" +
    "</div>" +
    "<div class = 'wawa_iframe'></div>" +
  "</div>";
  el.id = "simons_sneaky_iframe_maker";
  let el_url = el.querySelector("input.wawa_url");
  let el_js = el.querySelector("input.wawa_js");
  let el_iframe = el.querySelector("input.wawa_iframe");
  let el_load_btn = el.querySelector("button.wawa_load");
  let el_hide_btn = el.querySelector("button.wawa_hide");
  let keys = {
    el_hide: el.querySelector("input.wawa_key.wawa_hide"),
    el_display: el.querySelector("input.wawa_key.wawa_display"),
    el_close: el.querySelector("input.wawa_key.wawa_close"),
    el_open: el.querySelector("input.wawa_key.wawa_open")
  };
  let display_hotbar = function(){
    el.display = 'block';
  };
  let hide_hotbar = function(){
    el.display = 'none';
  };
  let display_iframe = function(){
    if(window.global_simons_sneaky_iframe){
      window.global_simons_sneaky_iframe.style.display = 'block';
    }
    else{
      let parent = el.querySelector(".wawa_iframe");
      window.global_simons_sneaky_iframe = document.createElement("iframe");
      window.global_simons_sneaky_iframe.src = el_url.value;
      parent.appendChild(window.global_simons_sneaky_iframe);
    }
    display_hotbar();
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
    window.global_simons_sneaky_iframe.style.display = 'none';
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
  let ctrl_down = false;
  let alt_down = false;
  onkeydown = function(e){
    if(e.key === "Alt"){
      alt_down = true;
    }
    if(e.key === "Control"){
      ctrl_down = true;
    }
    if(alt_down && ctrl_down){
      if(e.key === keys.el_hide.value){
        let just_in_case = window.onkeyup;
        window.onkeyup = null;
        setTimeout(function(){
          window.onkeyup = just_in_case;
        })
        hide_iframe();
      }
      if(e.key === keys.el_display.value){
        let just_in_case = window.onkeyup;
        window.onkeyup = null;
        setTimeout(function(){
          window.onkeyup = just_in_case;
        })
        display_iframe();
      }
      if(e.key === keys.el_close.value){
        let just_in_case = window.onkeyup;
        window.onkeyup = null;
        setTimeout(function(){
          window.onkeyup = just_in_case;
        })
        close_iframe();
      }
      if(e.key === keys.el_open.value){
        let just_in_case = window.onkeyup;
        window.onkeyup = null;
        setTimeout(function(){
          window.onkeyup = just_in_case;
        })
        open_iframe();
      }
    }
  };
  for(let i in keys){
    keys[i].onkeyup = function(e){
      this.value = e.key;
    }
  }
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
#simons_sneaky_iframe_maker:not(.this.selector.is.really.specific.gauranteeing.that.our.css.always.will.work.everywhere) iframe{width: 100%; height: 100%;}
    `;
  }
  if(window.global_simons_sneaky_iframe_maker_url){
    el_url.value = window.global_simons_sneaky_iframe_maker_url;
    el_url.onkeyup();
    display_iframe();
  }
})();
