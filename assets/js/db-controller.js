const idbPromised = idb.open('db_club', 1, upgradedDb => {
    if (!upgradedDb.objectStoreNames.contains('tb_clubs')) {
        upgradedDb.createObjectStore("tb_clubs", {keyPath: "id"});
    }
});


const saveClub = club => {
    return new Promise((resolve, reject) =>{
        idbPromised.then(db =>{
            const transaction = db.transaction("tb_clubs", `readwrite`);
            transaction.objectStore("tb_clubs").put(club);
            console.log(transaction);
            return transaction;
        })
        .then(transaction => {
            if(transaction.complete){
                resolve(true);
                //console.log("Berhasil disimpan");
                M.toast({html: 'Club Saved to Favorite', classes: 'green rounded'});
            }else{
                reject(new error(transaction.onerror))
            }
        })
    });
}

const getAllClub = () =>{
    return new Promise((resolve, reject) =>{
        idbPromised
        .then(db =>{
            const transaction = db.transaction("tb_clubs", `readonly`);
            return transaction.objectStore("tb_clubs").getAll();
        })
        .then(data =>{
            if(data !== undefined){
                resolve(data);
            }else{
                reject(new Error(transaction.onerror));
            }
        })
    });
}

const deleteClub = id => {
    return new Promise((resolve, reject) => {
        idbPromised
        .then(db =>{
            const transaction = db.transaction("tb_clubs", `readwrite`);
            transaction.objectStore("tb_clubs").delete(parseInt(id));
            return transaction;
        })
        .then(transaction =>{
            if(transaction.complete){
                resolve(true);
                console.log("Berhasil Dihapus");
                M.toast({html: 'Club Removed', classes: 'red rounded'});
            }else{
                reject(new Error(transaction.onerror));
            }
        })
    });
}