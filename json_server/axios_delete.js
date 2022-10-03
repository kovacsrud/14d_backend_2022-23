const axios=require('axios');


axios.delete('http://localhost:8000/tanulok/5')
.then(res=>console.log(res.data))
.catch(err=>console.log(err));