function generatePassword() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    const length = 8 + Math.floor(Math.random() * 5);  // generates a random number between 8 and 12
  
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return password;
  }
  
  console.log(generatePassword());  // prints a randomly generated password with a length between 8 and 12 characters