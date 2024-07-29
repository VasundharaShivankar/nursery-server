import express from 'express';

const app = express();
app.use(express.json());

const plants = [];

app.post("/plant", (req, res) => {
  const { 
    name, 
    category, 
    price, 
    image, 
    description } = req.body;

  const newPlant = {
    id: plants.length + 1, 
    name,
    category,
    price,
    image,
    description
  };

  plants.push(newPlant);

  res.json({
    success: true,
    data: newPlant,
    message: "New Plant added successfully"
  });
});

app.get("/plants",(req,res)=>{
  res.json({
    success: true,
    data: plants,
    message: "All Plants fetched successfully"
  });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
