


//BÀI TẬP VỀ NHÀ
//Bài tập 1
/*Sơ đồ ba khổi
Khối 1:
- Có lương 1 ngày là 100.000
- Số ngày làm: 8 ngày
- Lương = lương 1 ngày * số ngày làm
Khối 2:
- Bước 1: Tạo biến dayCost dayWork và salary
- Bước 2: DOM đến lấy giá trị số ngày làm
- Bước 3: Áp dụng công thức như trên khối 1 để tính lương
- Bước 4: Hiển thị ra màn hình tiền lương
Khối 3:
- Tổng lương là: */

function salary(){
    var dayCost = +document.getElementById("salaryPerday").value
    var dayWork = +document.getElementById("dayWork").value;
    var salary = dayCost * dayWork;
    document.getElementById("salary").innerHTML = "Tiền lương tháng này của bạn là: " + salary;
}


//Bài tập 2
/*Sơ đồ ba khối
Khối 1:
- Người dùng nhập vào năm số thực
- Trung bình cộng của năm số bằng tổng của năm số này chia cho 5
Khối 2:
- Bước 1: Tạo biến num1, num2, num3, num4, num5
- Bước 2: DOM đến từng thẻ input để lấy giá trị
- Bước 3: Tạo biến average
- Bước 4: Gán giá trị cho average = (a+b+c+d+e)/5
- Bước 5: Tính và in ra màn hình kết quả
Khổi 3:
- Giá trị trung bình là: */

function average(){
    var num1 = +document.getElementById('num1').value;
    var num2 = +document.getElementById('num2').value;
    var num3 = +document.getElementById('num3').value;
    var num4 = +document.getElementById('num4').value;
    var num5 = +document.getElementById('num5').value;
    var average = (num1 + num2 + num3 + num4 + num5) / 5;
    document.getElementById('average').innerHTML = "Giá trị trung bình là: " + average;
}



//Bài tập 3
/*Sơ đồ ba khối
Khối 1:
- Giá 1usd hiện nay là 23.700 vnd
- Người dùng nhập vào số tiền đang có
- Quy đổi ra tiền Việt thì người dùng có số tiền = 23.700 * số tiền người dùng nhập
Khối 2:
- Bước 1: Tạo biến usd và userMoney
- Bước 2: Dom đến lấy giá trị các thẻ input
    userMoney = usd * usdCost
- Bước 3: xuất ra màn hình
Khối 3:
- Tổng tiền của bạn là:
 */
function changeMoney(){
    var unit = +document.getElementById("unit").value;
    var usd = +document.getElementById("usd").value;
    var userMoney = usd * unit;
    document.getElementById("change").innerHTML = "Tiền của bạn sau khi quy đổi là: " + userMoney;
}


//Bài tập 4
/*Sơ đồ ba khối
Khối 1:
- HCN có chiều rộng là 10, chiều dài là 8
- Chu vi HCN = (dài + rộng)*2
- Diện tích HCN = dài * rộng
Khối 2:
- Bước 1: Tạo biến width, length
- Bước 2: DOM đến lấy giá trị của người dùng nhập vào
- Bước 3: Tạo biến perimeter và gán giá trị perimeter = (width + length)*2
- Bước 4: Tạo biến area và gán giá trị area = width * length
- Bước 5: Tính và in ra kết quả
Khối 3:
- Chu vi hình chữ nhật là:
- Diện tích hình chữ nhật là:*/ 

function cal(){
    var width = +document.getElementById("width").value;
    var length = +document.getElementById("length").value;
    var perimeter = (width + length)*2;
    var area = width * length;
    document.getElementById("showArea").innerHTML = "Diện tích hình chữ nhật là: " + area;
    document.getElementById("showPerimeter").innerHTML = "Chu vi hình chữ nhật là: " + perimeter;
}




//Bài tập 5
/*Sơ đồ ba khối
Khối 1:
- Số nhập vào có hai chũ số: 85
- Tổng 2 ký số bằng số hàng chục + số hàng đơn vị cụ thể là: 8 + 5 = 13
Khối 2:
- Bước 1: Tạo biến userNumber và DOM đến thế input lấy giá trị
- Bước 2: Tạo biến dozen và gán giá trị dozen = Math.floor(userNumber/10)
- Bước 3: Tạo biến unit và gán giá trị unit = userNumber % 10*
- Bước 4: Tạo biến sum và gán giá trị sum = dozen + unit
- Bước 5: Tính và in ra kết quả
Khối 3:
- Tổng 2 ký số của số vừa nhập là:*/

function calSum(){
    var userNumber = +document.getElementById("num").value;
    var dozen = Math.floor(userNumber/10);
    var unit = userNumber % 10;
    var sum = dozen + unit;
    document.getElementById("showSum").innerHTML = "Tổng hai ký số là: " + sum;
}



