$.fn.keypress = function(options){
	var el = $(this);
  var keys = {8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"escape",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"leftarrow",38:"uparrow",39:"rightarrow",40:"downarrow",45:"insert",46:"delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",91:"left",92:"right",93:"select",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"multiply",107:"add",109:"substract",110:"decimalpoint",111:"divide",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scrolllock",186:"semi-colon",187:"equalsign",188:"comma",189:"dash",190:"period",191:"forwardslash",192:"graveaccent",219:"openbracket",220:"backslash",221:"closebacket",222:"singlequote"};

  function valueExist(needle,obj){
    var found = false;
    $.each(obj,function(key,value){
      if(value === needle){ found = true; }
    });
    if(found){ return true; } else { return false; }
  }

  $.each(options,function(key){
    if(valueExist(key,keys)){
      el.on('keyup',function(e){
        if(keys[e.keyCode] == key){
          if(typeof options[key] === "function"){
            options[key]();
          } else {
            return options[key];
          }
        }
      });
    } else { console.log(key + ' is not a valid key to press'); }
  });
};
