flag=0
f=0
function cle_scr(){
    document.getElementById('result').value = " ";
}

function disp(val){
    if (flag===1){
        cle_scr();
        flag=0
}
    document.getElementById('result').value += val
}

function calculate(){

    try{
        console.log(typeof(document.getElementById('result').value))
        console.log(document.getElementById('result').value)
        q=eval(document.getElementById('result').value)
        document.getElementById('result').value=q
        flag=1
        
    }
    catch(err) {
        document.getElementById("result").value = 'Syntax Error';
        flag=1
      }
}
document.getElementById('result').addEventListener("keypress",function(e){
    if (f==1){
        if (e.key!=='Enter'){
        cle_scr()
        f=0
    }
        
}
    if (e.key === 'Enter'){
        
        calculate()
        f=1
}})


  
  