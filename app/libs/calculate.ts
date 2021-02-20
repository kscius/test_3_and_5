module.exports = (app: { get: (arg0: string, arg1: (req: any, res: { send: (arg0: string) => void; }) => void) => void; }) => {
    app.get('/', function(req: any,res: { send: (arg0: string) => void; }) {
        let Output : string  = '';
        const Print: {[key:number]: string} = {
            3: "Music",
            5: "TI",
            15: "Musical"
        }
        for (let index = 1; index <= 100; index++) {
            const Music     = index % 3 * -1 + 3;
            const TI        = index % 5 + 5;
            const Musical   = Music * TI;
            const Result	= Print[Musical] || Print[Music] || Print[TI] || index;
            console.log(Result);
            Output += Result + "<br>";
        }
        res.send(Output);
    })
}