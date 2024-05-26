import "dotenv/config";
import app from "./app";
import { defaultConfig } from "./config/default.config";

// start express server
const port = defaultConfig.port || 3000;
app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
