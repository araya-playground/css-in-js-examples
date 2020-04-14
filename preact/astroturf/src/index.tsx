import { FunctionComponent, h } from "preact";
import render from "preact-render-to-string";
import { CardWithAstroturf } from "./card";
import { RequestListener } from "http";
import * as http from "http";

const App: FunctionComponent = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
};

const requestListener: RequestListener = (req, res) => {
  res.setHeader("status", 200);
  res.setHeader("Content-Type", "text/html");
  res.end(
    render(
      <App>
        <CardWithAstroturf />
      </App>
    )
  );
};

const server = http.createServer(requestListener);
server.listen(3000);
