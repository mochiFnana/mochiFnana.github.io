
var ms = 5;

wal("wall1","95","145",80);
wal("wall2","110","145",(-174));
wal("wall3",85,205,(-174),145);
wal("wall4",145,146,30,204);

/*

1 = [object]
2 = [width]
3 = [height]
4 = [left]
5 = [top]

*/

var plyr = doc("player");

  var pt = plyr.offsetTop;
  var pl = plyr.offsetLeft;
  
  var t = [];
  
  setInterval(()=>{
    console.log();
    plyr.style.top=pt+"px";
    plyr.style.left=pl+"px";
    if(t[0]==1){
      //top
      if((pt+10)<=145&&(pl+10)>=80||(pl+10)<=(-175+120)&&(pt+10)<=145||pt<=0){
        pt=pt;
      }else{
      pt--;
      }
    }else if(t[0]==2){
      //down
      if(pt>=(204-20)&&pl>=20||pt>=(350-20)){
        pt=pt;
      }else{
        pt++;
      }
    }else{
      pt=pt;
    }
    if(t[0]==3){
      //left 
      //pl<=(-175+111)&&(pt+10)<=142||pl<=(-175+85)
      if(left_mov("wall2","player","up")||left_mov("wall3","player","down")){
        pl=pl;
      }else{
        pl--;
      }
    }else if(t[0]==4){
      //right
      if((pl+10)>=79&&(pt+10)<=142||(pl+10)>=29&&(pt+10)>=196||pl>=166){
        pl=pl;
      }else{
        pl++;
      }
    }else{
      pl=pl;
    }
  },ms);
  niii=(q)=>{
    t[0]=q;
  };
  chan=()=>{
    t[0]=0;
  };