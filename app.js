let todo = [];
let req = prompt("Enter the your request");
while(true){
    if(req=="quit"){
        console.log("QUITTING APP");
        break;
    }
    if(req=="list"){
        console.log("-----TO DO LIST-----");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
    }
    if(req=="add"){
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    }
    if(req=="delete"){
        let idx = prompt("please enter the task index");
        todo. splice(idx, 1);
        console.log("Task deleted");
    }
    req = prompt("Enter the your request");
}

