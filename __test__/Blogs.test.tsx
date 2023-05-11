import { render, screen, cleanup } from '@testing-library/react';
import { mockPosts } from './__mocks__/mockPosts';
import Blogs from '../src/pages/blogs';
import '@testing-library/jest-dom';

describe("Blogs", () => {

    beforeEach(() => render(<Blogs posts={mockPosts}/>))
    afterEach(() => cleanup())

    it("should render the heading",() => {                
        const heading = screen.getByRole('heading', {
            name: /Blogs/i
        })
        expect(heading).toBeInTheDocument()
    })

    it("should render all blogs in the document",() => {
        const allBlogs = screen.getByRole('list')
        expect(allBlogs).toBeInTheDocument()
        expect(allBlogs.localName).toEqual('ul')

        const blogItems = screen.getAllByRole('listitem')
        expect(blogItems.length).toEqual(mockPosts.length)
        blogItems.forEach((item) => {
            expect(item).toBeInTheDocument()
            expect(item.localName).toEqual('li')
            expect(item).toHaveProperty('children')
        })
    })


})