"use client"
const employee = [
  {
    id: 1,
    name: "Aarav",
    email: "aarav.kumar@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 1,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        title: "Submit project report",
        description: "Complete and submit the quarterly project report.",
        date: "2025-04-05",
        active: true,
        completed: false,
        failed: false,
        category:"report",
        newTask: true

      },
      {
        title: "Meeting preparation",
        description: "Prepare materials for the client meeting.",
        date: "2025-04-07",
        active: false,
        completed: true,
        failed: false,
        
        newTask: false,
        

        category:"meeting"
      },
    ],
  },
  {
    id: 2,
    name: "Ananya Sharma",
    email: "ananya.sharma@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 0
    },
    tasks: [
      {
        title: "Client presentation",
        description: "Prepare slides and present to the client.",
        date: "2025-04-06",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        category:"presentation"
      },
      {
        title: "Budget proposal analysis",
        description: "Analyze the proposal for potential risks.",
        date: "2025-04-09",
        active: false,
        completed: true,
        failed: true,
        newTask: false,
        category:"budget"
      },
    ],
  },
  {
    id: 3,
    name: "Rohan Verma",
    email: "rohan.verma@example.com",
    password: "123",
    taskCount: {
      active: 0,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        title: "Team feedback review",
        description: "Collect feedback from the team for the new policy.",
        date: "2025-04-08",
        active: true,
        completed: true,
        failed: true,
        newTask: false,
        category:"feedback"
      },
      {
        title: "Policy revision draft",
        description: "Revise the draft based on collected feedback.",
        date: "2025-04-11",
        active: false,
        completed: true,
        failed: false,
        newTask: true,
        category:"policy"
      },
    ],
  },
  {
    id: 4,
    name: "Meera Joshi",
    email: "meera.joshi@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 0,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        title: "System upgrade",
        description: "Upgrade the systems to the latest software version.",
        date: "2025-04-10",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        category:"upgrade"
      },
      {
        title: "Backup recovery testing",
        description: "Test the system recovery process.",
        date: "2025-04-12",
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        category:"backup"
      },
    ],
  },
  {
    id: 5,
    name: "Ishita Singh",
    email: "ishita.singh@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 1,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        title: "Budget analysis",
        description: "Analyze the budget proposals for Q2.",
        date: "2025-04-15",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        category:"budget"
      },
      {
        title: "Initial data review",
        description: "Review the collected data for budget analysis.",
        date: "2025-04-16",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        category:"data"
      },
    ],
  },
];

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

export const getLocalStorage=()=>{
  const e =localStorage.getItem("employee")
  const a=localStorage.getItem("admin")
  return {e}
}