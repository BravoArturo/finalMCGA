import app from './app';
import './database';

const consoleLogNameOfProject: string = "final MCGA";
console.log(consoleLogNameOfProject);

app.listen(app.get('port'), () => console.log("server of "+consoleLogNameOfProject+" on port "+app.get('port')+"" ));
 