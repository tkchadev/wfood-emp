const express = require('express')
const app = express()
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/emp/',require('./src/routes/routes'))
const PORT = process.env.PORT || 3003;

app.listen(PORT,()=>{
    console.log(`Run!!! ${PORT}`);
})