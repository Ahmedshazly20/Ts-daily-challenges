const Counter = (function () {
    let count = 0;

    function increment() { count++; }
    function decrement() { count--; }
    function getCount() { return count; }

    return { increment, getCount }; // decrement is private
})();