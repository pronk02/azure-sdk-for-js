// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @summary Demonstrates how to control the number of concurrent requests using the maxConcurrency option
 */

import { DefaultAzureCredential } from "@azure/identity";
import { LogsIngestionClient } from "@azure/monitor-ingestion";

require("dotenv").config();

async function main() {
  const logsIngestionEndpoint = process.env.LOGS_INGESTION_ENDPOINT || "logs_ingestion_endpoint";
  const ruleId = process.env.DATA_COLLECTION_RULE_ID || "data_collection_rule_id";
  const streamName = process.env.STREAM_NAME || "data_stream_name";
  const credential = new DefaultAzureCredential();
  const client = new LogsIngestionClient(logsIngestionEndpoint, credential);

  // Constructing a large number of logs to ensure batching takes place
  const logs = [];
  for (let i = 0; i < 100000; ++i) {
    logs.push({
      Time: "2021-12-08T23:51:14.1104269Z",
      Computer: "Computer1",
      AdditionalContext: `context-${i}`,
    });
  }

  // Set the maximum concurrency to 1 to prevent concurrent requests entirely
  const result = await client.upload(ruleId, streamName, logs, { maxConcurrency: 1 });
  if (result.status !== "Success") {
    console.log("Some logs have failed to complete ingestion. Upload status=", result.status);
    for (const errors of result.errors) {
      console.log(`Error - ${JSON.stringify(errors.cause)}`);
      console.log(`Log - ${JSON.stringify(errors.failedLogs)}`);
    }
  }
}
main().catch((err) => {
  console.error("The sample encountered an error:", err);
  process.exit(1);
});

module.exports = { main };
