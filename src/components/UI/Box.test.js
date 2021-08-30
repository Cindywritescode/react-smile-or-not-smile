import {render} from '@testing-library/react';
import {Box} from "./Box";

describe('Box properties', () => {

    test('Box should be div tag and flexbox', () => {
        const screen = render(<Box/>);
        const component = screen.container.firstChild
        expect(component.nodeName).toBe("DIV")
        expect(component).toHaveStyle('display: flex')
    });

    test('Box should be in row direction by default', () => {
        const {container} = render(<Box/>);
        const component = container.firstChild
        expect(component).toHaveStyle('flex-direction: row')
    });

    test('Box should be in column direction', () => {
        const {container} = render(<Box direction='column'/>);
        const component = container.firstChild
        expect(component).toHaveStyle('flex-direction: column')
    });

    test('Box should have justify-content normal by default', () => {
        const {container} = render(<Box justify='normal'/>);
        const component = container.firstChild
        expect(component).toHaveStyle('justify-content: normal')
    });

    test('Box should have justify-content center', () => {
        const {container} = render(<Box justify='center'/>);
        const component = container.firstChild
        expect(component).toHaveStyle('justify-content: center')
    });

    test('Box should have align-items normal by default', () => {
        const {container} = render(<Box align='normal'/>);
        const component = container.firstChild
        expect(component).toHaveStyle('align-items: normal')
    });

    test('Box should have align-items center', () => {
        const {container} = render(<Box align='center'/>);
        const component = container.firstChild
        expect(component).toHaveStyle('align-items: center')
    });
});