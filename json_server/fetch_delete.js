const fetch=require('cross-fetch');

async function torol(){
    const keres=await fetch('http://localhost:8000/tanulok/4',{
        method:'DELETE'
    })

    //console.log(tanulo);
    const valasz=await keres.json();

    console.log(valasz);
}

torol();