const express=require('express');
const cors=require('cors');
const fetch=require('cross-fetch');
const csvtojson=require("csvtojson");

//Töltsük le a fájlt és szolgáljuk ki, de úgy hogy a fájlból
//lehessen kiszűrni adatokat, ha azt akarjuk

async function run(){
const app=express();
app.use(cors());

const response=await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
const pokeData=await response.json();

//https://datacatalog.tusla.ie/dataset/fb8309fa-e48f-4747-a5b9-58d7120549f5/resource/f3ad45b4-5145-46db-b007-a933ed5386c6/download/no-of-children-active-on-the-cpns-0-to-6-months-2022.csv
const catalogRes=await fetch('https://datacatalog.tusla.ie/dataset/fb8309fa-e48f-4747-a5b9-58d7120549f5/resource/f3ad45b4-5145-46db-b007-a933ed5386c6/download/no-of-children-active-on-the-cpns-0-to-6-months-2022.csv');
const catalogData=await catalogRes.text();

const jsonCatalogData=await csvtojson().fromString(catalogData);

app.get('/',(req,res)=>{
    res.json(pokeData);
});

app.get('/catalog',(req,res)=>{
    res.json(jsonCatalogData);
})



app.listen(8000,()=>console.log("Running"));

}

run();
