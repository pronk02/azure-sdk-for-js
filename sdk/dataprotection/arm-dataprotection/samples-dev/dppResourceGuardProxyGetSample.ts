/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DataProtectionClient } from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to
 *
 * @summary
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/preview/2022-11-01-preview/examples/ResourceGuardProxyCRUD/GetResourceGuardProxy.json
 */
async function getResourceGuardProxy() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "5e13b949-1218-4d18-8b99-7e12155ec4f7";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "SampleResourceGroup";
  const vaultName = "sampleVault";
  const resourceGuardProxyName = "swaggerExample";
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.dppResourceGuardProxy.get(
    resourceGroupName,
    vaultName,
    resourceGuardProxyName
  );
  console.log(result);
}

async function main() {
  getResourceGuardProxy();
}

main().catch(console.error);
