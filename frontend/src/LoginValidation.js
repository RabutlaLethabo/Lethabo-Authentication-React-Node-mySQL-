function validation(values) {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Corrected regex pattern
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Updated regex pattern

    // Email validation
    if (!values.email) {
        errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Email is invalid";
    }

    // Password validation
    if (!values.password) {
        errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
        errors.password = "Password must be at least 8 characters long and contain a mix of uppercase letters, lowercase letters, and numbers";
    }

    return errors;
}

export default validation;
