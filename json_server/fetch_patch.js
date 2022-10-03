const fetch=require('cross-fetch');

let tanulo={
    "id":4,
    "nev":"Judit",
    "kor":19
}

fetch('http://localhost:8000/tanulok/4',{
    method:'PATCH',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(tanulo)
})
.then(res=>res.json())
.then(adat=>console.log(adat))
.catch(err=>console.log(err))

async function kuld(){
    const keres=await fetch('http://localhost:8000/tanulok/4',{
        method:'PATCH',
        Headers:{'Content-type':'application/json'},
        body:tanulo
    })

    //console.log(tanulo);
    const valasz=await keres.json();

    console.log(valasz);
}

//kuld();