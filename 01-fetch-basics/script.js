fetch('./movies.json').then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
})

//fetching a text file
fetch('./test.txt')
.then((res)=>res.text())
.then((data)=>console.log(data))

fetch('https://api.github.com/users/shantanusingh04')
.then((res)=>res.json())
.then((data)=>(document.querySelector('h1').textContent=data.login))