function login(email, password) {
    // Vérifie si l'email contient un '@' ET si le mot de passe fait au moins 8 caractères
    if (email.includes('@') && password.length >= 8) {
        return true;
    } else {
        return false; 
    }
}

// test
console.log(login("test@exemple.com", "motdepasse123")); // true 
console.log(login("testexemple.com", "motdepasse123"));  // false 
console.log(login("test@exemple.com", "123"));          // false 