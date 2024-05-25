import app from "./app";

// start express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
