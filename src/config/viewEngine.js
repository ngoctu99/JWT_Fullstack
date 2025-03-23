import express from "express"
import path from "path"

/* config static file for server */

const viewEngine = (app) => {

    app.use(express.static('./src/public'));

    app.set("view engine", "ejs");
    //app.set('views', path.join(__dirname, '../views'));
    app.set("views", "./src/views");
    
}

export default viewEngine;