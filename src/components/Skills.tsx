import { Component, Fragment } from 'react'
import skills from '../assets/skills.json'

export default class Skills extends Component {

    format(type: 'langs' | 'tools') {

        let formatted = ''
        const json = skills[type]

        json.forEach(skill => {

            formatted += `
            <img class='h-8' src='${skill.img}'>
            `

        })

        return <Fragment>{<div dangerouslySetInnerHTML={{ __html: formatted }} />}</Fragment>

    }

    render() {

        return (
            <div>
                <h1 className='text-center text-[26px] font-bold mb-8'>Umiejętności</h1>

                <div className='md:flex md:justify-around font-semibold'>
                    <div className='mb-6 md:mb-0 bg-[#3C3E42] md:w-[45%] rounded-md'>
                        <div className='m-2'>
                            Języki
                        </div>
                        <div className='m-2'>
                            {this.format('langs')}
                        </div>
                    </div>

                    <div className='bg-[#3C3E42] md:w-[45%] rounded-md'>
                        <div className='m-2 font-semibold'>
                            Narzędzia i aplikacje
                        </div>
                        <div className='m-2'>
                            {this.format('tools')}
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}