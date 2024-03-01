
const subBtn= document.getElementById('subBtn');
const ratenum = document.getElementById('ratenum');

const lblnum1 = document.getElementById('lblnum1');
const lblnum2 = document.getElementById('lblnum2');
const lblnum3 = document.getElementById('lblnum3');
const lblnum4 = document.getElementById('lblnum4');
const lblnum5 = document.getElementById('lblnum5');

let contty = document.getElementById('hidecontainer')
let fcontainer = document.getElementById('fcontainer')


subBtn.onclick = function(){
  if (contty.style.display ='none'){
    

    contty.style.display = 'flex';
    fcontainer.style.display = 'none';
  }
}


let num = 0;
lblnum1.onclick = function(){
  num = 1;
  ratenum.textContent=num;
  if (lblnum1.className == "lblnum"){
    lblnum1.className="lblhigh";
    lblnum2.className="lblnum";
    lblnum3.className="lblnum";
    lblnum4.className="lblnum";
    lblnum5.className="lblnum";
  }
  else{
      lblnum1.className="lblnum";
    }
  }

lblnum2.onclick = function(){
  num = 2;
  ratenum.textContent=num;
  if (lblnum2.className == "lblnum"){
    lblnum2.className="lblhigh";
    lblnum1.className="lblnum";
    lblnum3.className="lblnum";
    lblnum4.className="lblnum";
    lblnum5.className="lblnum";
  }
  else{
      lblnum2.className="lblnum";
    }
  }


lblnum3.onclick = function(){
  num = 3;
  ratenum.textContent=num;
  if (lblnum3.className == "lblnum"){
    lblnum3.className="lblhigh";
    lblnum1.className="lblnum";
    lblnum2.className="lblnum";
    lblnum4.className="lblnum";
    lblnum5.className="lblnum";
  }
  else{
      lblnum3.className="lblnum";
    }
}
lblnum4.onclick = function(){
  num = 4;
  ratenum.textContent=num;
  if (lblnum4.className == "lblnum"){
    lblnum4.className="lblhigh";
    lblnum1.className="lblnum";
    lblnum3.className="lblnum";
    lblnum2.className="lblnum";
    lblnum5.className="lblnum";
  }
  else{
      lblnum4.className="lblnum";
    }
}
lblnum5.onclick = function(){
  num = 5;
  ratenum.textContent=num;
  if (lblnum5.className == "lblnum"){
    lblnum5.className="lblhigh";
    lblnum1.className="lblnum";
    lblnum3.className="lblnum";
    lblnum4.className="lblnum";
    lblnum2.className="lblnum";
  }
  else{
      lblnum5.className="lblnum";
    }
}
