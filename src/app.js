require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const routesDesktop = require('./routes/desktop');
const routesMobile = require('./routes/mobile');
const bodyParser = require('body-parser');
const http = require('http').createServer(app);

app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use('/Desktop', routesDesktop);
app.use('/Mobile', routesMobile);

http.listen(process.env.PORT, () => {
  console.log("\nWebsite:", colors("green", 'online'));
  console.log("Server PORT:", colors("yellow", `${process.env.PORT}`));
});

function colors(color, text) {
  var colors = {
      "red": "\x1b[31m",
      "green": "\x1b[32m",
      "yellow": "\x1b[33m",
      "blue": "\x1b[34m",
      "magenta": "\x1b[35m",
      "cyan": "\x1b[36m",
      "white": "\x1b[37m",
      "reset": "\x1b[0m"
  }
  return colors[color] + text + colors["reset"];
}

// La funzione app.set() viene utilizzata per assegnare il nome dell'impostazione al valore. È possibile memorizzare qualsiasi valore desiderato, ma è possibile utilizzare determinati nomi per configurare il comportamento del server.

