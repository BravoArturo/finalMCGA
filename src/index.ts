import app from './app';
import './database';

const consoleLogNameOfProject: string = "final MCGA";
console.log(consoleLogNameOfProject);

app.listen(3000, () => console.log("server of "+consoleLogNameOfProject+" on port 3000" ));
 