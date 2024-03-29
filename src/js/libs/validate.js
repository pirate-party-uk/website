export const validateFirstName = (name, setState) => {
    const validationResult = {
        value: name,
        isValid: true,
        messages: ''
    };
    if (!name){
        validationResult.isValid = false;
        validationResult.messages = 'name is required';
    }
    // check if the name is empty
    if (name.length === 0) {
        validationResult.isValid = false;
        validationResult.messages = 'First name is required.';
    }
    // check if the name is less than 2 characters
    if (name.length > 0 && name.length < 2) {
        validationResult.isValid = false;
        validationResult.messages = 'First name must be at least 2 characters.';
    }
    // check if the name is more than 20 characters
    if (name.length > 255) {
        validationResult.isValid = false;
        validationResult.messages = 'First name must be less than 20 characters.';
    }
    if (setState) {
        setState((e) => ({ ...e, firstName: validationResult }))
    }
    return validationResult;
}
export const validateLastName = (name = "", setState) => {
    const validationResult = {
        value: name,
        isValid: true,
        messages: ''
    };
    if (!name){
        validationResult.isValid = false;
        validationResult.messages = 'name is required';
    }
    
    // check if the name is empty
    if (name.length === 0) {
        validationResult.isValid = false;
        validationResult.messages = 'Last name is required.';
    }
    // check if the name is less than 2 characters
    if (name.length > 0 && name.length < 2) {
        validationResult.isValid = false;
        validationResult.messages = 'Last name must be at least 2 characters.';
    }
    // check if the name is more than 20 characters
    if (name.length > 255) {
        validationResult.isValid = false;
        validationResult.messages = 'Last name must be less than 20 characters.';
    }
    if (setState) {
        setState((e) => ({ ...e, lastName: validationResult }))
    }
    return validationResult;
}

export const validateDOB = (dob, setState) => {
    const validationResult = {
        value: dob,
        isValid: true,
        messages: ''
    };
    if (!dob){
        validationResult.isValid = false;
        validationResult.messages = 'dob is required';
    }
    if (setState) {
        setState((e) => ({ ...e, dob: validationResult }))
    }
    return validationResult;
}



export const validateAddress1 = (address1, setState) => {
    console.log("address1:", address1);

    const validationResult = {
        value: address1,
        isValid: true,
        messages: ''
    };
    if (!address1){
        validationResult.isValid = false;
        validationResult.messages = 'address1 is required';
    }
    console.log("address1:", address1);

    if (address1.trim() === '') {
        validationResult.isValid = false;
        validationResult.messages = 'Address line 1 is required.';
    }
    if (setState) {
        setState((e) => ({ ...e, address1: validationResult }))

    }

    return validationResult;
};


export const validateAddress2 = (address2, setState) => {
    console.log("address2:", address2);
    const validationResult = {
        value: address2,
        isValid: true,
        messages: ''
    };
    if (!address2){
        validationResult.isValid = false;
        validationResult.messages = 'address2 is required';
    }

    if (address2.trim() === '') {
        validationResult.isValid = false;
        validationResult.messages = 'Address line 1 is required.';
    }
    if (setState) {
        setState((e) => ({ ...e, address2: validationResult }))

    }

    return validationResult;
};


export const validatePostcode = (postcode, setState) => {
    console.log("postcode:", postcode);
    const validationResult = {
        value: postcode,
        isValid: true,
        messages: ''
    };
    if (!postcode){
        validationResult.isValid = false;
        validationResult.messages = 'postcode is required';
    }

    if (postcode.trim() === '') {
        validationResult.isValid = false;
        validationResult.messages = 'Postcode is required.';
    }
    if (setState) {
        setState((e) => ({ ...e, postcode: validationResult }))

    }

    return validationResult;
};

