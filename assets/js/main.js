const app = new Vue ({
    el: "#app",

    data: {
        newTask: "",
        tasks: [
            "controllare la to-do list", 
            "capovolgere il criceto", 
            "guardare i fiori",
            "spazzolare il coccodrillo"
        ],
        doneList: [],
        erasedList: [],
        
    },

    methods: {

        addTask() {

            if (this.newTask.length < 5) {
                alert("troppo corta")
            } else {
                this.tasks.push(this.newTask);
                this.newTask = ""
            }
            
        },

        removeTask(index) {
            var taskErased = this.tasks.splice(index, 1);
            this.erasedList.push(taskErased[0]);
            console.log(this.erasedList);
        },

        //cambiano tutti invece che solo uno
        completeTask(index) {
            var taskCompleted = this.tasks.splice(index, 1);
            this.doneList.push(taskCompleted[0]);
        },

        returnTask(index) {
            var notCompleted = this.doneList.splice(index, 1);
            this.tasks.push(notCompleted);
        },

        deleteTask() {
            let confirm = prompt("Vuoi davvero svuotare il cestino? Se sì, premi 'Y'!");
            if (confirm.toLowerCase() === "y") {
                this.erasedList = []
            }
            
        },

        returnDeleteTask(index) {
            var notDeleted = this.erasedList.splice(index, 1);
            this.tasks.push(notDeleted);
        }

    },

    mounted () {
        document.addEventListener("keyup", (event) => {
            if (event.key == "Enter") {
                this.addTask();
            } 
        });

    },

})

