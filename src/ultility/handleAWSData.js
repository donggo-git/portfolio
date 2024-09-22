import AWS from 'aws-sdk';



AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export const getData = async (tableName, key) => {
    const params = {
        TableName: tableName
    };

    try {
        const data = await dynamoDB.scan(params).promise();
        console.log('Data retrieved:', data.Items);
        return data.Items;
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
};

export const putData = async (tableName, item) => {
    const params = {
        TableName: tableName,
        Item: item,
    };

    try {
        await dynamoDB.put(params).promise();
        console.log('Data added/updated successfully');
    } catch (error) {
        console.error('Error adding/updating data:', error);
    }
};

export const sendEmail = async (data) => {
    const ses = new AWS.SES({ apiVersion: '2010-12-01' });
    const params = {
        Source: process.env.REACT_APP_PERSONAL_EMAIL, // Must be a verified email in SES
        Destination: {
            ToAddresses: [process.env.REACT_APP_PERSONAL_EMAIL], // Recipient email address
        },
        Message: {
            Subject: {
                Data: 'reaching out', // Email Subject
            },
            Body: {
                Text: {
                    Data: `
                        name: ${data.Name}
                        email: ${data.Email}
                        phone number: ${data['Phone number']}
                        content: ${data.Message}
                    `, // Email Body (Plain Text)
                },
            },
        },
    };

    // Send the email
    ses.sendEmail(params, (err, data) => {
        if (err) {
            console.error('Error sending email:', err); // Log any errors
        } else {
            console.log('Email sent successfully:', data); // Log the success message
        }
    })
}