// Regex validate PIN code
//
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
//     If the function is passed a valid PIN string, return true, else return false.
//
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

const validatePIN = (pin) => {
    if (pin.length===4 || pin.length===6) {
        const pinNum = pin.split('').filter(symbol => /[1234567890]/.test(symbol));
        return pinNum.length === pin.length;
    }
    else return false;
};

console.log(validatePIN('1234'));
console.log(validatePIN('a234'));