import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

window.React = React;
window.PureComponent = PureComponent;
window.createRef = createRef;
window.PropTypes = PropTypes;
window.shallow = shallow;
window.renderer = renderer;
window.mount = mount;

Enzyme.configure({ adapter: new Adapter() });