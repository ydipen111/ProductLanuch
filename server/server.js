import express from 'express';
import authRoutes from './Routes/authRoutes.js'
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
const port = "1999";



mongoose.connect('mongodb+srv://DipenDra:Dipendra123@cluster0.h9oaq.mongodb.net/PL').then((val) => {
  app.listen(port, () => {
    console.log(`Server is running in  ${port}`);

  });

}).catch((err) => {
  console.log(err);
})


app.use('/api', authRoutes);



