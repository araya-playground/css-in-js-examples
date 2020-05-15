import { FunctionComponent, h } from "preact";
import fastify from "fastify";
import fastifyStatic from "fastify-static";
import render from "preact-render-to-string";
import { CardWithLinaria } from "./card";
import path from "path";
import "./global-styles";

const server = fastify();
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
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
        <div className="container container__flex-center">
          {props.children}
        </div>
      </body>
    </html>
  );
};
server.register(fastifyStatic, {
  root: path.join(process.cwd(), "linaria", "dist"),
});
server.get("/", async (req, reply) => {
  reply.headers({ "Content-Type": "text/html" });
  reply.send(
    render(
      <App>
        <CardWithLinaria />
      </App>
    )
  );
});
server.listen(3000);
