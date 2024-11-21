const fs = require('fs');

const processPostData = (req, res) => {
    const { data, file_b64 } = req.body;

    const numbers = [];
    const alphabets = [];
    let highestLowercase = null;
    let isPrimeFound = false;

    data.forEach((item) => {
        if (!isNaN(item)) {
            numbers.push(Number(item));
            if (isPrime(Number(item))) isPrimeFound = true;
        } else if (item.match(/[a-zA-Z]/)) {
            alphabets.push(item);
            if (item === item.toLowerCase() && (!highestLowercase || item > highestLowercase)) {
                highestLowercase = item;
            }
        }
    });

    let fileValid = false;
    let fileMimeType = null;
    let fileSizeKb = null;

    if (file_b64) {
        try {
            const buffer = Buffer.from(file_b64, 'base64');
            fileSizeKb = (buffer.length / 1024).toFixed(2);
            fileValid = true;
            fileMimeType = 'application/octet-stream'; // Simplified, adjust as needed.
        } catch (error) {
            fileValid = false;
        }
    }

    res.status(200).json({
        is_success: true,
        user_id: 'john_doe_17091999', // Update with your details
        email: 'john@xyz.com',
        roll_number: 'ABCD123',
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
        is_prime_found: isPrimeFound,
        file_valid: fileValid,
        file_mime_type: fileMimeType,
        file_size_kb: fileSizeKb,
    });
};

const getOperationCode = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

module.exports = { processPostData, getOperationCode };
