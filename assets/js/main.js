const app = new Vue ({
    el: "#app",

    data: {
        newTask: "",
        colorClass: "",
        tasks: [
            "controllare la to-do list", 
            "capovolgere il criceto", 
            "guardare i fiori"
        ],
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

        //cambiano tutti inece che solo uno
        changeColor(index) {
            this.colorClass = "color_green"
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

