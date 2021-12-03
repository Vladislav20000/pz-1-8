const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname + '/public')));


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});


app.listen(PORT, () => console.log(`Express is listening on port ${PORT}`));