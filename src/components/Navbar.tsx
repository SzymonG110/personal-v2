import { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className='flex justify-end items-center p-2 font-extrabold gap-3'>
                <a className='mr-2' href='#'>
                    Projekty
                </a>

                <a className='font-extrabold ml-2 bg-[#FB9F38] hover:bg-[#ff8800] py-2 px-4 rounded-xl text-black transition-colors duration-500' href='#'>
                    Kontakt
                </a>
            </div>
        )
    }
}