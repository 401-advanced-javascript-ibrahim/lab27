import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from '../../../components/counter/counter.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<Counter />', () => {
    it('can render counter', () => {
        let app = mount(<Counter />);
        let span = app.find('span');
        expect(span.exists()).toBeTruthy();
        expect(app.state('count')).toBe(0);
    });

    it('can render to the DOM', () => {
        const rendered = renderer.create(<Counter />).toJSON();
        expect(rendered).toMatchSnapshot();
    });

    it('can change the counter on click', () => {
        let app = mount(<Counter />);
        let span = app.find('.down');
        span.simulate('click');
        expect(app.state('count')).toBe(-1)
    });
});