export const validateCity = (city, setState) => {
    console.log("city:", city);

    const validationResult = {
        value: city,
        isValid: true,
        messages: ''
    };
    if (!city){
        validationResult.isValid = false;
        validationResult.messages = 'city is required';
    }

    if (city.trim() === '') {
        validationResult.isValid = false;
        validationResult.messages = 'City is required.';
    }
    if (setState) {

        setState((e) => ({ ...e, city: validationResult }))
    }
    return validationResult;
};
export const validateEmail = (email, setState) => {
    console.log("email:", email);

    const validationResult = {
        value: email,
        isValid: true,
        messages: ''
    };
    if (!email){
        validationResult.isValid = false;
        validationResult.messages = 'Email is required.';
    }
    if(email.length == 0){
        validationResult.isValid = false;
        validationResult.messages = 'Email is required.';
    }

    // Check if the email is empty
    if (email == '') {
        validationResult.isValid = false;
        validationResult.messages = 'Email is required.';
    }

    // Check if the email matches the pattern
    if (!/\S+@\S+\.\S+/.test(email)) {
        validationResult.isValid = false;
        validationResult.messages = 'Please enter a valid email.';
    }


    if (setState) {

        setState((e) => ({ ...e, email: validationResult }))
    }
    return validationResult;
};

export const validatePhone = (phone, setState) => {
    console.log("phone:", phone);

    const validationResult = {
        value: phone,
        isValid: true,
        messages: ''
    };
    if (!phone){
        validationResult.isValid = false;
        validationResult.messages = 'Phone number is required.';
    }
    if (phone.length == 0){
        validationResult.isValid = false;
        validationResult.messages = 'Phone number is required.';
    }

    // Check if the cleaned phone number is empty
    if (phone === '') {
        validationResult.isValid = false;
        validationResult.messages = 'Phone number is required.';
    }

    // // Check if the cleaned phone number contains only digits
    // if (!/^\d+$/.test(phone)) {
    //     validationResult.isValid = false;
    //     validationResult.messages = 'Please enter a valid phone number.';
    //     return validationResult;
    // }
    if (setState) {
        setState((e) => ({ ...e, phone: validationResult }))

    }

    return validationResult;
};

export const validatePassword = (password, setState, state, repeat = false) => {
    const validationResult = {
        isValid: true,
        messages: '',
        value: password
    };
    if (!password){
        validationResult.isValid = false;
        validationResult.messages = 'Password is required';
    }

    // Check if the password is empty
    if (password === '') {
        validationResult.isValid = false;
        validationResult.messages = 'Password is required.';
    }

    // Check if the password is less than 8 characters
    if (password.length < 8) {
        validationResult.isValid = false;
        validationResult.messages = 'Password must be at least 8 characters.';
    }

    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        validationResult.isValid = false;
        validationResult.messages = 'Password must contain at least one uppercase letter.';
    }

    // Check if the password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        validationResult.isValid = false;
        validationResult.messages = 'Password must contain at least one lowercase letter.';
    }

    // Check if the password contains at least one number
    if (!/[0-9]/.test(password)) {
        validationResult.isValid = false;
        validationResult.messages = 'Password must contain at least one number.';
    }

    // Check if the password contains at least one special character
    if (!/[!@#$%^&*]/.test(password)) {
        validationResult.isValid = false;
        validationResult.messages = 'Password must contain at least one special character.';
    }

    // check if the password matches the repeat password
    if (state) {
        if (repeat) {
            if ((state.password.value !== state.passwordRepeat.password) && state.passwordRepeat.isValid) {
                validationResult.isValid = false;
                validationResult.messages = 'Passwords do not match.';
            }
        }
        else if ((state.passwordRepeat.value !== password) && state.passwordRepeat.isValid) {
            validationResult.isValid = false;
            validationResult.messages = 'Passwords do not match.';
        }
    }

    if (setState) {
        if (repeat) {
            setState((e) => ({ ...e, passwordRepeat: validationResult }));
        } else {
            setState((e) => ({ ...e, password: validationResult }));
        }
    }

    return validationResult;
};
export const validate_call = {
    "firstName": validateFirstName,
    "lastName": validateLastName,
    "dob": validateDOB,
    "address1": validateAddress1,
    "address2": validateAddress2,
    "postcode": validatePostcode,
    "city": validateCity,
    "country":(password, setState, state)=>{},
    "email": validateEmail,
    "phone": validatePhone,
    "password": validatePassword,
    "repeatPassword": (password, setState, state)=>(validatePassword(password, setState, state, false)),
    "passwordRepeat": (password, setState, state)=>(validatePassword(password, setState, state, true)),
    "billingFrequency":()=>{},
    "billingDay":()=>{},
    // "validateDob":()=>{},
}
