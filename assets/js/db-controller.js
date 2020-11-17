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
                console.log("Berhasil disimpan");
            }else{
                reject(new error(transaction.onerror))
            }
        })
    });
}