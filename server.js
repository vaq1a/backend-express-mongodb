import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.l02en.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);
app.use(express.static('static'));


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });

        app.listen(PORT, (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Server started');
            }
        });
    } catch (err) {
        console.log(err);
    }
}

startApp();