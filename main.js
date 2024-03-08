/*
  **************************************
  *                                    *
  *        made by                      *
  *        Ayoub-b1                     *
  *                                    *
  **************************************
*/



class Verification {

    /**
     * Constructor for Verification class
     * @param {string} email - User's email address
     * @param {string} password - User's password
     * @param {string} [phone=''] - User's phone number
     * @param {string} [name=''] - User's name
     */
    constructor(email, password, phone = '', name = '') {
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.name = name;
    }

    /**
     * Checks if the email is in a valid format
     * @returns {boolean} - True if the email is valid, false otherwise
     */
    checkMail() {
        const mailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}$/;
        return mailPattern.test(this.email);
    }

    /**
     * Checks if the password length is within the specified range
     * @param {number} min - Minimum password length
     * @param {number} max - Maximum password length
     * @returns {boolean} - True if the password length is valid, false otherwise
     */
    passLen(min, max) {
        return this.password.length >= min && this.password.length <= max;
    }

    /**
     * Checks if the provided password matches the stored password
     * @param {string} pass - Password to compare
     * @returns {boolean} - True if passwords match, false otherwise
     */
    passMatch(pass) {
        return this.password === pass;
    }

    /**
     * Checks if the phone number is in a valid format
     * @param {number} minsize - Minimum phonenumber length
     * @param {number} maxsize - Maximum phonenumber length
     * @returns {boolean} - True if the phone number is valid, false otherwise
     */
    checkPhone(minsize ,maxsize) {
        const countryCode = "\\+?\\d+";
        const separator = "[\\s-]?";
        const phoneNumber = `\\d{${minsize},${maxsize}}`;

        const phonePattern = new RegExp(`^${countryCode}${separator}${phoneNumber}$`);

        return phonePattern.test(this.phone);
    }

    /**
     * Checks if the name length is within the specified range
     * @param {number} min - Minimum name length
     * @param {number} max - Maximum name length
     * @returns {boolean} - True if the name length is valid, false otherwise
     */
    nameLen(min, max) {
        return this.name.length >= min && this.name.length <= max;
    }

    /**
     * Generates a random password of the specified length
     * @param {number} len - Length of the random password
     * @returns {string} - Randomly generated password
     */
    randomPass(len) {
        return Math.random().toString(36).slice(-len);
    }
}

module.exports = Verification;
