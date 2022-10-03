const fetch=require('cross-fetch');

let tanulo={
    "id":4,
    "nev":"Jolán",
    "kor":19
}

fetch('http://localhost:8000/tanulok',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(tanulo)
})
.then(res=>res.json())
.then(adat=>console.log(adat))
.catch(err=>console.log(err))

async function kuld(){
    const keres=await fetch('http://localhost:8000/tanulok',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(tanulo)
    })

    const valasz=await keres.json();

    console.log(valasz);
}

//kuld();