const fs = require('fs');
const Cloud = require('@google-cloud/storage')
const BUCKET_NAME = 'syte-pim-dev'
const BUCKET_FILE_NAME = 'uda_garage_en.csv'

const { Storage } = Cloud
const storage = new Storage({
  keyFilename: './keys.json',
  projectId: 'digital-nonprod',
})

const bucket = storage.bucket(BUCKET_NAME);
const file = bucket.file(BUCKET_FILE_NAME);
fs.createReadStream('./assets/local.csv')
  .pipe(file.createWriteStream())
  .on('error', function(err) {})
  .on('finish', function() {
    console.log("done")
  });