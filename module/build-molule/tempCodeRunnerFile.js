console.log(fs)
fs.writeFile('new-demo-file.txt', "My name is Md. Omar Faruk", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successful");
    }
});