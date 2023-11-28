require('dotenv').config();

const expess = require('express');

const app = expess();

app.use(expess.json());

app.get('/', async (req, res) => {
    return res.json('API está ok')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Servidor em pé na porta ${port}`);
})
