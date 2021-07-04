// DOM function
doc=(a)=>document.getElementById(a);

// mengedit tembok function
wal=(a,b,c,d,e)=>{
  doc(a).style.position="absolute";
  doc(a).style.width=(b/2)+"px";
  doc(a).style.height=(c/2)+"px";
  doc(a).style.left=(d/2)+"px";
  doc(a).style.top=(e/2)+"px";
};

// batasan antara player dengan tembok (agar tidak
// tembus masuk ke tembok) function
block=(object,player)=>{
  var bool;
  var p = doc(player);
  var o = doc(object);
  var pl = p.offsetLeft;
  var pt = p.offsetTop;
  var ph = p.offsetHeight;
  var pw = p.offsetWidth;
  var ol = o.offsetLeft;
  var ot = o.offsetTop;
  var oh = o.offsetHeight;
  var ow = o.offsetWidth;
  if((pt+ph)>(ot-1)&&pt<(ot+oh)&&(pl+pw)>ol&&pl<(ol+ow)){
    bool = 1;
  }else if((pt+ph)>ot&&pt<(ot+(oh+1))&&(pl+pw)>ol&&pl<(ol+ow)){
    bool = 2;
  }else if((pt+ph)>ot&&pt<(ot+oh)&&(pl+pw)>(ol-1)&&pl<(ol+ow)){
    bool = 3;
  }else if((pt+ph)>ot&&pt<(ot+oh)&&(pl+pw)>ol&&pl<(ol+(ow+1))){
    bool = 4;
  }else{
    bool = 10;
  }
  return bool;
};
b_arena=(A,P)=>{
  var bool;
  var p = doc(P);
  var o = doc(A);
  var pl = p.offsetLeft;
  var pt = p.offsetTop;
  var ph = p.offsetHeight;
  var pw = p.offsetWidth;
  var ol = o.offsetLeft;
  var ot = o.offsetTop;
  var oh = o.offsetHeight;
  var ow = o.offsetWidth;
  if(pt<(ot-ot)){
    bool = 2;
  }else if((pt+ph)>((ot-ot)+oh)){
    bool = 1;
  }else if(pl<(ol-ol)){
    bool = 4;
  }else if((pl+pw)>((ol-ol)+ow)){
    bool = 3;
  }else{
    bool = 10;
  }
  return bool;
};