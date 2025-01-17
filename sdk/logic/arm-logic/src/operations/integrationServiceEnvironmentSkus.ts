/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { IntegrationServiceEnvironmentSkus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";
import {
  IntegrationServiceEnvironmentSkuDefinition,
  IntegrationServiceEnvironmentSkusListNextOptionalParams,
  IntegrationServiceEnvironmentSkusListOptionalParams,
  IntegrationServiceEnvironmentSkusListResponse,
  IntegrationServiceEnvironmentSkusListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IntegrationServiceEnvironmentSkus operations. */
export class IntegrationServiceEnvironmentSkusImpl
  implements IntegrationServiceEnvironmentSkus {
  private readonly client: LogicManagementClientContext;

  /**
   * Initialize a new instance of the class IntegrationServiceEnvironmentSkus class.
   * @param client Reference to the service client
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of integration service environment Skus.
   * @param resourceGroup The resource group.
   * @param integrationServiceEnvironmentName The integration service environment name.
   * @param options The options parameters.
   */
  public list(
    resourceGroup: string,
    integrationServiceEnvironmentName: string,
    options?: IntegrationServiceEnvironmentSkusListOptionalParams
  ): PagedAsyncIterableIterator<IntegrationServiceEnvironmentSkuDefinition> {
    const iter = this.listPagingAll(
      resourceGroup,
      integrationServiceEnvironmentName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroup,
          integrationServiceEnvironmentName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroup: string,
    integrationServiceEnvironmentName: string,
    options?: IntegrationServiceEnvironmentSkusListOptionalParams
  ): AsyncIterableIterator<IntegrationServiceEnvironmentSkuDefinition[]> {
    let result = await this._list(
      resourceGroup,
      integrationServiceEnvironmentName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroup,
        integrationServiceEnvironmentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroup: string,
    integrationServiceEnvironmentName: string,
    options?: IntegrationServiceEnvironmentSkusListOptionalParams
  ): AsyncIterableIterator<IntegrationServiceEnvironmentSkuDefinition> {
    for await (const page of this.listPagingPage(
      resourceGroup,
      integrationServiceEnvironmentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of integration service environment Skus.
   * @param resourceGroup The resource group.
   * @param integrationServiceEnvironmentName The integration service environment name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroup: string,
    integrationServiceEnvironmentName: string,
    options?: IntegrationServiceEnvironmentSkusListOptionalParams
  ): Promise<IntegrationServiceEnvironmentSkusListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroup, integrationServiceEnvironmentName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroup The resource group.
   * @param integrationServiceEnvironmentName The integration service environment name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroup: string,
    integrationServiceEnvironmentName: string,
    nextLink: string,
    options?: IntegrationServiceEnvironmentSkusListNextOptionalParams
  ): Promise<IntegrationServiceEnvironmentSkusListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroup, integrationServiceEnvironmentName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationServiceEnvironmentSkuList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.integrationServiceEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationServiceEnvironmentSkuList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroup,
    Parameters.integrationServiceEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
