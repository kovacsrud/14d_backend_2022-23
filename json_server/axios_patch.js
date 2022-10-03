const axios=require('axios');

let ujtanulo={
    "id":5,
    "nev":"Elemér",
    "kor":21
}

axios.patch('http://localhost:8000/tanulok/5',ujtanulo)
.then(res=>console.log(res.data))
.catch(err=>console.log(err));