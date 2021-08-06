import mongoose, {ConnectionOptions} from 'mongoose';
import config from './config'
(async () => {
    try{
        const mongooseOptions: ConnectionOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true         
        }
        //mongodb+srv://admin:<password>@cluster0.5esi4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
        //const db = await mongoose.connect(`mongodb://${config.mongoHost}/${config.mongoDataBase}`, mongooseOptions);
        const db = await mongoose.connect("mongodb+srv://admin:admin@cluster0.5esi4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", mongooseOptions);
        console.log("database is connected to:" + db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();
