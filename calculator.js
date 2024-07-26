const server = require("express");
const bodyParser = require("body-parser");

const app = server();

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function (req, res) {
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);

    var final = num1 + num2;

    res.send("The result of the calculation is " + final);
})

app.post("/bmicalculator", function(req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var resultBmi = weight/ (height * height);
    res.send("Result BMI: "+ resultBmi);

})


app.listen("3000", function () {
    console.log("Server is running on port 3000");
})


