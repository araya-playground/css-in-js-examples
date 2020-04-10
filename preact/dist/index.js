"use strict";

var _preact = require("preact");

var _fastify = _interopRequireDefault(require("fastify"));

var _preactRenderToString = _interopRequireDefault(require("preact-render-to-string"));

var _card = require("./card");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _fastify["default"])({});

var App = function App(props) {
  return (0, _preact.h)("html", {
    lang: "en"
  }, (0, _preact.h)("head", null, (0, _preact.h)("meta", {
    charSet: "UTF-8"
  }), (0, _preact.h)("meta", {
    name: "viewport",
    content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
  }), (0, _preact.h)("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge"
  }), (0, _preact.h)("title", null, "Document")), (0, _preact.h)("body", null, props.children));
};

server.get("/astroturf", function (request, reply) {
  reply.type("text/html");
  reply.send((0, _preactRenderToString["default"])((0, _preact.h)(App, null, (0, _preact.h)(_card.CardWithAstroturf, null))));
});
server.listen(3000, function (err, address) {
  if (err) throw err;
  console.log("server is listening on ".concat(address));
});