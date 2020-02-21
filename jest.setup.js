import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

window.React = React;
window.PureComponent = PureComponent;
window.PropTypes = PropTypes;
window.shallow = shallow;
window.renderer = renderer;

Enzyme.configure({ adapter: new Adapter() });