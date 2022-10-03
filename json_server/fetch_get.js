const fetch=require('cross-fetch');

fetch('http://localhost:8000/tanulok')
.then(res=>res.json())
.then(adat=>console.log(adat))
.catch(err=>console.log(err))

async function letolt(){

    const res=await fetch('http://localhost:8000/tanulok');
    const adat=await res.json();
    console.log(adat);

}

letolt();