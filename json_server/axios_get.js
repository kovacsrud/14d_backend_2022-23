const axios=require('axios');

axios.get('http://localhost:8000/tanulok')
.then(res=>console.log(res.data))
.catch(err=>console.log(err));