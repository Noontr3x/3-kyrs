let isSurnamePalindrome = (surname) => {
    let normalizedSurname = surname.toLowerCase().replace(/\s/g, '');
    let reversedSurname = normalizedSurname.split('').reverse().join('');
    
    return normalizedSurname === reversedSurname;
  };
  
  // Пример использования
  let surname = prompt("Введите вашу фамилию");
  let isPalindrome = isSurnamePalindrome(surname);
  
  if (isPalindrome) {
    alert("Ваша фамилия является палиндромом");
  } else {
    alert("Ваша фамилия не является палиндромом");
  }
  