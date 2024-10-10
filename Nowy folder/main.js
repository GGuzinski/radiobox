function funkcja(){
    let p = "" 
    licznik = 0;
    for(let i=0;i<document.forms.Formularz.muzyka.length;i++){
        if(document.forms.Formularz.muzyka[i].checked){
            p+= document.forms.Formularz.muzyka[i].value;licznik++}
            
        }
        document.getElementById("cos").innerHTML= p+" "+licznik;
    }
