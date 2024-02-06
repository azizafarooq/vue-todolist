const app = Vue.createApp({
    data() {
        return {
            title: "To Do List",
            todos: [],
            newTask: ""
        };
    },
    methods: {
        addTask() {
            if (this.newTask !== "") {
                this.todos.push({ text: this.newTask, done: false });
                this.newTask = "";
            }
        },
        removeTask(index) {
            this.todos.splice(index, 1);
        },
        marked(index) {
            this.todos[index].done = true;
        }
    }
});
app.mount('#app');
