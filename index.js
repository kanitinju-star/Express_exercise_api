const express = require("express");
const app = express();

const profile = {
  name: "john",
  age: 20
};

app.get("/profiles", (req, res) => {
  res.status(200).json({
    data: profile
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
