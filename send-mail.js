const AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const params = {
  Destination: {
    ToAddresses: ["meetsoni01041996@gmail.com"],
  },
  Message: {
    Body: {
      Text: { Data: "The job has completed." },
    },
    Subject: { Data: "Job result" },
  },
  Source: "mksoni1627@gmail.com",
};

ses.sendEmail(params, (err, data) => {
  if (err) console.error(err, err.stack);
  else console.log(data);
});
