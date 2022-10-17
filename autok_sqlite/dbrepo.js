const allAuto=(db)=>{
    return new Promise((reject,resolve)=>{
        db.all("select * from autok",(error,rows)=>{
            if(error){
                reject(error);

            } else {
                if(rows.length>0){
                    resolve(rows);
                } else {
                    resolve({message:"Nincs ilyen adat!"})
                }
            }
            
        });

    });
}

const getAutoMarka=(db,marka)=>{
    return new Promise((reject,resolve)=>{
        db.all("select * from autok where lower(marka)=lower(?)",[marka],(error,rows)=>{
            if(error){
                reject({message:error});

            } else {
                if(rows.length>0){
                    resolve(rows);
                } else {
                    resolve({message:"Nincs ilyen adat!"})
                }
            }           
        });
    });
}

const ujAuto=(db,{rendszam,marka,tipus,szin,gyartasiev})=>{
    return new Promise((reject,resolve)=>{
        db.run("insert into autok values(?,?,?,?,?)",
        [rendszam,marka,tipus,szin,gyartasiev],
        error=>{
            if(error){
                reject(error);
            } else {
                resolve({message:"Új adat beszúrva!"});
            }

        });

    });
    
}

const updateAuto=(db,{rendszam,marka,tipus,szin,gyartasiev,old_rendszam})=>{
    return new Promise((reject,resolve)=>{
        db.run("update autok set rendszam=?,marka=?,tipus=?,szin=?,gyartasiev=? where rendszam=?",
        [rendszam,marka,tipus,szin,gyartasiev,old_rendszam],
        error=>{
            if(error){
                reject(error);
            } else {
                resolve({message:"Adat módosítva!"});
            }
        });
    });
}

const deleteAuto=(db,rendszam)=>{
    return new Promise((reject,resolve)=>{
        db.run("delete from autok where rendszam=?",
        [rendszam],
        error=>{
            if(error){
                reject(error);
            } else {
                resolve({message:"Adat törölve!"});
            }
        });
    });
}

module.exports={
    allAuto,
    getAutoMarka,
    ujAuto,
    updateAuto,
    deleteAuto
}