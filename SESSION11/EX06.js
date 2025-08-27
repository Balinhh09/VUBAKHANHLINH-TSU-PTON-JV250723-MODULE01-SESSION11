let a = Number(prompt("Mời bạn nhập vào số a"));
let b = Number(prompt("Mời bạn nhập vào số b"));
let operators = prompt("Mời bạn nhập vào các phép tính (+,-,*,/)");

switch (operators) {
    case "+":
        let result1 = a + b;
        alert(`Kết quả của phép tính trên: ${a} + ${b} = ${result1}`);
        break;
    case "-":
        let result2 = a - b;
        alert(`Kết quả của phép tính trên: ${a} - ${b} = ${result2}`);
        break;
    case "*":
        let result3 = a * b;
        alert(`Kết quả của phép tính trên: ${a} * ${b} = ${result3}`);
        break;
    case "/":
        let result4 = a / b;
        alert(`Kết quả của phép tính trên: ${a} / ${b} = ${result4}`);
        break;
    default:
        alert(`Không có phép tính này. Vui lòng nhập phép tính khác.`);
        break;
}
