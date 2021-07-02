function encodeAndDecodeMessages() {
    let [encode, decode] = document.querySelectorAll('button');
    let [input, output] = document.querySelectorAll('textarea');

    encode.addEventListener('click', () => {

        let encode = input.value
            .split('')
            .map(c => c.charCodeAt())
            .map(c => String.fromCharCode(c + 1))
            .join('');

        input.value = '';
        output.value = encode;

    });

    decode.addEventListener('click',()=> {
       
        let decode = output.value
            .split('')
            .map(c => c.charCodeAt())
            .map(c => String.fromCharCode(c - 1))
            .join('');
            
        output.value = decode;
    });
}