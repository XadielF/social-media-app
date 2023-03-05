const app = require("./server/index");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is Running on Port 3000");
});
