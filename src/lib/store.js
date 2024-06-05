  import { writable } from 'svelte/store'

  function createTaskStore() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    
    const { subscribe, set, update } = writable(tasks || [])

    return {
      subscribe,
      addTask: (task) => update((tasks) => [...tasks, task]),
      editTask: (editedTask) =>
        update((tasks) =>
          tasks.map((task) => (task.id === editedTask.id ? editedTask : task))
        ),
      deleteTask: (id) =>
        update((task) => task.filter((task) => task.id !== id)),
      saveTasks: (tasks) =>
        update((tasks) => {
          localStorage.setItem('tasks', JSON.stringify(tasks))
          return tasks
        }),
        getTasks: () =>  {
          return localStorage.getItem('tasks')
        },
      clearTasks: () => set([]),

    }
  }
  
  export const taskStore = createTaskStore()
