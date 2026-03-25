const http = require("http");

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.write("Welcome to Home Page");
    }

    else if(req.url === "/about"){
        res.write("This is the About Page");
    }

    else if(req.url === "/contact"){
        res.write("This is the Contact Page");
    }
    else if (req.url ==="/services"){
        res.write(" All services are provided")
    }
    else if(req.url ==="/Gallery"){
        res.write("All Photoes are there in this page")
    }

    else {
        res.write("404 Page Not Found");
    }
    

    res.end();

});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});