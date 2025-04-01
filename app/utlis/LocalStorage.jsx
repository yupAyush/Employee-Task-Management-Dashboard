const employee=[
  {
    "id": 1,
    "email": "john.doe@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Submit project report",
        "description": "Complete and submit the quarterly project report.",
        "date": "2025-04-05",
        "active": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "jane.smith@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Client presentation",
        "description": "Prepare slides and present to the client.",
        "date": "2025-04-06",
        "active": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "alice.jones@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Team feedback review",
        "description": "Collect feedback from the team for the new policy.",
        "date": "2025-04-08",
        "active": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "email": "bob.martin@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "System upgrade",
        "description": "Upgrade the systems to the latest software version.",
        "date": "2025-04-10",
        "active": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "charlie.brown@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Budget analysis",
        "description": "Analyze the budget proposals for Q2.",
        "date": "2025-04-15",
        "active": false,
        "completed": false,
        "failed": true
      }
    ]
  }
]


const admin=[ {
  "id": 1,
  "email": "admin@example.com",
  "password": "123",
  "role": "admin",
  "name": "System Admin"
}
]

export  const setLocalStorage=()=>{
  localStorage.setItem("employee",JSON.stringify(employee))
  localStorage.setItem("admin",JSON.stringify(admin))

}
export  const getLocalStorage=()=>{
  const data = localStorage.getItem("employee")
  console.log(data)
  
}