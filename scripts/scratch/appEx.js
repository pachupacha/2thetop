// ===============================
//  DATA GLOBAL
// ===============================
const users = []
const tasks = []

const PRIORITIES = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
}

const VALID_PRIORITIES = Object.values(PRIORITIES)

// ===============================
//  HELPERS
// ===============================
const instanceCreation = () => new Date().toLocaleString()

// ===============================
//  CLASES
// ===============================
class User {
  constructor(name, email) {
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/u.test(name)) throw new Error('Invalid name (letters and spaces only)')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Invalid email format')

    this.id = crypto.randomUUID()
    this.name = name
    this.email = email
    this.accountSince = instanceCreation()
    this.isActive = true
    this.tasks = [] // guarda IDs de Task
  }

  addTaskId(taskId) {
    if (!this.tasks.includes(taskId)) {
      this.tasks.push(taskId)
    }
  }

  removeTaskId(taskId) {
    this.tasks = this.tasks.filter((id) => id !== taskId)
  }

  userTasks() {
    if (this.tasks.length === 0) {
      return `${this.name} has no tasks assigned.`
    }

    const lines = this.tasks.map((taskId, index) => {
      const task = tasks.find((t) => t.id === taskId)

      if (!task) {
        return `• [${index}] [MISSING TASK] id: ${taskId}`
      }

      return `• [${index}] ${task.taskInfo()}`
    })

    return lines.join('\n')
  }
}

class Task {
  constructor(title, description, priority = PRIORITIES.MEDIUM) {
    if (!title || !title.trim()) {
      throw new Error('Title is required')
    }
    if (!description || !description.trim()) {
      throw new Error('Description is required')
    }

    priority = priority.toUpperCase()

    if (!VALID_PRIORITIES.includes(priority)) {
      throw new Error(
        `The priority should be established between:\n•${PRIORITIES.LOW}\n•${PRIORITIES.MEDIUM}\n•${PRIORITIES.HIGH}`,
      )
    }

    this.id = crypto.randomUUID()
    this.title = title
    this.description = description
    this.priority = priority
    this.creation = instanceCreation()
    this.completed = false
  }

  vinculateTask(globalArray, user) {
    const isTaskInArray = globalArray.find((task) => task.id === this.id)
    const isTaskInUserArray = user.tasks.find((id) => id === this.id)

    !isTaskInArray && globalArray.push(this)
    !isTaskInUserArray && user.addTaskId(this.id)
  }

  completeTask() {
    this.completed = true
    return this
  }

  changePriority(input) {
    const upper = input.toUpperCase()
    if (!VALID_PRIORITIES.includes(upper)) {
      throw new Error(
        `The priority should be established between:\n•${PRIORITIES.LOW}\n•${PRIORITIES.MEDIUM}\n•${PRIORITIES.HIGH}`,
      )
    }
    this.priority = upper
    return this
  }

  taskInfo() {
    return `[${this.priority} - ${this.title} - ${this.description} - ${this.completed ? '✔' : '⛔'}]`
  }
}

// ===============================
//  UI: CREAR USUARIO CON PROMPTS
// ===============================
function createUserWithPrompts() {
  while (true) {
    try {
      const name = prompt('Enter user name:')
      if (name === null) return null

      const email = prompt('Enter user email:')
      if (email === null) return null

      const user = new User(name, email)
      alert('User created successfully!')
      return user
    } catch (err) {
      const retry = confirm(`Error creating user:\n${err.message}\n\nDo you want to try again?`)
      if (!retry) return null
    }
  }
}

// ===============================
//  UI: MENÚ DE SELECCIÓN DE USUARIO
// ===============================
function selectUserMenu() {
  while (true) {
    // Si no hay usuarios, ofrecer crear uno
    if (users.length === 0) {
      const createFirst = confirm('No users exist yet.\nDo you want to create the first user?')
      if (!createFirst) return null

      const newUser = createUserWithPrompts()
      if (!newUser) {
        alert('No user created. Exiting.')
        return null
      }
      users.push(newUser)
      return newUser
    }

    // Si ya hay usuarios, menú de login / crear / salir
    const option = prompt(
      'User panel:\n\n' + '1) Login as existing user\n' + '2) Create new user\n' + '3) Exit application\n\n' + 'Enter 1-3:',
    )

    if (option === null) return null

    switch (option.trim()) {
      case '1': {
        const list = users.map((u, idx) => `[${idx}] ${u.name} <${u.email}> (since ${u.accountSince})`).join('\n')

        const idxStr = prompt(`Select user index to login:\n\n${list}\n\nEnter index (0,1,2...):`)
        if (idxStr === null) break

        const idx = Number(idxStr)
        if (Number.isNaN(idx) || idx < 0 || idx >= users.length) {
          alert('Invalid index.')
          break
        }

        return users[idx]
      }
      case '2': {
        const newUser = createUserWithPrompts()
        if (newUser) {
          users.push(newUser)
          return newUser
        }
        break
      }
      case '3':
        return null
      default:
        alert('Invalid option. Please enter 1, 2, or 3.')
        break
    }
  }
}

