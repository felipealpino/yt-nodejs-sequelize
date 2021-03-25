const app = require('./app');


const db = require('./models')
db.sequelize.sync().then((req) => {
    const server = app.listen(app.get('port'), () => {
        console.log("Server running on :"+server.address().port)
    }); 
})


app.set('port', 7777);
