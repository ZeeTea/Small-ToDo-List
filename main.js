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
            <ul>
                <li>${todo_lists.Todo[0]}<li>
                <li>${todo_lists.Todo[1]}<li>
                <li>${todo_lists.Todo[2]}<li>
            </ul>
        </div>
    `
}