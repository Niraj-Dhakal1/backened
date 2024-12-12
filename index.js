// import fs from 'fs';
import express from 'express';

const app = express();

// const products = [
//   {
//     id: 1,
//     name: 'laptop',
//   },
//   {
//     id: 2,
//     name: 'mobile',
//   },
//   {
//     id: 3,
//     name: 'tablet',
//   },
// ];



// app.use((req, res, next) => {
//   const { id } = req.query;
//   if ([1, 2, 3].includes(Number(id))) {
//     return next();
//   }
//   return res.status(400).json({
//     message: 'please provide valid id'
//   });

// });

app.get('/', (req, res) => {

  // const { id } = req.query;
  // const product = products.find((prod) => prod.id === Number(id));

  return res.status(200).json({
    message: 'welcome to backend',
    product
  });


});







app.listen(5000, () => {
  console.log('hello server run');
})