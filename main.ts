import inquirer from "inquirer";

async function main() {
let todos= [];
let condition = true;

    while (condition) {
        let  addTask = await inquirer.prompt([
            {
                name: 'todo',
                type: 'input',
                message: 'What do you want to add to your todo?'
            },
            {
                name: 'addMore',
                type: 'confirm',
                message: 'Do you want to add more?',
                default: false
            }
        ]);

        todos.push(addTask.todo);
        condition = addTask.addMore;
        console.log(todos);
    }
}

main();


