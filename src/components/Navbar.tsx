import { Component } from 'react'

export default class Navbar extends Component {

    render(): JSX.Element {

        return (
            <div className='flex justify-end items-center pt-3 font-extrabold gap-3'>
                <div data-aos='zoom-in' className='space-x-5 mt-2 mr-2'>
                    <a className='mr-2' href='#skills'>
                        Umiejętności
                    </a>

                    <a className='mr-2' href='#projects'>
                        Projekty
                    </a>

                    <a className='font-extrabold ml-2 bg-[#FB9F38] hover:bg-[#ff8800] py-2 px-3 rounded-xl text-black transition-colors duration-500' href='#contact'>                    Kontakt
                    </a>
                </div>
            </div>
        )

    }

}