//writeFile()                     writeFileSync()
//appendFile( )
//readFile()
//rename()
//unlink()
//Exits()
const fs = required('fs')
console.log(fs)
fs.writeFile('new-demo-file.txt', "My name is Md. Omar Faruk", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successful");
    }
});
// appen file means add new information 
fs.appendFile('new-demo-file.txt', " Id : 190605 registration: 1065330", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successful");
    }
});

// read file
fs.readFile('new-demo-file.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

rename
fs.rename('new-demo-file.txt', 'newName', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Successful')
    }
})

// delete--- unlink
fs.unlink('newName', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Deleted')
    }
})
// Exists
fs.exists('newName', (exist) => {
    if (exist) {
        console.log(exist)
    } else {
        console.log("Not found")
    }
})