const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload321",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://etizbo9qa0.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_mJUw3ZWA3",
      APP_CLIENT_ID: "62obi2e3fjn1asqlhoptld0re0",
      IDENTITY_POOL_ID: "us-east-1:35120c22-3b2a-4606-9a8a-5f9019a851f5",
    },
  };
  
  export default config;