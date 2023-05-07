import Blogs from '@/pages/blogs';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogContainer from '@/pages/blogs/components/BlogContainer';
import { mockPosts } from './__mocks__/mockPosts';

describe("Blogs", () => {

    it("should render the component", () => {
        const {container} = render(<Blogs posts={[]}/>)
        expect(container).toBeInTheDocument()
    })

    it("should render the heading",() => {
        render(<Blogs posts={[]}/>)
                
        const main = screen.getByRole('main',{
            name: ""
        })
        const heading = screen.getByRole('heading',{
            name: /Blogs/i
        })

        expect(main).toBeInTheDocument()
        expect(heading).toBeInTheDocument()
    })

    it("should render all blogs in the document",() => {
        
        render(<BlogContainer posts={mockPosts}/>)

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