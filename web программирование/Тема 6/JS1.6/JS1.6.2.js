function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');

    // console.log(isPalindrome("А роза упала на лапу Азора"));
  }
  