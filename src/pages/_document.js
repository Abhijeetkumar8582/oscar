import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script defer type="text/javascript" src="https://prod-druid-apc.azureedge.net/v2/druid_webchat_v2_load.js?botId=a3040b27-634d-452e-282f-08dce20f5359&amp;baseUrl=https%3A%2F%2Fdruidapi.druidplatform.com">
        </script>
      </body>
    </Html>
  );
}
