/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  AFDEndpoint,
  AFDEndpointsListByProfileOptionalParams,
  Usage,
  AFDEndpointsListResourceUsageOptionalParams,
  AFDEndpointsGetOptionalParams,
  AFDEndpointsGetResponse,
  AFDEndpointsCreateOptionalParams,
  AFDEndpointsCreateResponse,
  AFDEndpointUpdateParameters,
  AFDEndpointsUpdateOptionalParams,
  AFDEndpointsUpdateResponse,
  AFDEndpointsDeleteOptionalParams,
  AfdPurgeParameters,
  AFDEndpointsPurgeContentOptionalParams,
  ValidateCustomDomainInput,
  AFDEndpointsValidateCustomDomainOptionalParams,
  AFDEndpointsValidateCustomDomainResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AFDEndpoints. */
export interface AFDEndpoints {
  /**
   * Lists existing AzureFrontDoor endpoints.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: AFDEndpointsListByProfileOptionalParams
  ): PagedAsyncIterableIterator<AFDEndpoint>;
  /**
   * Checks the quota and actual usage of endpoints under the given CDN profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  listResourceUsage(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: AFDEndpointsListResourceUsageOptionalParams
  ): PagedAsyncIterableIterator<Usage>;
  /**
   * Gets an existing AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: AFDEndpointsGetOptionalParams
  ): Promise<AFDEndpointsGetResponse>;
  /**
   * Creates a new AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param endpoint Endpoint properties
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    endpoint: AFDEndpoint,
    options?: AFDEndpointsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AFDEndpointsCreateResponse>,
      AFDEndpointsCreateResponse
    >
  >;
  /**
   * Creates a new AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param endpoint Endpoint properties
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    endpoint: AFDEndpoint,
    options?: AFDEndpointsCreateOptionalParams
  ): Promise<AFDEndpointsCreateResponse>;
  /**
   * Updates an existing AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile. Only tags can be updated after creating an endpoint. To
   * update origins, use the Update Origin operation. To update origin groups, use the Update Origin
   * group operation. To update domains, use the Update Custom Domain operation.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param endpointUpdateProperties Endpoint update properties
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    endpointUpdateProperties: AFDEndpointUpdateParameters,
    options?: AFDEndpointsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AFDEndpointsUpdateResponse>,
      AFDEndpointsUpdateResponse
    >
  >;
  /**
   * Updates an existing AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile. Only tags can be updated after creating an endpoint. To
   * update origins, use the Update Origin operation. To update origin groups, use the Update Origin
   * group operation. To update domains, use the Update Custom Domain operation.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param endpointUpdateProperties Endpoint update properties
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    endpointUpdateProperties: AFDEndpointUpdateParameters,
    options?: AFDEndpointsUpdateOptionalParams
  ): Promise<AFDEndpointsUpdateResponse>;
  /**
   * Deletes an existing AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: AFDEndpointsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an existing AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: AFDEndpointsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Removes a content from AzureFrontDoor.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param contents The list of paths to the content and the list of linked domains to be purged. Path
   *                 can be a full URL, e.g. '/pictures/city.png' which removes a single file, or a directory with a
   *                 wildcard, e.g. '/pictures/*' which removes all folders and files in the directory.
   * @param options The options parameters.
   */
  beginPurgeContent(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    contents: AfdPurgeParameters,
    options?: AFDEndpointsPurgeContentOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Removes a content from AzureFrontDoor.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param contents The list of paths to the content and the list of linked domains to be purged. Path
   *                 can be a full URL, e.g. '/pictures/city.png' which removes a single file, or a directory with a
   *                 wildcard, e.g. '/pictures/*' which removes all folders and files in the directory.
   * @param options The options parameters.
   */
  beginPurgeContentAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    contents: AfdPurgeParameters,
    options?: AFDEndpointsPurgeContentOptionalParams
  ): Promise<void>;
  /**
   * Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainProperties Custom domain to be validated.
   * @param options The options parameters.
   */
  validateCustomDomain(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainProperties: ValidateCustomDomainInput,
    options?: AFDEndpointsValidateCustomDomainOptionalParams
  ): Promise<AFDEndpointsValidateCustomDomainResponse>;
}
