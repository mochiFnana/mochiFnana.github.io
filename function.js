doc=(a)=>document.getElementById(a);
wal=(a,b,c,d,e)=>{
  doc(a).style.position="absolute";
  doc(a).style.background="#ffffff00";
  doc(a).style.width=b+"px";
  doc(a).style.height=c+"px";
  doc(a).style.left=d+"px";
  doc(a).style.top=e+"px";
};
left_mov=(object,playr,ucd)=>{
  var bool ;
  if(ucd=="up"&&doc(playr).offsetLeft<=(doc(object).offsetLeft+doc(object).offsetWidth)&&doc(playr).offsetTop<=((doc(object).offsetTop-11)+doc(object).offsetHeight)){
    bool=true;
  }else if(ucd=="down"&&doc(playr).offsetLeft<=doc(object).offsetLeft+doc(object).offsetWidth&&doc(playr).offsetTop>=(doc(object).offsetTop-doc(playr).offsetHeight)){
    bool=true;
  }else{
    bool=false;
  }
  return bool;
};