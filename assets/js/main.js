const app = new Vue ({
    el: "#app",

    data: {
        newTask: "",
        tasks: [
            "controllare la to-do list", 
            "capovolgere il criceto", 
            "guardare i fiori",
        ],
        doneList: [],
        
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
            this.tasks.splice(index, 1);

        },

        //cambiano tutti invece che solo uno
        completeTask(index) {
            var taskCompleted = this.tasks.splice(index, 1);
            this.doneList.push(taskCompleted);
            
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

