import { Component } from 'react'
import skills from '../assets/skills.json'
import SkillCard from './SkillCard'

export default class Skills extends Component {

    format(type: 'langs' | 'tools'): JSX.Element[] {
        const json = skills[type]

        return json.map(skill => <img className='h-8' src={skill.img} />)
    }

    render() {

        return (
            <div>
                <h1 className='text-center text-[26px] font-bold mb-8 mt-3' id='skills'>Umiejętności</h1>

                <div className='md:flex md:justify-around font-semibold space-y-2'>
                    <SkillCard title="Języki" skills={this.format('langs')} />
                    <SkillCard title="Narzędzia i aplikacje" skills={this.format('tools')} />
                </div>

            </div>
        )

    }

}