var params = {
        TableName: 'eventuser',
        KeySchema: [ // The type of of schema.  Must start with a HASH type, with an optional second RANGE.
            { // Required HASH type attribute
                AttributeName: 'id',
                KeyType: 'HASH',
            },
            { // Optional RANGE key type for HASH + RANGE tables
                AttributeName: 'eventname', 
                KeyType: 'RANGE',
            }
        ],
        AttributeDefinitions: [ // The names and types of all primary and index key attributes only
            {
                AttributeName: 'id',
                AttributeType: 'S', // (S | N | B) for string, number, binary
            },
            {
                AttributeName: 'eventname',
                AttributeType: 'S', // (S | N | B) for string, number, binary
            },
			{
                AttributeName: 'eventid',
                AttributeType: 'S', // (S | N | B) for string, number, binary
            },
			{
                AttributeName: 'userid',
                AttributeType: 'S', // (S | N | B) for string, number, binary
            },
			{
                AttributeName: 'userstatus',
                AttributeType: 'S', // (S | N | B) for string, number, binary
            }
        ],
        ProvisionedThroughput: { // required provisioned throughput for the table
            ReadCapacityUnits: 1, 
            WriteCapacityUnits: 1, 
        },
		GlobalSecondaryIndexes: [ // optional (list of GlobalSecondaryIndex)
            { 
                IndexName: 'eventid', 
                KeySchema: [
                    { // Required HASH type attribute
                        AttributeName: 'eventid',
                        KeyType: 'HASH',
                    }
                ],
                Projection: { // attributes to project into the index
                    ProjectionType: 'ALL', // (ALL | KEYS_ONLY | INCLUDE)
                    // NonKeyAttributes: [ // required / allowed only for INCLUDE
                    //     'attribute_name_1',
                    //     // ... more attribute names ...
                    // ],
                },
                ProvisionedThroughput: { // throughput to provision to the index
                    ReadCapacityUnits: 1,
                    WriteCapacityUnits: 1,
                },
            },
            { 
                IndexName: 'userid', 
                KeySchema: [
                    { // Required HASH type attribute
                        AttributeName: 'userid',
                        KeyType: 'HASH',
                    }
                ],
                Projection: { // attributes to project into the index
                    ProjectionType: 'ALL', // (ALL | KEYS_ONLY | INCLUDE)
                    // NonKeyAttributes: [ // required / allowed only for INCLUDE
                    //     'attribute_name_1',
                    //     // ... more attribute names ...
                    // ],
                },
                ProvisionedThroughput: { // throughput to provision to the index
                    ReadCapacityUnits: 1,
                    WriteCapacityUnits: 1,
                },
            },
			{ 
                IndexName: 'userstatus', 
                KeySchema: [
                    { // Required HASH type attribute
                        AttributeName: 'userstatus',
                        KeyType: 'HASH',
                    }
                ],
                Projection: { // attributes to project into the index
                    ProjectionType: 'ALL', // (ALL | KEYS_ONLY | INCLUDE)
                    // NonKeyAttributes: [ // required / allowed only for INCLUDE
                    //     'attribute_name_1',
                    //     // ... more attribute names ...
                    // ],
                },
                ProvisionedThroughput: { // throughput to provision to the index
                    ReadCapacityUnits: 1,
                    WriteCapacityUnits: 1,
                },
            }
        ]
    };
    dynamodb.createTable(params, function(err, data) {
        if (err) ppJson(err); // an error occurred
        else ppJson(data); // successful response
    
    });