const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = 'password must be longer than 5 characters'
    }
    if (!values.confirmPassword) {
        errors.password = 'Required'
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'passwords must match'
    }
    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.date) {
        errors.date = 'Required'
    }
    return errors
};


export default validate;