import renderer from 'react-test-renderer';
import React from 'react';
import Home from '../index.js';

test('Home Page should render', () => {
  const component = renderer.create(
    <Home/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
