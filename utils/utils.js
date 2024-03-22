const fs = require('fs');

function writeDataToFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err);
        }
    })
}

function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = [];
            req.on('data', (chunk) => {
                body.push(chunk.toString());
            })
            
            req.on('end', async () => {
                resolve(JSON.parse(body));    
            })
    
        } catch (err) {
            reject(err);
        }
    })
}

function verifyBodyData(data) {
    if (Array.isArray(data)) {
        return false
    }
    let stringFields = [data.brand, data.model, data.color];
    for (let i=0; i < stringFields.length; i++) {
        if (stringFields[i].length > 150){
            return false;
        }
    }

    let numFields = [data.year, data.mileage_km];
    for (let i=0; i < numFields.length; i++) {
        if (typeof numFields[i] != 'number'){
            return false;
        }
    }
    return true;
}

module.exports = {
    writeDataToFile,
    verifyBodyData,
    getPostData
}