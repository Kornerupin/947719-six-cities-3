import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import Enzyme, { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

window.React = React;
window.PureComponent = PureComponent;
window.createRef = createRef;
window.PropTypes = PropTypes;
window.renderer = renderer;
window.shallow = shallow;
window.mount = mount;

Enzyme.configure({ adapter: new Adapter() });
