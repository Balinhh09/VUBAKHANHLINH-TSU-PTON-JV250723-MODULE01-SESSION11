let weigh = parseFloat(prompt("Nhập vào cân nặng (kg): "));
let height = parseFloat(prompt("Nhập vào chiều cao (m): "));
let bodyMassIndex = weigh / (height * height);
let result = bodyMassIndex.toFixed(1);

if (isNaN(weigh) || isNaN(height) || weigh < 0 || height < 0) {
    alert("Dữ liệu không hợp lệ. Vui lòng nhập lại.");
} else {
    if (bodyMassIndex < 18.5) {
        alert(`Chỉ số BIM là: ${result} - Cân nặng thấp (gầy)`);
    } else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9) {
        alert(`Chỉ số BIM là: ${result} - Bình thường`);
    } else if (bodyMassIndex >= 25 && bodyMassIndex <= 29.9) {
        alert(`Chỉ số BIM là: ${result} - Tiền béo phì`);
    } else if (bodyMassIndex >= 30 && bodyMassIndex <= 34.9) {
        alert(`Chỉ số BIM là: ${result} - Béo phì độ I`);
    } else if (bodyMassIndex >= 35 && bodyMassIndex <= 39.9) {
        alert(`Chỉ số BIM là: ${result} - Béo phì độ II`);
    } else if (bodyMassIndex >= 40) {
        alert(`Chỉ số BIM là: ${result} - Béo phì độ III`);
    }
}