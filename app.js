let todo = [];
let req = prompt("Enter your request");

while (true) {
    if (req == "quit") {
        console.log("QUITTING APP");
        break;
    }

    else if (req == "list") {
        console.log("----- TO DO LIST -----");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
    }

    else if (req == "add") {
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    }

    else if (req == "delete") {
        let idx = parseInt(prompt("Enter the task index"));
        todo.splice(idx, 1);
        console.log("Task deleted");
    }

    else {
        console.log("Invalid request");
    }

    req = prompt("Enter your request");
}
