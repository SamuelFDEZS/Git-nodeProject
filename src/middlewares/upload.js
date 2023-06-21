const multer = require("multer")
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary")

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Nintendo',
        allowedFormats: ['jpg', 'png', 'jpeg', 'webp', 'pdf', 'gif']
    }
})

const upload = multer({ storage })
module.exports = upload;
