/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureBotService } = require("@azure/arm-botservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates a Connection Setting registration for a Bot Service
 *
 * @summary Updates a Connection Setting registration for a Bot Service
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/stable/2022-09-15/examples/UpdateConnection.json
 */
async function updateConnectionSetting() {
  const subscriptionId = process.env["BOTSERVICE_SUBSCRIPTION_ID"] || "subscription-id";
  const resourceGroupName = process.env["BOTSERVICE_RESOURCE_GROUP"] || "OneResourceGroupName";
  const resourceName = "samplebotname";
  const connectionName = "sampleConnection";
  const parameters = {
    etag: "etag1",
    location: "global",
    properties: {
      clientId: "sampleclientid",
      clientSecret: "samplesecret",
      parameters: [
        { key: "key1", value: "value1" },
        { key: "key2", value: "value2" },
      ],
      scopes: "samplescope",
      serviceProviderDisplayName: "serviceProviderDisplayName",
      serviceProviderId: "serviceproviderid",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.botConnection.update(
    resourceGroupName,
    resourceName,
    connectionName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateConnectionSetting();
}

main().catch(console.error);