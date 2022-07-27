import { Component } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AOS from 'aos'
import Contact from './components/Contact'

export default class App extends Component {

    componentDidMount() {

        AOS.init()
        AOS.refresh()

    }

    render() {

        return (
            <div className='font-montserrat text-white min-h-screen bg-[#212121]'>

                <div className='h-screen bg-[#303235]'>
                    <div className='container h-full'>
                        <Hero />
                    </div>
                </div>

                <div className='container w-[90%]'>
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
            </div>
        )

    }

}