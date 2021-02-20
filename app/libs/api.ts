let calculation: any = require('./calculate');

module.exports = (app: { get: (arg0: string, arg1: (req: any, res: { send: (arg0: string) => void; }) => void) => void; }) => {
    app.get('/', function(req: any,res: { send: (arg0: string) => void; }) {
        res.send(calculation.execute());
    })
}