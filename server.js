var shell = require("shelljs");

shell.exec("echo Starting up nextjs server...");
shell.exec("npm run build");
shell.exec("npm run start");