import { Component } from 'react'

export default class Footer extends Component {

    render(): JSX.Element {

        return (
            <div className='mt-10 text-center p-7'>
                <h1 className='text-[20px] font-bold'>Szymon.ml</h1>
                <p className='text-[15px]'>
                    Stworzono przez: <a href='https://szymon.ml' target='_blank' className='hover:text-blue-300 duration-500 font-semibold'>szymon.ml</a> & <a href='https://rkuba.pl' target='_blank' className='hover:text-blue-300 duration-500 font-semibold'>rkuba.pl</a>
                </p>

            </div>
        )

    }

}