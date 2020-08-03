const express = require('express')
const app = express()

app.use(express.static('public'));

app.listen(app.get('PORT') || 3000, () => console.log('listening'))