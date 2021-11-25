const indexedDB = window.indexedDB 
const form = document.getElementById('form')
const dbmanager={};
let db ;

//if(!indexedDB)return;

       const request = indexedDB.open('tasksList',1)
    request.onsuccess = ()=>{
        db = request.result
        console.log('OPEN',db)
    }
    request.onupgradeneeded = ()=>{
        db = request.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks',{
            autoIncrement: true
        })
    }
    request.onerror = (error) => {
        console.log('Error', error)
    }
dbmanager.addData = (data) => {
        let transaction = db.transaction(['tasks'],
        'readwrite')
        let objectStore = transaction.objectStore('tasks')
        let request = objectStore.add(data)

    }
export default dbmanager;




