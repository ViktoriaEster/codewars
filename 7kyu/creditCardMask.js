// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//
//     Your task is to write a function maskify, which changes all but the last four characters into '#'.
//
// Examples (input --> output):
// "4556364607935616" --> "############5616"
// "64607935616" -->      "#######5616"
// "1" -->                "1"
// "" -->                 ""
//
// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"


const maskify = (cc) => {
    if (cc.length<4) return cc;
    else {
        const arr = cc.split('');
        const count = arr.length - 4;
        const endStrArr = arr.slice(count, arr.length);

        const symArr = [];
        for (let i=0; i<count; i++)
        {symArr.push('#');}
        return symArr.concat(endStrArr).join('');}
};

console.log(maskify('4556364607935616'));