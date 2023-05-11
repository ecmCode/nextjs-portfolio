import Projects from "../src/pages/projects";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectContainer from "../src/pages/projects/components/ProjectContainer";
import ProjectBox from "../src/pages/projects/components/ProjectBox";
import {projects} from "../src/lib/projects";
import React from "react";


describe("Projects", () => {
    it("should render all the components", () => {
        const {container: projects} = render(<Projects/>)
        const {container: projectBox} = render(<ProjectBox name={""} desc={""} imageURL={""} codeURL={""} demoURL={""} />)
        const {container: projectContainer} = render(<ProjectContainer projects={[]}  />)
        expect(projects).toBeInTheDocument()
        expect(projectBox).toBeInTheDocument()
        expect(projectContainer).toBeInTheDocument()
    })

    it("should render the ProjectContainer element", () => {
        render(<ProjectContainer projects={projects} />)
        const list = screen.getByRole('list',{
            name:""
        })
        expect(list).toBeInTheDocument
        expect(list).not.toBeNull()
        expect(list.localName).toEqual('ul')
        expect(list.children.length).toEqual(projects.length)
    })
})