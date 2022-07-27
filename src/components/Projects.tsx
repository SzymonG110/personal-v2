import { Component, ReactNode } from 'react'
import projects from '../assets/projects.json'
import ProjectCard, { Props } from './ProjectCard'

export default class Projects extends Component {

    format(): JSX.Element[] {

        const json = projects.projects
        const data: Props[] = []

        json.forEach(project => {
            const authors: Props['authors'] = []
            for (const author of project.authors) {
                const img = (projects.avatars as any)[author]
                authors.push({
                    name: author,
                    avtarURL: img
                })
            }

            const language: Props['language'] = {
                name: project.lang,
                color: (projects.langs as any)[project.lang]

            }

            data.push({
                authors,
                language,
                license: project.license,
                links: project.links,
                public: project.public,
                title: project.title
            })
        })

        return (
            data.map(d => <ProjectCard authors={d.authors} language={d.language} license={d.license} links={d.links} public={d.public} title={d.title} />)
        )

    }

    render() {

        return (
            <div className='mt-10' id='projects'>
                <h1 className='text-center text-[26px] font-bold mb-8' id='skills'>Projekty</h1>
                <div className='md:grid md:grid-cols-3 md:gap-3 md:place-content-center space-y-2 md:space-y-0'>
                    {this.format()}
                </div>
            </div>
        )

    }

}