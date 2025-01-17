let nock = require('nock');

module.exports.hash = "86bf0c0f959aa87dcf70aaa0f5204570";

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
  '979cd7aa-04ee-4bee-9b66-b177d3290f00',
  'x-ms-ests-server',
  '2.1.12231.7 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AnpmJqkoli1PlpMEDxvcNOA; expires=Sat, 11-Dec-2021 05:40:36 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr4gxp_EEDZwlNwAYNj0UrWK9VLJaGPp676ji68ZDAMLGXiFzrrbN4HbXodvh_wH8nSa5yk_Ss2Bd0GQWIRMEaQKGuvE4Egz-0zTFYdDMqqA5ioX9aCn2Fcq4P0AqCmcz8sQrVtJYmAMQ3Uh5iwV7HITHakYL2kBzUbgecag36BQsgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 11 Nov 2021 05:40:35 GMT',
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
  '979cd7aa-04ee-4bee-9b66-b177d6290f00',
  'x-ms-ests-server',
  '2.1.12231.7 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AvblzvAbejZEsQrKCuzc_mE; expires=Sat, 11-Dec-2021 05:40:36 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrSxMoRB_8hfOV7QwQsVTlhwABZJSoC7llF23kK_4iC4u-1X1rnLc2sNqTRUjLKENYZd7ivubm5p0CxrIO_mlyfwYPg-zG2hxxXJIU6XWekMtIL62sCj52JsziPdHYwJABY13aiDJzlPxCq7ssrjtGow4PwxHqE5ooK3y4f9ox8IcgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 11 Nov 2021 05:40:35 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.2&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=bdee3324-1db5-460c-8c63-03454ce54668&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D")
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
  '0d3eafcc-bc79-481b-b7ec-4c3575900900',
  'x-ms-ests-server',
  '2.1.12231.7 - KRSLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AjRrupw8Ys5PgVLBsI84HW8WPr5BAQAAANSjHtkOAAAA; expires=Sat, 11-Dec-2021 05:40:36 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 11 Nov 2021 05:40:35 GMT',
  'Content-Length',
  '1351'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .delete('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cdn/profiles/myprofilexxx/endpoints/myendpointxxx')
  .query(true)
  .reply(202, "", [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'Location',
  'https://management.azure.com/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/87a4953b-0689-420b-ba3f-5e6c183b6296/profileresults/myprofilexxx/endpointresults/myendpointxxx?api-version=2020-09-01',
  'Retry-After',
  '10',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'c2cfa3eb-215c-4bb2-aa0e-3387e289dbf8',
  'x-ms-client-request-id',
  'efff24de-58d6-40c1-99da-07ac5e4e809e',
  'Azure-AsyncOperation',
  'https://management.azure.com/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/87a4953b-0689-420b-ba3f-5e6c183b6296?api-version=2020-09-01',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-deletes',
  '14999',
  'x-ms-correlation-request-id',
  'c8723b7c-9560-44b9-83e5-890a22c57e8f',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211111T054038Z:c8723b7c-9560-44b9-83e5-890a22c57e8f',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 11 Nov 2021 05:40:37 GMT',
  'Content-Length',
  '0'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/87a4953b-0689-420b-ba3f-5e6c183b6296')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'd9eeeb9a-5ca9-4b1c-b1b1-fbb7b3851154',
  'x-ms-client-request-id',
  '3e125cec-58e9-4461-9a39-b25928916502',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11971',
  'x-ms-correlation-request-id',
  'dd1c406a-099c-47d3-9382-a54b91142693',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211111T054038Z:dd1c406a-099c-47d3-9382-a54b91142693',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 11 Nov 2021 05:40:38 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/87a4953b-0689-420b-ba3f-5e6c183b6296')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'c8d7ff1d-17e0-40f2-a483-1da36fce7b32',
  'x-ms-client-request-id',
  'fa9827f9-c39e-4ca3-bf02-b377093019d2',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11970',
  'x-ms-correlation-request-id',
  'f8c04120-aeca-4e58-a5e5-f48abbf4e083',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211111T054041Z:f8c04120-aeca-4e58-a5e5-f48abbf4e083',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 11 Nov 2021 05:40:40 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/87a4953b-0689-420b-ba3f-5e6c183b6296')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'faeb6acf-1081-4ff6-9f10-d4470cba67d0',
  'x-ms-client-request-id',
  '46dd03bc-9a8e-4d5f-897f-66bea8589c42',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11969',
  'x-ms-correlation-request-id',
  'c2e464e6-7bc3-4717-bc99-af49e84af0bb',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211111T054043Z:c2e464e6-7bc3-4717-bc99-af49e84af0bb',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 11 Nov 2021 05:40:42 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/87a4953b-0689-420b-ba3f-5e6c183b6296')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '30f2d18e-c6ac-4b02-af94-037cc12b4d03',
  'x-ms-client-request-id',
  '0a4ba168-a77f-4c1d-90fb-f8d75b8c5054',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11968',
  'x-ms-correlation-request-id',
  'a642c63a-5f51-477f-a118-d4ea50e1f71b',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211111T054046Z:a642c63a-5f51-477f-a118-d4ea50e1f71b',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 11 Nov 2021 05:40:45 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/87a4953b-0689-420b-ba3f-5e6c183b6296')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'd4425a49-b600-4260-8bf3-4efa03fd9e11',
  'x-ms-client-request-id',
  'ee9195a7-5178-4c1e-a9ba-b068775e9e34',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11967',
  'x-ms-correlation-request-id',
  'b29f475c-e8c9-4345-8785-105456bce822',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211111T054048Z:b29f475c-e8c9-4345-8785-105456bce822',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 11 Nov 2021 05:40:47 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/87a4953b-0689-420b-ba3f-5e6c183b6296')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '68703a47-b6a6-4532-b5b9-ac17fcd484b7',
  'x-ms-client-request-id',
  'e8d15886-dea1-428b-9b87-7ce65d854a18',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11966',
  'x-ms-correlation-request-id',
  '8c376879-e029-4fa1-acad-1c9603388135',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211111T054050Z:8c376879-e029-4fa1-acad-1c9603388135',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 11 Nov 2021 05:40:49 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/87a4953b-0689-420b-ba3f-5e6c183b6296')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471fbd5e4fa7793ecb671f8d3ecaebbaaa3f7af48b3f9a56b39cbe7b512d73fa7891374d76411f2cd765f94b","7ec9ff03e35461a53d000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '66023101-e560-41b7-81bb-fa0ba72131e7',
  'x-ms-client-request-id',
  'aaa51c07-1fc9-4e4a-ae86-80f197c0b424',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11965',
  'x-ms-correlation-request-id',
  'c4879c15-2738-4a01-b511-a9ddc26fe12c',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211111T054053Z:c4879c15-2738-4a01-b511-a9ddc26fe12c',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 11 Nov 2021 05:40:52 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cdn/profiles/myprofilexxx/endpoints')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1479759b9ce3f7af4bdefff","92ff0742ea40440c000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '9e395c66-9778-4d55-bcc5-5d73c5eb2c6d',
  'x-ms-client-request-id',
  '8638cfbe-fd57-40bc-9bf7-f2434489d845',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-resource-requests',
  '46',
  'x-ms-correlation-request-id',
  '93cd9846-ee2c-44d4-95b9-88422588eedd',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211111T054053Z:93cd9846-ee2c-44d4-95b9-88422588eedd',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 11 Nov 2021 05:40:52 GMT'
]);
