import { getStorage } from "firebase-admin/storage"
import multer from "multer"

import { firebaseApp } from "../../config/firebase"
import { FirebaseMulterStorage } from "../../config/multerStorageEngine"



const storage = new FirebaseMulterStorage({ storage: getStorage(firebaseApp) })


const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
]


export const multerUpload = multer({
    storage,
    fileFilter(req, file, callback) {
        // checks and allows file to be uploaded only if the type is whitelisted
        if (whitelist.includes(file.mimetype)) callback(null, true)

        // retuns error if file type is not whitelisted
        else callback({ message: "file should be either png, jpeg, jpg or webp", name: "Invalid file type" })
    },
})