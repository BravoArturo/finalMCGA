import mongoose, {ConnectionOptions} from 'mongoose';
import config from './config'
(async () => {
    try{
        const mongooseOptions: ConnectionOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true         
        }
        const db = await mongoose.connect(`mongodb://${config.mongoHost}/${config.mongoDataBase}`, mongooseOptions);
        console.log("database is connected to:" + db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();
