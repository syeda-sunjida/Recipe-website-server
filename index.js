const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
// all data
const allServices = require("./data.json")
app.get("/all", (req, res)=> {
    res.send(allServices);

});
// id wise data
app.get("/all/:id", (req, res) => {
    const Id = req.params.id;
    const category = allServices.find(item => item.id === Id);
    if (!category) {
      return res.status(404).send('Category not found');
    }
    res.send(category);
  });

app.listen(5000,() => {
    console.log("server is running");
});

// index done
// vercel add done
// server site edit done with cors