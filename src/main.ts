import http from 'http';
import process from 'process';

const ipAddress = process.argv[2];
const accessKey = process.env.ACCESS_KEY;

if (!ipAddress || !accessKey) {
    console.log('Usage: ts-node httpRequest.ts <IP_ADDRESS>');
    console.log('Make sure then ACCESS_KEY environment variable is set.');
    process.exit(1);
}

const url = `http://api.ipstack.com/${ipAddress}?access_key=${accessKey}`;

// paid plan will allow for https requests, and security information from API
// const url = `https://api.ipstack.com/${ipAddress}?access_key=${accessKey}&security=1`;

http.get(url, res => {
    let data = '';

    res.on('data', chunk => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const parsedData = JSON.parse(data);
            if (parsedData.latitude && parsedData.longitude) {
              console.log(`{latitude: ${parsedData.latitude}, longitude: ${parsedData.longitude}}`);
            } else {
                console.log('Location attribute not found in the response.');
            }
        } catch (e) {
            console.error('Error parsing JSON:', e);
        }
    });
}).on('error', error => {
    console.error('Error making request:', error);
});
