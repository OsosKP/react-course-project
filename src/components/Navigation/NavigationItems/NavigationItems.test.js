import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = wrapper = shallow(<NavigationItems />); // Get the component but don't render all sub-components
  });

  it('should render two <NavigationItem /> elements if not authenticated.', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2); // a NavigationItems element (when not authed) should have two NavigationItem elements in it
  });

  it('should render three <NavigationItem /> elements if authenticated.', () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('should render the "Logout" NavigationItem element if authenticated.', () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
  });
});
