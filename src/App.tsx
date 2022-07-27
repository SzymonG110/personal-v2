import { Component } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default class App extends Component {

    render() {

        return (
            <div className='font-montserrat text-white min-h-screen bg-[#212121]'>

                <div className='h-screen bg-[#303235]'>
                    <div className='container h-[100%]'>
                        <Hero />
                    </div>
                </div>

                <div className='container w-[90%]'>
                    <Skills />
                    <Projects />
                </div>
            </div>
        )

    }

}