import { Component } from 'react'
import Navbar from './Navbar'
import img from '../assets/mac-vsc.png'

export default class Hero extends Component {

    render(): JSX.Element {

        return (
            <div className='h-full'>
                <Navbar />
                <div className='flex lg:items-center mx-2 lg:mx-10 lg:mt-0 h-full'>
                    <div className='lg:justify-start lg:w-[50%] md:mt-0 text-center md:text-left' data-aos='fade-down-right'>
                        <h1 className='font-fredokaone text-[40px] md:text-[64px]'>SzymonG110</h1>
                        <h3 className='sm:text-[20px] md:text-[28px]'>Hej! Jestem Szymon. Jestem uczniem technikum na kierunku technik programista.</h3>
                    </div>
                    
                    <div className=' hidden lg:block lg:w-[40%] lg:ml-[5%]' data-aos='fade-up-left'>
                        <img src={img} className='' />
                    </div>
                </div>
            </div>
        )

    }

}