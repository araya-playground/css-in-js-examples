import {FunctionComponent, h} from "preact";
import fastify from "fastify";
import render from 'preact-render-to-string';
import {CardWithEmotion} from "./emotion";
import {extractCritical, renderStylesToString} from "emotion-server";

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

// server.get("/styled-components", (request, reply) => {
//     reply.type("text/html");
//     const html = render(sheet.collectStyles(<App><CardWithStyledComponents/></App>));
//     console.log(sheet.getStyleTags()); // <style ....> .... </style>
//     reply.send(html);
// });
server.get("/emotion", (request, reply) => {
    reply.type("text/html");
    const {html ,css } = extractCritical(render(<App><CardWithEmotion /></App>));
    console.log(html, css)
    reply.send(html);
});
server.listen(3000, (err, address) => {
    if (err) throw err;
    console.log(`server is listening on ${address}`);
});
