const cors =require("cors");
const express = require("express");
const port= 8000;
const app = express();

app.use(cors());
app.use(express.json());

require("./server/config/res.config");
require("./server/routes/res.routes")(app);

app.listen(port,()=> console.log(`listening on port : ${port}`));
