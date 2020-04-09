import fastify from "fastify";
import render from 'preact-render-to-string'
import {Card} from "./card";
import {h} from "preact";
import {renderStylesToString} from "emotion-server";

const server = fastify({});

const App: preact.FunctionComponent = () => {
    return (
        <html lang="k">

        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Document</title>
        </head>
        <body>
        <Card />
        </body>
        </html>
    )
}

server.get('/', (request, reply) => {
    reply.type('text/html')
    const str = renderStylesToString(render(<App />))
    reply.send(str)
});
server.listen(3000, ((err, address) => {
    if (err) throw err;
    console.log(`server is listening on ${address}`);
}));

