function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Xử lý sự kiện nhấn nút
  document.getElementById("convert-btn").addEventListener("click", function () {
    const celsiusInput = document.getElementById("celsius").value;
  
    if (celsiusInput === "") {
      document.getElementById("result").textContent = "Vui lòng nhập nhiệt độ.";
      return;
    }
  
    const celsius = parseFloat(celsiusInput);
    const fahrenheit = convertCelsiusToFahrenheit(celsius);
    
    document.getElementById("result").textContent = `Kết quả: ${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
  });