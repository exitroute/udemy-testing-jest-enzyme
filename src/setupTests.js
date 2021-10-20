import { JSDOM } from "jsdom";
import { TextEncoder } from "util";

import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.document = dom.window.document;
global.window = dom.window;

global.TextEncoder = TextEncoder;

Enzyme.configure({ adapter: new EnzymeAdapter() });
