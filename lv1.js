/*

1 = ID 

2 = width

3 = height

4 = left 

5 = top

*/

var ms = 22.4;

wal("wall1","95","145",80);

wal("wall2","110","145",(-174));

wal("wall3",85,205,(-174),145);

wal("wall4",145,146,30,204);

console.log(doc("wall2").offsetWidth);

var plyr = doc("player");

  var pt = plyr.offsetTop;

  var pl = plyr.offsetLeft;

d=()=>{

  doc("d").disabled=true;

  doc("l").disabled=true;

  doc("r").disabled=true;

  doc("t").disabled=true;

  var top = setInterval(()=>{

  

    

    plyr.style.top=pt+"px";

    

    console.log(pl+"\n"+pt);

    if(pt>=(204-30)&&pl>=25||pt>=(350-30)){

      plyr.style.top=pt+"px";

      clearInterval(top);

    }else{

    pt++;

    }

    

  },ms);

    setTimeout(()=>{

      clearInterval(top);

      doc("d").disabled=false;

      doc("l").disabled=false;

      doc("r").disabled=false;

      doc("t").disabled=false;

    }, 500);

};

t=()=>{

  doc("d").disabled=true;

  doc("l").disabled=true;

  doc("r").disabled=true;

  doc("t").disabled=true;

  var top = setInterval(()=>{

  

    

    plyr.style.top=pt+"px";

    console.log(pl+"\n"+pt);

    if((pt+10)<=139&&(pl+10)>=80||(pl+10)<=(-175+120)&&(pt+10)<=139||pt<=0){

      plyr.style.top=pt+"px";

      clearInterval(top);

    }else{

    pt--;

    }

    

  },ms);

    setTimeout(()=>{

      clearInterval(top);

      doc("d").disabled=false;

      doc("l").disabled=false;

      doc("r").disabled=false;

      doc("t").disabled=false;

    }, 500);

};

l=()=>{

  doc("d").disabled=true;

  doc("l").disabled=true;

  doc("r").disabled=true;

  doc("t").disabled=true;

  var left = setInterval(()=>{

  

    

    plyr.style.left=pl+"px";

    

    console.log(pl+"\n"+pt);

    

    if(pl<=(-175+111)&&(pt+10)<=138||pl<=(-175+85)){

      plyr.style.left=pl+"px";

      clearInterval(left);

    }else{

    pl--;

    }

    

  },ms);

    setTimeout(()=>{

      clearInterval(left);

      doc("d").disabled=false;

      doc("l").disabled=false;

      doc("r").disabled=false;

      doc("t").disabled=false;

    }, 500);

};

r=()=>{

  doc("d").disabled=true;

  doc("l").disabled=true;

  doc("r").disabled=true;

  doc("t").disabled=true;

  var right = setInterval(()=>{

  

    

    plyr.style.left=pl+"px";

    

    

    console.log((pl+10)+"\n"+pt);

    if((pl+10)>=79&&(pt+10)<=135||(pl+10)>=29&&(pt+10)>=204||pl>=166){

      plyr.style.left=pl+"px";

      clearInterval(right);

    }else{

    pl++;

    }

  },ms);

    setTimeout(()=>{

      clearInterval(right);

      doc("d").disabled=false;

      doc("l").disabled=false;

      doc("r").disabled=false;

      doc("t").disabled=false;

    }, 500);

};
