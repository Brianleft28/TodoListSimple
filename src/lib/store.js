import { writable } from "svelte/store";

function createTaskStore() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const { subscribe, set, update } = writable(tasks || []);

  return {
    subscribe,
    addTask: (task) => {
      const id = "task-" + Date.now();
      update((tasks) => [...tasks, { id, ...task }]);
    },
    editTask: (editedTask) =>
      update((tasks) =>
        tasks.map((task) => (task.id === editedTask.id ? editedTask : task))
      ),
    deleteTask: (id) => update((task) => task.filter((task) => task.id !== id)),
    saveTasks: () =>
      update((currentTasks) => {
        localStorage.setItem("tasks", JSON.stringify(currentTasks));
        return currentTasks;
      }),
    getTasks: () => {
      return localStorage.getItem("tasks");
    },
    clearTasks: () => set([]),
  };
}

export const taskStore = createTaskStore();
