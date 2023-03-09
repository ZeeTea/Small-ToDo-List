const todo_list = [
    {    
        name: 'Janice',
        skills: [
            'Eggs',
            'Bread',
            'Cereal'
        ]
    },
    {    
        name: 'Velma',
        skills: [
            'Cheese',
            'Ramen',
            'Pizza'
        ]
    },
    {    
        name: 'Daphne',
        skills: [
            'Rolls',
            'Nuggets',
            'Toilet_Paper'
        ]
    }
]

const peopleContainer = document.getElementById('people')
for (const employee of employees){
    peopleContainer.innerHTML += `
        <div class="card" id="${employee.id}">
            <h2>${employee.name}<h2>            
            <p>JobTitle: ${employee.jobTitle}</p>
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