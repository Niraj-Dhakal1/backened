// import fs from 'fs';


import express from 'express';

const app = express();



app.use(express.static('uploads'));


app.get('/', (req, res) => {

  return res.status(200).json({
    message: 'welcome to backened'
  });

});

app.get('/products', (req, res) => {
  console.log(req.params);
  return res.status(200).json([
    { id: 1, title: 'Gucci Bag' }
  ]);
});


app.listen(5000, () => {
  console.log('hello server run');
})