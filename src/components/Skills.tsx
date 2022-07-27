import { Component, Fragment } from 'react'
import skills from '../assets/skills.json'

export default class Skills extends Component {

    format(type: 'langs' | 'tools') {
        const json = skills[type]

        return json.map(skill => <img className='h-8' src={skill.img} />)
    }

    render() {

        return (
            <div>
                <h1 className='text-center text-[26px] font-bold mb-8 mt-3' id='skills'>Umiejętności</h1>

                <div className='md:flex md:justify-around font-semibold'>
                    <div className='mb-6 md:mb-0 bg-[#3C3E42] md:w-[45%] rounded-md p-4'>
                        Języki
                        {this.format('langs')}
                    </div>

                    <div className='bg-[#3C3E42] md:w-[45%] rounded-md p-2'>
                        Narzędzia i aplikacje
                        {this.format('tools')}
                    </div>
                </div>

            </div>
        )

    }

}