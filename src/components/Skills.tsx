import { Component } from 'react'
import skills from '../assets/skills.json'
import SkillCard from './SkillCard'

export default class Skills extends Component {

    format(type: 'langs' | 'tools'): JSX.Element[] {
        const json = skills[type]

        return json.map(skill => <img className='h-8' src={skill.img} alt={skill.name} />)
    }

    render(): JSX.Element {

        return (
            <div className='container max-sm' id='skills'>
                <h1 className='text-center text-[26px] font-bold mb-8 mt-3' data-aos='zoom-in-up'>Umiejętności</h1>

                <div className='md:grid md:grid-cols-2 md:gap-40 md:place-content-center space-y-2 md:space-y-0 auto-rows-max font-semibold'>
                    <SkillCard title="Języki" skills={this.format('langs')} />
                    <SkillCard title="Narzędzia i aplikacje" skills={this.format('tools')} />
                </div>

            </div>
        )

    }

}