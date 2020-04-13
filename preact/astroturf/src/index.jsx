"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = require("preact");
const fastify_1 = __importDefault(require("fastify"));
const preact_render_to_string_1 = __importDefault(require("preact-render-to-string"));
const card_1 = require("./card");
const server = fastify_1.default({});
const App = props => {
    return (<html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <title>Document</title>
        </head>
        <body>
        {props.children}
        </body>
        </html>);
};
server.get("/", (request, reply) => {
    reply.type("text/html");
    reply.send(preact_render_to_string_1.default(<App><card_1.CardWithAstroturf /></App>));
});
server.listen(3000, (err, address) => {
    if (err)
        throw err;
    console.log(`server is listening on ${address}`);
});
