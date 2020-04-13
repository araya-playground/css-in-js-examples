import {FunctionComponent, h} from "preact";
import fastify from "fastify";
import render from 'preact-render-to-string';
import {CardWithAstroturf} from "./card";

const server = fastify({});
const App: FunctionComponent = props => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta
                name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <title>Document</title>
        </head>
        <body>
        {props.children}
        </body>
        </html>
    );
};

server.get("/", (request, reply) => {
    reply.type("text/html");
    reply.send(render(<App><CardWithAstroturf/></App>))
});
server.listen(3000, (err, address) => {
    if (err) throw err;
    console.log(`server is listening on ${address}`);
});
