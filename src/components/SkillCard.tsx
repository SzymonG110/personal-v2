import { Component } from 'react'

interface Props {
    title: string
    skills: JSX.Element[]
}

export default class SkillCard extends Component<Props, Readonly<{}>> {

    render(): JSX.Element {
        return (
            <div className='bg-[#3C3E42] rounded-md p-3' data-aos='flip-up'>
                <span className="pb-1 block">{this.props.title}</span>
                <div className='flex flex-wrap space-x-1 space-y-1'>
                    {this.props.skills}
                </div>
            </div>
        )
    }

}