# Harf Üçgeni Çizme Projesi

## Proje Amacı:
Bu projenin amacı, kullanıcıdan bir harf alarak, o harfe kadar bir üçgen şekli çizmektir. Kullanıcı, istediği harfi girdiğinde, o harfe kadar olan harflerin sıralandığı bir üçgen desenini ekrana yazdıracaktır.

## Değişkenler:
1. **harf**: Kullanıcıdan alınan harf. Bu harf, üçgenin son satırındaki harfi belirleyecek.
2. **i**: Döngü değişkeni. Satır sayısını takip etmek için kullanılır.
3. **j**: İç döngü değişkeni. Her bir satırda yazdırılacak harfleri belirlemek için kullanılır.
4. **charCode**: Harflerin ASCII değerlerini bulmak için kullanılır. Bu değerler, harfleri yazdırmak için kullanılır.

## Anahtar Kelimeler:
- **for döngüsü**: Satır sayısını ve harf sırasını kontrol etmek için kullanılır.
- **String.fromCharCode()**: ASCII koduna göre harf elde etmek için kullanılır.
- **charCodeAt()**: Harfin ASCII kodunu almak için kullanılır.
- **console.log()**: Çıktıyı ekrana yazdırmak için kullanılır.

## Proje Adımları:

1. **Kullanıcıdan bir harf al**:
   - Program, kullanıcıdan bir harf alacak. Bu harf, üçgenin sonunda yer alacak harfi belirleyecek.

2. **Harflerin ASCII değerini hesapla**:
   - Kullanıcının girdiği harfin ASCII kodunu bulmak için `charCodeAt()` kullanılacak.
   - Bu kod, harflerin sırasıyla yazdırılabilmesi için kullanılacak.

3. **For döngüleri ile üçgeni oluştur**:
   - İlk döngü, üçgenin kaç satırdan oluşacağını belirleyecek (kullanıcının girdiği harfe kadar).
   - İç içe geçen bir for döngüsü ile her satıra kadar artan harfler yazdırılacak.

4. **Çıktıyı ekrana yazdır**:
   - Her satırda, sırasıyla A'dan başlayarak o satıra kadar olan harfler yazdırılacak.
   - Sonuç olarak, istenilen üçgen şekli ekrana yansıyacak.

---

## Örnek Çıktı:

Eğer kullanıcı **D** harfini girerse, çıktıyı şu şekilde alacaktır:

A
A B
A B C
A B C D
