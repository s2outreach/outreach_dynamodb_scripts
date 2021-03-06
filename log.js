var params = {
        TableName: 'log',
        KeySchema: [ // The type of of schema.  Must start with a HASH type, with an optional second RANGE.
            { // Required HASH type attribute
                AttributeName: 'logid',
                KeyType: 'HASH',
            },
            { // Optional RANGE key type for HASH + RANGE tables
                AttributeName: 'timestamp', 
                KeyType: 'RANGE', 
            }
        ],
        AttributeDefinitions: [ // The names and types of all primary and index key attributes only
            {
                AttributeName: 'logid',
                AttributeType: 'S', // (S | N | B) for string, number, binary
            },
            {
                AttributeName: 'timestamp',
                AttributeType: 'S', // (S | N | B) for string, number, binary
            }
        ],
        ProvisionedThroughput: { // required provisioned throughput for the table
            ReadCapacityUnits: 1, 
            WriteCapacityUnits: 1, 
        }
    };
    dynamodb.createTable(params, function(err, data) {
        if (err) ppJson(err); // an error occurred
        else ppJson(data); // successful response
    
    });