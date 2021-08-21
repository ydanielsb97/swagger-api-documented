import app from './app'
import { connectionDB } from './database';



const main = async () => {
    
    await connectionDB().then((e: any) => console.log("DB Connected"));

    app.listen(app.get('port'), () => {
        console.log("Server running on port", app.get('port'))
    });
}

main();