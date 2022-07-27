import { Component } from 'react'

interface Props {
    title: string
    skills: JSX.Element[]
}

export default class SkilltCard extends Component<Props, Readonly<{}>> {

    render() {
        return (
            <div className='bg-[#3C3E42] md:w-[45%] rounded-md p-3'>
                <span className="pb-1 block">{this.props.title}</span>
                {this.props.skills}
            </div>
        )
    }

}