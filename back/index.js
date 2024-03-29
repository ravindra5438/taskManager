import express from "express";
import mongoose from "mongoose";
import taskRouter from "./routes/tasks.js";




const uri = "mongodb+srv://ravindrayadav5438:ravindrayadav5438@cluster0.vgq8q.mongodb.net/taskManager?retryWrites=true&w=majority&appName=Cluster0"

const app = express();
const port = 3000;



//  middlewares

app.use(express.json());
app.use('/tasks', taskRouter);




mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB Atlas');
})
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });




app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my server!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});