// ===============================
//  UI: CREAR TASK CON PROMPTS
// ===============================
function createTaskWithPrompts(currentUser) {
  while (true) {
    try {
      const title = prompt('Task title:')
      if (title === null) return

      const description = prompt('Task description:')
      if (description === null) return

      const priority = prompt(`Task priority:\nAllowed: ${VALID_PRIORITIES.join(', ')}`)
      if (priority === null) return

      const task = new Task(title, description, priority)
      task.vinculateTask(tasks, currentUser)

      alert('Task created and linked to user!')
      return
    } catch (err) {
      const retry = confirm(`Error creating task:\n${err.message}\n\nDo you want to try again?`)
      if (!retry) return
    }
  }
}

// ===============================
//  UI: COMPLETAR UNA TASK
// ===============================
function completeTaskForUser(currentUser) {
  if (currentUser.tasks.length === 0) {
    alert('This user has no tasks.')
    return
  }

  const list = currentUser.userTasks()
  const indexStr = prompt(`Select the task index to COMPLETE:\n\n${list}\n\nEnter index (0,1,2...)`)
  if (indexStr === null) return

  const index = Number(indexStr)
  if (Number.isNaN(index) || index < 0 || index >= currentUser.tasks.length) {
    alert('Invalid index.')
    return
  }

  const taskId = currentUser.tasks[index]
  const task = tasks.find((t) => t.id === taskId)

  if (!task) {
    alert('Task not found (internal error).')
    return
  }

  task.completeTask()
  alert('Task marked as completed.')
}

// ===============================
//  UI: ELIMINAR UNA TASK DEL USUARIO
// ===============================
function removeTaskFromUser(currentUser) {
  if (currentUser.tasks.length === 0) {
    alert('This user has no tasks.')
    return
  }

  const list = currentUser.userTasks()
  const indexStr = prompt(`Select the task index to REMOVE from this user:\n\n${list}\n\nEnter index (0,1,2...)`)
  if (indexStr === null) return

  const index = Number(indexStr)
  if (Number.isNaN(index) || index < 0 || index >= currentUser.tasks.length) {
    alert('Invalid index.')
    return
  }

  const taskId = currentUser.tasks[index]
  currentUser.removeTaskId(taskId)

  const removeGlobal = confirm('Do you also want to remove this task from the global task list?')
  if (removeGlobal) {
    const idx = tasks.findIndex((t) => t.id === taskId)
    if (idx !== -1) tasks.splice(idx, 1)
  }

  alert('Task removed from user.')
}

// ===============================
//  MENÚ PRINCIPAL POR USUARIO
// ===============================
function mainMenu(currentUser) {
  if (!currentUser) {
    alert('No user logged in. Exiting.')
    return 'exit'
  }

  let exit = false

  while (!exit) {
    const option = prompt(
      `Welcome, ${currentUser.name}!\n\n` +
        `Choose an option:\n` +
        `1) View my tasks\n` +
        `2) Create new task\n` +
        `3) Complete a task\n` +
        `4) Remove a task\n` +
        `5) Exit application\n` +
        `6) Log out (switch user)\n\n` +
        `Enter 1-6:`,
    )

    if (option === null) return 'exit'

    switch (option.trim()) {
      case '1':
        alert(currentUser.userTasks())
        break
      case '2':
        createTaskWithPrompts(currentUser)
        break
      case '3':
        completeTaskForUser(currentUser)
        break
      case '4':
        removeTaskFromUser(currentUser)
        break
      case '5':
        alert('Goodbye!')
        return 'exit'
      case '6':
        alert('Logging out...')
        return 'logout'
      default:
        alert('Invalid option. Please enter a number between 1 and 6.')
        break
    }
  }
}

// ===============================
//  LOOP GENERAL DE LA APP
// ===============================
function runApp() {
  let running = true

  while (running) {
    const currentUser = selectUserMenu()
    if (!currentUser) {
      alert('Exiting application.')
      return
    }

    const action = mainMenu(currentUser)

    if (action === 'exit') {
      running = false
      alert('Application closed.')
    }
    // si action === "logout", vuelve al while y te deja elegir otro usuario
  }
}

// ===============================
//  ARRANQUE
// ===============================
runApp()
