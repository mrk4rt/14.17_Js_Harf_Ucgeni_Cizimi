// Kullanıcıdan bir harf alınır
let harf = prompt("Bir harf girin: ").toUpperCase(); 

// Harflerin ASCII kodlarını hesaplamak için charCodeAt() kullanılır
let charCode = harf.charCodeAt(0);

// Her bir satır için döngü
for (let i = 0; i < charCode - 64; i++) {
  let satir = "";
  
  // Her satır için gerekli harfleri yazdır
  for (let j = 0; j <= i; j++) {
    satir += String.fromCharCode(65 + j) + " "; // 65, 'A' harfinin ASCII kodu
  }
  
  // Satırı ekrana yazdır
  console.log(satir.trim());
}
