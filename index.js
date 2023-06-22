import express from 'express'

const app = express()

const AmazonDaxClient = require('amazon-dax-client');
var AWS = require("aws-sdk");

var region = "eu-north-1";

AWS.config.update({
  region: region
});

var ddbClient = new AWS.DynamoDB.DocumentClient()
var client = daxClient != null ? daxClient : ddbClient;
var tableName = "msiversioningtest";

            var params = {
                TableName: tableName,
				Key: {
                "versionNum": 2,
                "createdBy": 12345
            }
            };

            
        
    
    


app.listen(5001, () => console.log('listening to port 5001'))

app.get('/', (req, res) =>  ddbClient.get(params, function(err, data) {
                if (err) {
                    res.json(JSON.stringify(err, null, 2));
                } else {
                    res.end(data)
                }
            })
			)