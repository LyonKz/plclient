export default {
    MAX_ATTACHMENT_SZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "profesbucket"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://jj9ulnm812.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_yEl31Dije",
      APP_CLIENT_ID: "3djlusueq62n52j43ktc10da6i",
      IDENTITY_POOL_ID: "us-east-2:b0168ad3-2217-4cd8-bd42-04a701a7d850"
    }
  };