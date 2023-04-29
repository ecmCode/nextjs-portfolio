/**
 * @jest-environment jsdom
*/

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from '../pages/about';


describe("jsdom", () => {
    it('uses jsdom in this test file', () => {
        const element = document.createElement('div');
        expect(element).not.toBeNull()
    })
});

describe("about page", () => {
    it('renders sucessully', () => {
        const {container} = render(<About/>)
        expect(container).toBeInTheDocument()
    })
});