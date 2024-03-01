import expres from "expres";
const app = expres();
const port = 3000;

app.get("./blog.html", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
