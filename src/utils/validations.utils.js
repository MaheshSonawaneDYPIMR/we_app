// validationUtils.js
export const validateUsername = (username ,isUsernameExist) => {
  
    const usernameRegex = /^[a-z0-9._]+$/; // Lowercase letters, numbers, dot (.), and underscore (_)
  
    if (!username.trim()) {
      return 'Username is required';
    }
  
    if (!usernameRegex.test(username)) {
      return 'Username can only contain lowercase letters, numbers, dot (.), and underscore (_) characters';
    }
  
    return ''; // Return empty string if validation passes
  };
  
  
  export const validatePassword = (password) => {
    if (!password.trim()) {
      return 'Password is required';
    }
    if (password.length < 6 ) {
      return 'Password is too short';
    }
    if (password.length > 20) {
      return 'Password is too long';
    }
    return ''; // Return empty string if validation passes
  };
  
  export const validateEmail = (email, isEmailExist) => {
   
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Invalid email format';
    }
    return ''; // Return empty string if validation passes
  };
  