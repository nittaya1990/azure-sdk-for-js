// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @summary Purges all deleted keys from an Azure Key Vault.
 */

const { KeyClient } = require("@azure/keyvault-keys");
const { DefaultAzureCredential } = require("@azure/identity");

// Load the .env file if it exists
const dotenv = require("dotenv");
dotenv.config();

async function main() {
  // DefaultAzureCredential expects the following three environment variables:
  // - AZURE_TENANT_ID: The tenant ID in Azure Active Directory
  // - AZURE_CLIENT_ID: The application (client) ID registered in the AAD tenant
  // - AZURE_CLIENT_SECRET: The client secret for the registered application
  const credential = new DefaultAzureCredential();

  const url = process.env["KEYVAULT_URI"] || "<keyvault-url>";
  const client = new KeyClient(url, credential);

  for await (const properties of client.listPropertiesOfKeys()) {
    try {
      const poller = await client.beginDeleteKey(properties.name);
      await poller.pollUntilDone();
    } catch (e) {
      // We don't care about the error because this script is intended to just clean up the KeyVault.
    }
  }
  for await (const deletedKey of client.listDeletedKeys()) {
    try {
      // This will take a while.
      await client.purgeDeletedKey(deletedKey.name);
    } catch (e) {
      // We don't care about the error because this script is intended to just clean up the KeyVault.
    }
  }
}

main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
