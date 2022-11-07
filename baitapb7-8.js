// bài 1: tính  các số dương trong mảng

var listNumber = [];

// nhập số vào mảng
document.getElementById("nhapb1").onclick = function () {
  var number = document.getElementById("number").value * 1;

  listNumber.push(number);

  console.log(listNumber);
  document.getElementById("info").innerHTML = listNumber;
};
//  tính tổng và đếm số dương
function tongDuong() {
  var content = 0;
  var count = 0;

  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] >= 0) {
      content += listNumber[i];
      count++;
    }
  }

  console.log("tổng số dương " + content);
  var result = "<p>Tổng của các số dương : " + content + "</p>";
  result += "<br />";
  result += "<p>Có tổng cộng  " + count + " số dương</p>";

  document.getElementById("infob1").innerHTML = result;
}

// tìm số nhỏ nahtas

function timNhoNhat() {
  var min = listNumber[0];
  for (var i = 0; i < listNumber.length; i++) {
    var temp = listNumber[i];
    if (min > temp) {
      min = temp;
    }

    var result = "<p>Số nhỏ nhất là : " + min + "</p>";
    document.getElementById("infob3").innerHTML = result;
  }
}

// tìm số dương nhỏ nhất

function timDuongNho() {
  var minduong = listNumber[0];
  for (var i = 0; i < listNumber.length; i++) {
    var temp = listNumber[i];
    if (listNumber[i] >= 0 && minduong > temp) {
      minduong = temp;
    }
  }

  var result = "<p>Số dương nhỏ nhất là  " + minduong + "</p>";

  document.getElementById("infob4").innerHTML = result;
}

// số chẳn cuối
function timChanCuoi() {
  var content = "";
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 === 0) {
      content = listNumber[i];
    } else {
      content = "-1";
    }
  }
  console.log("số chẳn cuối" + content);
  var result = "<p> Số chẳn cuối cùng là : " + content + "</p>";
  document.getElementById("infob5").innerHTML = result;
}

//sắp xếp tăng dần
function sapXepTang() {
  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] > listNumber[j]) {
        var temp = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = temp;
      }
    }
  }

  console.log(listNumber);
}

// tìm số nguyên tố đầu tiên

function tinhSoNguyenTo(list) {
  var n = list;
  var content = false;
  if (n < 2) {
    //kiểm tra số
    alert("Nhập số khác");
  } else {
    for (var i = 2; i <= n; i++) {
      if (i === 2) {
        content = true;
      } else if (i === 3) {
        content += i + " ";
        continue;
      } else if (i === 5) {
        content += i + " ";
        continue;
      } else if (i % 2 === 0) {
        continue;
      } else if (i % 3 === 0) {
        continue;
      } else if (i % 5 === 0) {
        continue;
      } else {
        content += i + " ";
        continue;
      }
    }

    return content;

    console.log(content);
  }
  var result = "<p>Các số Nguyên tố là : " + content + "</p>";
  document.getElementById("infonb1").innerHTML = result;
}
