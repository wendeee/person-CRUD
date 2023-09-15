import app from "./app";

import { config } from "./config/config";
import { DB_CONNECTION } from "./config/db.config";

require("dotenv").config();

DB_CONNECTION();

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
 console.log(`App is running on port: ${PORT}`);
});
