import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://yoshio:yoshiopassword@cluster0.luueb.mongodb.net/graphql?retryWrites=true&w=majority', {
            useNewUrlParser: true
        })
        console.log('>>> DB is connected');
    }
    catch(e) {
        console.log('Something went wrong!');
        console.log(e);
    }
}