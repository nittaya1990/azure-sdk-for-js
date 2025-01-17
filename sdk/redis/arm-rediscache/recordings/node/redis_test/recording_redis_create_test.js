let nock = require('nock');

module.exports.hash = "baab33ab9d66c6c6e51c0f1b7a5984cc";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '791d4b96-cf7d-4212-8f5b-a085069f1200',
  'x-ms-ests-server',
  '2.1.12071.16 - SEASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AsJNfFGjz1pIlJ2YKXXOj0s; expires=Thu, 28-Oct-2021 02:49:18 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrO76yzqtUgNRoE1eIK-xAaKR-EpLlF8BcAwDCd0IyaM0cZoH4RIrt4XAlhS2T6PG7UXrj1AAQrJ5nDou4_K9unZIArhmKg7E0WMfWIVnbcBzVzZ5I_rzEn5_MfWtECi1qaaIKO66Hs0Eu5atDtGNWm4ngE6k1C3ISl9OrE-E2xEQgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 28 Sep 2021 02:49:18 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'ba098c41-5e24-43b7-aaf4-4a46acef1100',
  'x-ms-ests-server',
  '2.1.12071.16 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=Ag_MoVXdm8tDuAtH088A0xY; expires=Thu, 28-Oct-2021 02:49:18 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrmEz3Pl_9ipMOT_RQkWm-FF1G5q_VTiUMyVj9m5WBnp4DWGl06W0Il9H8_2mkjPrdjzE5FD-h0OhjR_M6jASaR3Ze66V3mQW83J9EVd-MVs7Aqjd959E7cNZfe6LsuTt96nZ3jWk7vqcT6n9axPXRjNUIBP6GkU1bV57P7WcP5_UgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 28 Sep 2021 02:49:18 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.1&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=52d60697-153f-4346-98d4-9611384f2b31&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'f9d979f1-57a4-42d5-bd48-4debeb890000',
  'x-ms-ests-server',
  '2.1.12071.17 - KRSLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=ApYwTW-qYMxFrgPCmDcxQmUWPr5BAQAAAK155NgOAAAA; expires=Thu, 28-Oct-2021 02:49:18 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 28 Sep 2021 02:49:18 GMT',
  'Content-Length',
  '1351'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/networknamex', {"location":"eastus","properties":{"addressSpace":{"addressPrefixes":["10.0.0.0/16"]}}})
  .query(true)
  .reply(201, {"name":"networknamex","id":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/networknamex","etag":"W/\"b4ca6076-51b6-49c7-b262-7ee4754ba4eb\"","type":"Microsoft.Network/virtualNetworks","location":"eastus","properties":{"provisioningState":"Updating","resourceGuid":"2a0b207d-c156-4852-bb89-a5cdc18b544a","addressSpace":{"addressPrefixes":["10.0.0.0/16"]},"subnets":[],"virtualNetworkPeerings":[],"enableDdosProtection":false}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '610',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '3',
  'x-ms-request-id',
  '33c7836d-665b-4203-b112-c8d03efd8f5e',
  'Azure-AsyncOperation',
  'https://management.azure.com/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/33c7836d-665b-4203-b112-c8d03efd8f5e?api-version=2021-03-01',
  'x-ms-correlation-request-id',
  '962a5e0d-d582-40c9-b0c2-ff8e66226b97',
  'Azure-AsyncNotification',
  'Enabled',
  'x-ms-arm-service-request-id',
  'b609f49a-d7fa-4c4f-99ea-297a73b9c882',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1199',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T024923Z:962a5e0d-d582-40c9-b0c2-ff8e66226b97',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 28 Sep 2021 02:49:22 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/33c7836d-665b-4203-b112-c8d03efd8f5e')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bb5ebe6a347e94767cb97757551e74df3d16f9cfc","92ff078f3cd6f41e000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Retry-After',
  '10',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'bd7fe79b-6736-408c-a779-9eb53897e457',
  'x-ms-correlation-request-id',
  '46f29927-4088-4892-98ff-9353ab3c5863',
  'x-ms-arm-service-request-id',
  'b3167d09-b97b-4f73-b043-fe31dd24f81f',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11999',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T024923Z:46f29927-4088-4892-98ff-9353ab3c5863',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 28 Sep 2021 02:49:22 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/33c7836d-665b-4203-b112-c8d03efd8f5e')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bb5ebe6a347e94767cb97757551e74df3d16f9cfc","92ff078f3cd6f41e000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Retry-After',
  '20',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '6f1cc11b-1af8-44a5-863f-b723ed698338',
  'x-ms-correlation-request-id',
  '05f35462-0a86-4586-a537-048900a8f2bc',
  'x-ms-arm-service-request-id',
  '146cb18e-8734-4041-ad77-7f9d61d9cc8d',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11998',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T024923Z:05f35462-0a86-4586-a537-048900a8f2bc',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 28 Sep 2021 02:49:22 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/33c7836d-665b-4203-b112-c8d03efd8f5e')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bb5ebe6a347e94767cb97757551e74df3d16f9cfc","92ff078f3cd6f41e000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Retry-After',
  '20',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '4b64a2b7-cfd5-4e76-b870-73c5a8452297',
  'x-ms-correlation-request-id',
  'f89e9795-669c-4985-a214-e51f28e0b4b3',
  'x-ms-arm-service-request-id',
  'e27b979e-1640-45ea-98dc-5689d4703dce',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11997',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T024924Z:f89e9795-669c-4985-a214-e51f28e0b4b3',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 28 Sep 2021 02:49:23 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/33c7836d-665b-4203-b112-c8d03efd8f5e')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bb5ebe6a347e94767cb97757551e74df3d16f9cfc","92ff078f3cd6f41e000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Retry-After',
  '40',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'eafb496d-961d-4943-aa85-2d1abe7553e4',
  'x-ms-correlation-request-id',
  'a42fbe1d-97d2-4f2f-b98e-b9102e3653bc',
  'x-ms-arm-service-request-id',
  '4d688cb4-7f3f-4a2e-b637-55231ff82234',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11996',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T024924Z:a42fbe1d-97d2-4f2f-b98e-b9102e3653bc',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 28 Sep 2021 02:49:23 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/33c7836d-665b-4203-b112-c8d03efd8f5e')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bb5ebe6a347e94767cb97757551e74df3d16f9cfc","92ff078f3cd6f41e000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Retry-After',
  '40',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'eca88406-0e86-493b-8dc0-bd36ff6763bd',
  'x-ms-correlation-request-id',
  '72bf0b4d-808b-44c2-b42b-1b41ac00bb11',
  'x-ms-arm-service-request-id',
  '7ecaf9fc-090d-4294-9a39-b135a604c521',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11995',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T024925Z:72bf0b4d-808b-44c2-b42b-1b41ac00bb11',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 28 Sep 2021 02:49:24 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/33c7836d-665b-4203-b112-c8d03efd8f5e')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bb5ebe6a347e947afd7d3699ecff2d947bf71f24b","fe1f4f9490471d000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'f22c9cf5-7f8c-4248-a556-6aaaf16fe9a8',
  'x-ms-correlation-request-id',
  'b1724d5d-2ae2-4536-af3d-7c486fa787a2',
  'x-ms-arm-service-request-id',
  '690b280c-d96b-4ec8-81e4-7c27ece9161e',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11994',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T024925Z:b1724d5d-2ae2-4536-af3d-7c486fa787a2',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 28 Sep 2021 02:49:24 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/networknamex/subnets/subnetworknamex', {"properties":{"addressPrefix":"10.0.0.0/24"}})
  .query(true)
  .reply(201, {"name":"subnetworknamex","id":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/networknamex/subnets/subnetworknamex","etag":"W/\"34e68542-cb92-4729-ac5d-84b849d542b3\"","properties":{"provisioningState":"Updating","addressPrefix":"10.0.0.0/24","delegations":[],"privateEndpointNetworkPolicies":"Enabled","privateLinkServiceNetworkPolicies":"Enabled"},"type":"Microsoft.Network/virtualNetworks/subnets"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '541',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '3',
  'x-ms-request-id',
  '31c298bf-d021-4104-82ab-ed595ef9ae38',
  'Azure-AsyncOperation',
  'https://management.azure.com/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/31c298bf-d021-4104-82ab-ed595ef9ae38?api-version=2021-03-01',
  'x-ms-correlation-request-id',
  '5a41a40a-0e24-4af0-bc14-776627b46d4c',
  'x-ms-arm-service-request-id',
  '95955578-2d96-42f9-92a5-18a7ef418da4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1198',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T024925Z:5a41a40a-0e24-4af0-bc14-776627b46d4c',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 28 Sep 2021 02:49:24 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/31c298bf-d021-4104-82ab-ed595ef9ae38')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bb5ebe6a347e947afd7d3699ecff2d947bf71f24b","fe1f4f9490471d000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '83a45b3d-caf1-4b5a-b196-d50894c82cff',
  'x-ms-correlation-request-id',
  'b7768a15-de6a-4282-ad3f-0270a78c955d',
  'x-ms-arm-service-request-id',
  '635e883a-478e-4682-8ec1-9573624627b0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11993',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T024926Z:b7768a15-de6a-4282-ad3f-0270a78c955d',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 28 Sep 2021 02:49:26 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/redis/myrediscachexxx111', {"zones":["1"],"location":"eastus","properties":{"redisConfiguration":{"maxmemory-policy":"allkeys-lru"},"enableNonSslPort":true,"shardCount":2,"minimumTlsVersion":"1.2","sku":{"name":"Premium","family":"P","capacity":1},"subnetId":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/networknamex/subnets/subnetworknamex","staticIP":"10.0.0.5"}})
  .query(true)
  .reply(201, {"id":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/Redis/myrediscachexxx111","location":"East US","name":"myrediscachexxx111","type":"Microsoft.Cache/Redis","tags":{},"properties":{"provisioningState":"Creating","redisVersion":"4.0.14","sku":{"name":"Premium","family":"P","capacity":1},"enableNonSslPort":true,"instances":[{"sslPort":15000,"nonSslPort":13000,"isMaster":false,"isPrimary":false},{"sslPort":15001,"nonSslPort":13001,"isMaster":false,"isPrimary":false},{"sslPort":15002,"nonSslPort":13002,"isMaster":false,"isPrimary":false},{"sslPort":15003,"nonSslPort":13003,"isMaster":false,"isPrimary":false}],"minimumTlsVersion":"1.2","publicNetworkAccess":"Enabled","redisConfiguration":{"maxmemory-policy":"allkeys-lru","maxclients":"7500","maxmemory-reserved":"200","maxfragmentationmemory-reserved":"300","maxmemory-delta":"200"},"accessKeys":{"primaryKey":"8ybKetYwvgeRyIrsdEeS53o3XI55bnWhyUw723b0Vc8=","secondaryKey":"zBZ3dUhgwU6vQgFbnSNhCrgxZ4QQncqhzYKobLOIdJ0="},"hostName":"myrediscachexxx111.redis.cache.windows.net","port":6379,"sslPort":6380,"subnetId":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/networknamex/subnets/subnetworknamex","staticIP":"10.0.0.5","shardCount":2,"linkedServers":[]},"zones":["1"]}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '1357',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://management.azure.com/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/redis/myrediscachexxx111?api-version=2020-12-01',
  'x-ms-request-id',
  '63a7c40b-62c6-41e8-98c2-73f09f6c010c',
  'x-rp-server-mvid',
  'c8066022-f720-49e8-9fec-c4ac03b5b4cd',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1197',
  'x-ms-correlation-request-id',
  '9f6e576d-0af6-454b-b47c-3116b20233bd',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T024933Z:9f6e576d-0af6-454b-b47c-3116b20233bd',
  'Date',
  'Tue, 28 Sep 2021 02:49:32 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/redis/myrediscachexxx111')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fdd6dd693665a17abb6a896cddd877be70fefcf0eceb7ef4d3f7db0bdbfbbb7bffd7077fa60fb607abef3603a9b9cefedefdeadf3a65ad7d3fcf3ba5aaf9abb8beb9f6edabc69efaeeaeab298e57573f78b625a574d75de8e4fb2e93cbffb2a9f156858e3e7141fbd7bf76e7777f7a3d1476535cdd037e1729a356dfad56bfa70992d72fa20fa427bbdc277d12ef07576d17cf4e817ff92d14784ce2aafdb22c7dff8ebb268a8a36279f1bacd5ac038a973ea7b7941af71473f49b8530bfa667fbc33dedda7cf9bb76bbcad08bdacf345b15ed0e7e7d9a228aff111fd31cd56d9b468e9cf5dea375f6693327f512d5f37e5cbaa6e3f7ad4d6eb7cf451b16cda6c39053adffbc51f35e6cbddfb3b3b3b3464affdee3dfea868be208ae4f5478fceb3b20184e6655d2cb29a3ae24f7ec9a80367b70f873e7a7f387b7d38f4d1fbc3b9d787431fdd0ce7fba38f16c5b258ac176f4a6f5676c77b44edd57a5216d317797b55d56f8fa74450a2e847a74cf5197dcf5379522dcf8b8b754df38b577ff1478becdd225f54f5f5f6aaa2d7a9ab8fb2b27c9b5f37db65bda6d7a8c1b42cf2650b680f0879f94c5f229ecfeb4b82ffe8a33df3d5799d5d2ce805eea3df8e062bedf4ab595eb6197d8ef7894d32c6fcf722043e7ab45c97e5e8a379d5b42f84d1fa9c3fe60fc6fcc9f8aa58ceaaab66bccc5bea62c5c4fdf4de8387c4af86d69fde3b201622e9a6366740e72efdfeb329e93a21772f8bba5d67a5fed9dca5fef10b24e8dd5dc281fe6ef4a7fd9c0641b2d116d3b39784e9ee0e49dfcef83e3e9d67f5eca45a2f6944c48165b17c9bcf5e83c23591ed7bdf273afea05ab2487db4fbd1f77f","c9ff03b438e1cbd6040000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '75643f2f-f9fd-4c4a-93c3-e90ea4c5f0f9',
  'x-rp-server-mvid',
  'c8066022-f720-49e8-9fec-c4ac03b5b4cd',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11992',
  'x-ms-correlation-request-id',
  'c80d4646-f8ee-453e-88cd-e0a601381622',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T024933Z:c80d4646-f8ee-453e-88cd-e0a601381622',
  'Date',
  'Tue, 28 Sep 2021 02:49:33 GMT'
]);
