export const isValidName = (name) => {
    const regex = /^([a-zA-ZÀ-ÿ-]{2,20})*$/;
    return regex.test(name);
};


export const isValidEmail = (email) => {
    const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/;
    return regex.test(email);
};

export const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/; 
    return regex.test(password);
};