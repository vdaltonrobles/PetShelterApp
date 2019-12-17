console.log('server.js is running');

const express = require('express'),
                // cors = require('cors'),
                port = 8000,
                db_name = "pets_DB",
                app = express();

app.use(express.json());
// app.use(cors());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose')(db_name);
require('./server/config/routes')(app);

app.all('*', (req, res, next) => {
    res.sendFile(__dirname + "/public/dist/public/index.html");
});

app.listen(port, function(){
    console.log(`Listening on port ${port}`);
});


