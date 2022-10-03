const axios=require('axios');

let ujtanulo={
    "id":5,
    "nev":"Egon",
    "kor":21
}

axios.post('http://localhost:8000/tanulok',ujtanulo)
.then(res=>console.log(res.data))
.catch(err=>console.log(err));