module.exports = (app: { listen: (arg0: number, arg1: () => void) => void }) => {
    app.listen(80, function () {
        console.log('Server running...')
    })
}