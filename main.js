const todo_list = [
    {    
        name: 'Janice',
        Todo: [
            'Eggs',
            'Bread',
            'Cereal'
        ]
    },
    {    
        name: 'Velma',
        Todo: [
            'Cheese',
            'Ramen',
            'Pizza'
        ]
    },
    {    
        name: 'Daphne',
        Todo: [
            'Rolls',
            'Nuggets',
            'Toilet_Paper'
        ]
    }
]

const peopleContainer = document.getElementById('people')
for (const todo_lists of todo_list){
    peopleContainer.innerHTML += `
        <div class="card">
            <h2>${todo_lists.name}<h2>            
            <ol>Todo_list: ${todo_lists.todo}</ol>
        </div>
    `
}