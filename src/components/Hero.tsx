import { Component } from 'react'
import Navbar from './Navbar'
import img from '../assets/mac-vsc.png'

export default class Hero extends Component {

    render() {

        return (
            <div className='h-full'>
                <Navbar />
                <div className='flex md:items-center mx-2 md:mx-10 md:h-[94%] w-[95%]'>
                    <div className='md:justify-start md:w-[50%] mt-52 md:mt-0' data-aos='fade-down-right'>
                        <h1 className='font-fredokaone text-[40px] md:text-[64px]'>SzymonG110</h1>
                        <h3 className='text-[20px] md:text-[28px]'>Hej! Jestem Szymon. Jestem uczniem technikum na kierunku technik programista.</h3>
                    </div>
                    <div className='w-[40%] ml-[5%] hidden md:block' data-aos='fade-up-left'>
                        <img src={img} className='' />
                    </div>
                </div>
            </div>
        )

    }

}