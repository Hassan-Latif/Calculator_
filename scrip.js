let flag=0
let flag_1=0

function clearScreen(){
    document.getElementById('result').value = " ";
}

function displayOnScreen(val){
    if (flag===1){
        clearScreen();
        flag=0
}
    document.getElementById('result').value += val
}

function calculate(){
    try{
        answer=eval(document.getElementById('result').value)
       
        if (answer===undefined &&  typeof(document.getElementById('result').value)!='number'){
            //
        }
        else if(answer===undefined){
            document.getElementById('result').value='Syntax Error'   
            flag=1
        }
        else{
        document.getElementById('result').value=answer
        flag=1
        }
        
    }
    catch(err) {
        document.getElementById("result").value = 'Syntax Error';
        flag=1
      }
}

document.getElementById('result').addEventListener("keypress",function(e){
    if (flag_1==1){
        if (e.key!=='Enter'){
        clearScreen()
        flag_1=0
    }
        
}
    if (e.key === 'Enter'){
        calculate()
        flag_1=1
}})


  
  