function greet() {
    console.log(this.name);
}

const user = { name: "Ahmed" };

const boundGreet = greet.bind(user);
boundGreet();
