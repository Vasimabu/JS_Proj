
/*const path = require('path')


const pathType=path.basename
//console.log('path',pathType)
//console.log("directoryname",__dirname);
console.log("filename",__filename);
console.log('path',pathType)
*/
/*const test=require('./testFile')

console.log(test.testing())
*/
//ar lookit = test.anothertesting("Abu",18)
//test.anothertesting("Abu",18)
//console.log(lookit);
//console log not use its defined the undefined

//file system handling

/*const filefunction= async function hello(){
    let reading=await fs.readfile('./file/sample.txt','utf-8')
    console.log("reading",reading);
}*/

/*const { log } = require('console');
const fs = require('fs')

fs.readFile('./file/sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log("erroe is reading file",err);
    }
    else{
        console.log("content of a file",data);
    }
})

fs.writeFile('./file/writingfile.txt','this was the new file that we wrote',(err)=>{
    if(err){
        console.log("error in write file",err);
    }else{
        console.log("writing in a file is completed");
    }
})

//adding some data
fs.appendFile('./file/sample.txt','it was append a data',(err,data)=>{
    if(err){
        console.log('error in append file',err);
    }
    else{
        console.log('append in a file is completed',data);
    }
})
*/
//api
/*fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>res.json())
.then((msg)=>console.log(msg[0].setup,msg[0].punchline))
.catch((err)=>console.log(err))
*/
const fs=require('fs')
const { log } = require('console');
//  const filefunction=async function(){
//     let open= await fs.writefile('./file/mynewfile2.txt', 'w')
//     console.log("saved");
//   }
/*const filefunction= async function hello(){
    let reading=await fs.readfile('./file/sample1.txt','utf-8')
    console.log("reading",reading);
}

fs.writeFile('./file/writingfile.txt','this was the new file that we wrote',(err)=>{
    if(err){
        console.log("error in write file",err);
    }else{
        console.log("writing in a file is completed");
    }
})*/

/*const fs = require('fs');
const { promisify } = require('util');

const renameAsync = promisify(fs.rename);

renameAsync('./file/sample.txt', './file/myrenamedfile.txt')
  .then(() => {
    console.log('File Renamed!');
  })
  .catch((err) => {
    console.error('Error occurred while renaming the file:', err);
  });

  //const fs = require('fs');
*/
/*function unlinkFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err); // Reject the promise with the error
      } else {
        resolve(); // Resolve the promise if successful
      }
    });
  });
}

// Usage example:
unlinkFilePromise('mynewfile2.txt')
  .then(() => {
    console.log('File deleted successfully!');
  })
  .catch((err) => {
    console.error('Error occurred while deleting the file:', err);
  });

  const fs = require('fs');*/
 // const fs = require('fs');
/*function unlinkFile(filePath, callback) {
 fs.unlink(filePath, (err) => {
    if (err) {
      callback(err); // Pass the error to the callback
    } else {
      callback(null); // Indicate success to the callback
    }
  });
}

unlinkFile('./file/myrenamedfile.txt', (err) => {
    if (err) {
      console.error('Error occurred while deleting the file:', err);
    } else {
      console.log('File deleted successfully!');
    }
  });
*/






