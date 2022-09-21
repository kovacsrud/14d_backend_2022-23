const fetch=require('cross-fetch');

console.log("Uj");

let ujtermek={
    "id":429,
    "termeknev":"switch",
    "marka":"TpLink"
}

async function ujAdat(){
    const request=await fetch("http://localhost:8000/ujtermek",
    {
        method:'POST',
        Headers:{'Content-Type':'application/json'},
        body:JSON.stringify({"id":429,"termeknev":"switch","marka":"Tplink"})

    });
     
    const response=await request.json();

    console.log(response);

}

ujAdat();

/*fetch('http://localhost:8000/ujtermek',{
    method:'POST',
    Headers:{'Content-type':'application/json'},
    body:JSON.stringify(ujtermek)    
}).then(res=>res.json()).then(res=>console.log(res));*/