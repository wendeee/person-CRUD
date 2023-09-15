//import dotenv
require("dotenv").config();

export const config = {
 MONGODB_URL: process.env.MONGODB_URL,
 PORT: process.env.PORT || 3000,
};
