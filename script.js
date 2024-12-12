document.getElementById("operation_result").onclick = function(){
    let a = document.getElementById("first1").ariaValueMax;
    let b = document.getElementById("second2").ariaValueMax;
    let c;
    if(document.getElementById("plus").checked) {
        c= Number(a)+Number(b);
    }else if(document.getElementById("minus").checked){
        c=a-b
    }else if(document.getElementById("div").checked){
        c=a/b
    }else if(document.getElementById("mult").checked){
        c=a*b
    }else{
        c="Операцію не було обрано";
    }
    document.getElementById("result").textContent = 'Відповідь: ${c}'
}
