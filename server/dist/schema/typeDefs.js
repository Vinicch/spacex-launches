"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Launch {\n    flight_number: Int!\n    mission_name: String!\n    launch_year: String\n    launch_date_local: String\n    launch_success: Boolean\n    rocket: Rocket!\n  }\n\n  type Rocket {\n    rocket_id: String!\n    rocket_name: String!\n    rocket_type: String\n  }\n\n  type Query {\n    launches: [Launch!]\n    launch(flight_number: Int!): Launch!\n    rockets: [Rocket!]\n    rocket(rocket_id: String!): Rocket!\n  }\n"], ["\n  type Launch {\n    flight_number: Int!\n    mission_name: String!\n    launch_year: String\n    launch_date_local: String\n    launch_success: Boolean\n    rocket: Rocket!\n  }\n\n  type Rocket {\n    rocket_id: String!\n    rocket_name: String!\n    rocket_type: String\n  }\n\n  type Query {\n    launches: [Launch!]\n    launch(flight_number: Int!): Launch!\n    rockets: [Rocket!]\n    rocket(rocket_id: String!): Rocket!\n  }\n"])));
var templateObject_1;
