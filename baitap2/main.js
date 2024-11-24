// Hàm tính diện tích hình chữ nhật
function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  // Hàm tính diện tích hình tam giác
  function calculateTriangleArea(base, height) {
    return (base * height) / 2;
  }
  
  // Hàm tính diện tích hình vuông
  function calculateSquareArea(side) {
    return side * side;
  }
  
  // Xử lý sự kiện cho hình chữ nhật
  function calculateRectangle() {
    const length = parseFloat(document.getElementById("rect-length").value);
    const width = parseFloat(document.getElementById("rect-width").value);
  
    if (isNaN(length) || isNaN(width)) {
      document.getElementById("rect-result").textContent = "Vui lòng nhập đầy đủ thông tin.";
      return;
    }
  
    const area = calculateRectangleArea(length, width);
    document.getElementById("rect-result").textContent = `Kết quả: ${area.toFixed(2)} m²`;
  }
  
  // Xử lý sự kiện cho hình tam giác
  function calculateTriangle() {
    const base = parseFloat(document.getElementById("tri-base").value);
    const height = parseFloat(document.getElementById("tri-height").value);
  
    if (isNaN(base) || isNaN(height)) {
      document.getElementById("tri-result").textContent = "Vui lòng nhập đầy đủ thông tin.";
      return;
    }
  
    const area = calculateTriangleArea(base, height);
    document.getElementById("tri-result").textContent = `Kết quả: ${area.toFixed(2)} m²`;
  }
  
  // Xử lý sự kiện cho hình vuông
  function calculateSquare() {
    const side = parseFloat(document.getElementById("square-side").value);
  
    if (isNaN(side)) {
      document.getElementById("square-result").textContent = "Vui lòng nhập độ dài cạnh.";
      return;
    }
  
    const area = calculateSquareArea(side);
    document.getElementById("square-result").textContent = `Kết quả: ${area.toFixed(2)} m²`;
  }
  