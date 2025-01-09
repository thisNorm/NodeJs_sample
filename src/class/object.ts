// Pure JS (Vanilia JS) : Object only -> Protype-based programming

// object
let robot = {
    // Property(속성)
    name: "R2-D2",
    model: "AstroMech",
    status: "Active",

    // Method(행동)
    performTask: function (task: string) {
        console.log(`${this.name} is perfroming ${task}.`);
    },
    updateStatus: function (newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}`)
    }
}

// object2
let robot2 = {
    // Property(속성)
    name: "A2-A2",
    model: "Proto",
    status: "Active",

    // Method(행동)
    performTask: function (task: string) {
        console.log(`${this.name} is perfroming ${task}.`);
    },
    updateStatus: function (newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}`)
    }
}

// object3
let robot3 = {
    // Property(속성)
    name: "A1-AB2",
    model: "AD-22",
    status: "InActive",

    // Method(행동)
    performTask: function (task: string) {
        console.log(`${this.name} is perfroming ${task}.`);
    },
    updateStatus: function (newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}`)
    }
}

// usage with "." dot operator
console.log(robot.name) // Accessing Property
robot.performTask("Getting ready to move") // Calling Method


// 추가와 수정에 비효율적임