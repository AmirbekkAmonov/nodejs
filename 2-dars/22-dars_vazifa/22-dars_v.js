//     ishlanishiga unchali tushunmadim googledan yordam olib yozdim   :)...


class CaesarCipher {
    constructor(shift) {
        this.shift = shift % 26;
    }
    encode(message) {
        let encodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            const charCode = message.charCodeAt(i);
            const baseCharCode = charCode >= 65 && charCode <= 90 ? 65 : charCode >= 97 && charCode <= 122 ? 97 : null;
            if (baseCharCode !== null) {
                const shiftedCharCode = ((charCode - baseCharCode + this.shift) % 26) + baseCharCode;
                encodedMessage += String.fromCharCode(shiftedCharCode);
            } else {
                encodedMessage += char;
            }
        }
        return encodedMessage;
    }
    decode(message) {
        let decodedMessage = '';
        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            const charCode = message.charCodeAt(i);
            const baseCharCode = charCode >= 65 && charCode <= 90 ? 65 : charCode >= 97 && charCode <= 122 ? 97 : null;
            if (baseCharCode !== null) {
                const shiftedCharCode = ((charCode - baseCharCode - this.shift + 26) % 26) + baseCharCode;
                decodedMessage += String.fromCharCode(shiftedCharCode);
            } else {
                decodedMessage += char;
            }
        }
        return decodedMessage;
    }
}
const c = new CaesarCipher(5);
console.log(c.encode('Codewars'));
console.log(c.decode('BFKKQJX'));











