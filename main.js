const todo_list = [
    {    
        name: 'Janice',
        todo: [
            'Eggs',
            'Bread',
            'Cereal'
        ]
    },
    {    
        name: 'Velma',
        todo: [
            'Cheese',
            'Ramen',
            'Pizza'
        ]
    },
    {    
        name: 'Daphne',
        todo: [
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
            <ol>Skills: ${employee.skills}</ol>
        </div>
    `
    const employeeEl = document.getElementById(employees.id)
    employeeEl.addEventListener('click', function()
    {
        console.log('Hello')
    })
}

const employeeEl = document.getElementById(employees.id)