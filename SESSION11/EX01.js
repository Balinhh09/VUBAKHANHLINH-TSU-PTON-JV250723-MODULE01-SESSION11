let year = +prompt('Nhập vào năm bất kỳ muốn kiểm tra: ');

if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    alert(year + ' là năm nhuận.');
} else {
    alert(year + ' KHÔNG phải là năm nhuận.');
}