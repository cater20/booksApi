const express=require('express');
const app=express();
const port =3000;

app.get('/', (req, res) => {
    res.send('records, from express');
});

app.listen(port, () => console.log(`records app listening on port ${port}!`))