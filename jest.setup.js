const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const fetch = require('jest-fetch-mock');

jest.setMock('node-fetch', fetch);

Enzyme.configure({ adapter: new Adapter() });