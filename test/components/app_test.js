import { renderComponent , expect } from '../test_helper';
import App from '../../_react-redux_OLD_3/src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
