function dec_bin(nb){
    var tab=[],
        x,
        i=0,
        result=0;
    x=nb;

    for (i=0;i<8;i++){
        if (x>0){
            tab[i]=x%2;
            x=parseInt(x/2);           
        }
        else{
            tab[i]=0
        }
    }
    
    for (i=7;i>=0;i--){
        result +=Math.pow(10,i)*tab[i];       
    }
    return result;
}
function bin_dec(nb){
    nb=nb.toString()
    var i,
        rang=nb.length,
        result=0;
    for(i=rang-1;i>=0;i--){
            result += parseInt(nb.charAt(i))* Math.pow(2,rang-i-1);
            console.log(result)       
    }    
    return result;
}
function rest(nb){
    var result;
    if (nb===10){
        result="A";
    }
    else if (nb===11){
        result ="B";
    }
    else if (nb===12){
        result ="C";
    }
    else if (nb===13){
        result ="D";
    }
    else if (nb===14){
        result ="E";
    }
    else if (nb===15){
        result ="F";
    }
    return result;
}
function rest_inverse(nb){
    var result;
    if (nb==="A"){
        result=10;
    }
    else if (nb==="B"){
        result =11;
    }
    else if (nb==="C"){
        result =12;
    }
    else if (nb==="D"){
        result =13;
    }
    else if (nb==="E"){
        result =14;
    }
    else if (nb==="F"){
        result =15;
    }
    return result;
}
function dec_hex(nb){
    var tab=[],
        x,
        i=0,
        result=0;
    x=nb;

    for (i=0;i<4;i++){
        if (x>0){
            if (parseInt(x%16)>9){
                tab[i]=rest(parseInt(x%16));
            }
            else{
                tab[i]=parseInt(x%16);
            }
            x=parseInt(x/16);           
        }
        else{
            tab[i]=0
        }
    }
    result=(tab.reverse()).join('');
    return result;
}
function hex_dec(nb){
    nb=nb.toString()
    var result=0;
    var i ;
    for (i=0;i<nb.length;i++){
        if (rest_inverse(nb.charAt(i))){
            result +=parseInt(rest_inverse(nb.charAt(i)))*Math.pow(16,nb.length-1-i);
        }
        else{
            result +=parseInt(nb.charAt(i))*Math.pow(16,nb.length-1-i)  ;
        }
    }
    return result;
}

var ID = document.getElementById.bind(document);

let form = ID("formulaire");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let number = ID("number");
    let fonction = ID("fonction").value;
    let n = 0;
    let res = 0;
    if(fonction === 'dec_bin'){
        n = parseInt(number.value)
        res = dec_bin(n);
    } else if(fonction === 'bin_dec'){
        n = parseInt(number.value)
        res = bin_dec(n);
    } else if(fonction === 'dec_hex'){
        n = parseInt(number.value)
        res = dec_hex(n);
    } else if(fonction === 'hex_dec'){
        n = number.value
        res = hex_dec(n);
    }

    ID("res").innerHTML = res;
}, false);