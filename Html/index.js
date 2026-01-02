function first() {
    console.log('First function');
    second();
    console.log('First function end');
}

function second() {
    console.log('Second function');
    third();
    console.log('Second function end');
}

function third() {
    console.log('Third function');
}

first();

// Call stack progression:
// 1. Global context
// 2. Global -> first()
// 3. Global -> first() -> second()
// 4. Global -> first() -> second() -> third()
// 5. Global -> first() -> second() (third() popped)
// 6. Global -> first() (second() popped)
// 7. Global (first() popped)