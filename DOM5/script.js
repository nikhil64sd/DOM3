
let urls = [
    "https://reqres.in/api/users/2",
    "https://reqres.in/api/users/1",
    "https://reqres.in/api/users/3999",
]
let request = urls.map(function(url){
   return  fetch(url);
})
Promise.all(request)
.then(function(responses){
    return Promise.all(responses.map(function(res){
       return  res.json();
    }))
})
.then(function(dataArray){
    dataArray.forEach(function(el){
        console.log(el.data)
        if(el.data != undefined){
            document.write(`<h1>${el.data.first_name}</h1>`)
            document.write(`<h1>${el.data.last_name}</h1>`)
            document.write(`<h1>${el.data.email}</h1>`)
            document.write(`<h1>${el.data.id}</h1>`)
            document.write(`<img src = ${el.data.avatar}>`)
        }
    })
})
.catch(function(error){
    console.log(error)
})


// Program 2
const timeOut = new Promise(function(_,reject){
    setTimeout(function(){
        reject("Time exceed")
    },5)

})
function getUser(id){
   return  fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
       return  res.json()
    })
}

Promise.race([timeOut,getUser(2)])
.then(function(res){
    console.log(res)
})
.catch(function(error){
    console.log(error)
})
Promise.allSettled([timeOut,getUser(2)])
.then(function(res){
    console.log(res)
})

Promise.any([getUser(1),timeOut,getUser(2)])
.then(function(res){
    console.log(res)
})









