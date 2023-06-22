var express = require('express');
var app = express();
var fs = require("fs");

const AmazonDaxClient = require('amazon-dax-client');
var AWS = require("aws-sdk");

var region = "eu-north-1";

AWS.config.update({
  region: region
});

var ddbClient = new AWS.DynamoDB.DocumentClient()
var tableName = "msiversioningtest";

            var params = {
                TableName: tableName,
				Key: {
                "versionNum": 2,
                "createdBy": 12345
            }
            };

app.get('/fetchversion', function (req, res) {
   ddbClient.get(params, function(err, data) {
                if (err) {
                     res.json(JSON.stringify(err, null, 2));
                } else {
                    res.json(data);
                }
            });
})

var server = app.listen(5001, function () {
   
   console.log("app is running on 5001")
})
