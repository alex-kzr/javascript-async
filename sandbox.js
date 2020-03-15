const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }else if(request.readyState === 4){
            // console.log();
            callback('could not fetch the data', undefined);
        } 
    });

    request.open('GET', resource);
    request.send();
};

// getTodos('todos/alex.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/luigi.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/mario.json', (err, data) => {
//             console.log(data);    
//         });    
//     });   
// });

// promise example
const getSomething = () => {
    return new Promise((resolve, reject) => {
        // fetch something
        resolve('some data');
        //reject('some error');
    });
};

// getSomething().then(data => {
//     console.log(data);
// }, error => {
//     console.log(error);
// });

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});