import { Component } from 'react'

export default class Footer extends Component {

    render(): JSX.Element {

        return (
            <div className='mt-10 text-center p-7' id='footer'>
                <h1 className='text-[20px] font-bold' data-aos='zoom-out-right' data-aos-anchor='#footer'>Szymon.ml</h1>
                <p className='text-[15px]' data-aos='zoom-out-left' data-aos-anchor='#footer'>
                    Stworzono przez: <a href='https://szymon.ml' target='_blank' className='hover:text-blue-300 duration-500 font-semibold'>szymon.ml</a> & <a href='https://rkuba.pl' target='_blank' className='hover:text-blue-300 duration-500 font-semibold'>rkuba.pl</a>
                </p>

            </div>
        )

    }

}