function greet() {
    console.log("Hello!");
}

function sayName(name) {
    console.log("My name is " + name);
    greet();  // استدعاء دالة greet
}

function introduce() {
    sayName("Alice");  // استدعاء دالة sayName
}

introduce();  // استدعاء الدالة الرئيسية