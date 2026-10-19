// 1. دالة جانبية تفحص ما إذا كان الرقم الفردي أولي أم لا
function isPrime(num) {
    // الأعداد الأصغر من أو تساوي 1 ليست أرقاماً أولية
    if (num <= 1) return false;

    // نفحص القسمة من 2 وحتى جذر الرقم
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // يقبل القسمة، إذن ليس أولياً
        }
    }

    return true; // لم يقبل القسمة على أي رقم، إذن هو أولي
}

// 2. الدالة الرئيسية للبحث عن الأرقام الأولية داخل مصفوفة
function getPrimeNumbers(arr) {
    // filter تعني: اصنع مصفوفة جديدة تحتوي فقط العناصر التي تحقق شرط isPrime
    return arr.filter(isPrime);
}

// --- تجربة الكود ---
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17];
console.log(getPrimeNumbers(numbers)); 
// النتيجة المتوقعة: [2, 3, 5, 7, 11, 13, 17]