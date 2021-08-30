import {render} from "@testing-library/react";
import {calculatePath, Lip} from "./Lip";

describe('Lip properties', () => {

    test('Lip contains svg tag', () => {
        const {container} = render(<Lip/>);
        const component = container.querySelector('svg');
        expect(component).toBeInTheDocument();
    })

    test('Lip svg has view box dimensions 100 x 30', () => {
        const {container} = render(<Lip/>);
        const component = container.querySelector('svg');
        expect(component.getAttribute('viewBox')).toBe('0 0 100 30');
    })

    test('Lip svg has no fill and black stroke and round linecap', () => {
        const {container} = render(<Lip/>);
        const component = container.querySelector('svg');
        const path = component.querySelector('path');
        expect(path).toHaveStyle('fill: none');
        expect(path).toHaveStyle('stroke: black');
        expect(path).toHaveStyle('stroke-linecap: round');
    })
})

describe('Lip behaviour', () => {

    test('Lip is flat when happiness level is default value', () => {
        const {container} = render(<Lip/>);
        const component = container.querySelector('svg');
        const path = component.querySelector('path');
        expect(path.getAttribute('d')).toBe('M 5 15 Q 50,15 95,15')
    })

    test('Lip is smiley when happiness level is 10', () => {
        const {container} = render(<Lip happinessLevel={10}/>);
        const component = container.querySelector('svg');
        const path = component.querySelector('path');
        expect(path.getAttribute('d')).toBe('M 5 5 Q 50,30 95,5')
    })

    test('Lip is grinning when happiness level is 0', () => {
        const {container} = render(<Lip happinessLevel={0}/>);
        const component = container.querySelector('svg');
        const path = component.querySelector('path');
        expect(path.getAttribute('d')).toBe('M 5 25 Q 50,0 95,25')
    })

    test('Lip is computing path for happiness level using calculatePath() util', () => {
        const level = 7
        const expectedPath = calculatePath(level)
        const {container} = render(<Lip happinessLevel={level}/>);
        const component = container.querySelector('svg');
        const path = component.querySelector('path');
        expect(path).toBeInTheDocument()
        expect(path.getAttribute('d')).toBe(expectedPath)
    })

    test('Lip calculatePath() util is computing from dynamic value', () => {
        const level = [1, 2, 3, 4, 6, 7, 8, 9][Math.ceil(Math.random() * 7)]
        const expectedPath = `M 5 ${30 - 2 * level - 5} Q 50,${3 * level} 95,${30 - 2 * level - 5}`
        expect(calculatePath(level)).toBe(expectedPath)
    })

    test('Lip should have animation, and start from flat face to happiness level', () => {
        const {container} = render(<Lip happinessLevel={0}/>);
        const component = container.querySelector('animate');
        expect(component).toBeInTheDocument();
        expect(component.getAttribute('from')).toBe(calculatePath(5));
        expect(component.getAttribute('to')).toBe(calculatePath(0));
    })
})
