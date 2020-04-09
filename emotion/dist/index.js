"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const preact_render_to_string_1 = __importDefault(require("preact-render-to-string"));
const card_1 = require("./card");
const preact_1 = require("preact");
const emotion_server_1 = require("emotion-server");
const server = fastify_1.default({});
const App = () => {
    return (preact_1.h("html", { lang: "k" },
        preact_1.h("head", null,
            preact_1.h("meta", { charSet: "UTF-8" }),
            preact_1.h("meta", { name: "viewport", content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" }),
            preact_1.h("meta", { "http-equiv": "X-UA-Compatible", content: "ie=edge" }),
            preact_1.h("title", null, "Document")),
        preact_1.h("body", null,
            preact_1.h(card_1.Card, null))));
};
server.get('/', (request, reply) => {
    reply.type('text/html');
    const str = emotion_server_1.renderStylesToString(preact_render_to_string_1.default(preact_1.h(App, null)));
    reply.send(str);
});
server.listen(3000, ((err, address) => {
    if (err)
        throw err;
    console.log(`server is listening on ${address}`);
}));
