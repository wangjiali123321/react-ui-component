const fs = require('fs')

// fs.stat('git.md',(err,status)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(status)
//     // console.log('jim'+status)
//     fs.writeFile('./git.md','jim'+status,()=>{
//       console.log('changed')
//     })
// })


let data =  fs.readFileSync('git.md','utf-8')
console.log('data',data)
fs.writeFile('./git.md','jim'+data,()=>{
       console.log('changed')
})