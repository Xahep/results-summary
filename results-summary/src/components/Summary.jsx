import React from 'react'

const Summary = ({ data }) => {
    return (
        <>
            <div className='font-hanken flex justify-center items-center'>
                <div id='card' className='grid grid-cols-1 md:grid-cols-2 max-w-xl w-full'>
                    <div id="result" className='bg-gradient-to-b from-slate-blue to-royal-blue rounded-b-3xl md:rounded-3xl z-10 text-center pt-4 pb-8 md:py-8'>
                        <p className='text-pale-blue text-lg font-medium mb-6 opacity-80'>Your Result</p>
                        <div className='flex items-center justify-center mb-4 md:mb-8'>
                            <div id="score" className='h-28 w-28 md:h-36 md:w-36 flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue'>
                                <p className='text-5xl font-extrabold text-white'>76</p>
                                <p className='text-sm text-pale-blue opacity-50'>of 100</p>
                            </div>
                        </div>
                        <p className='text-white text-2xl font-bold md:mb-3'>Great</p>
                        <div className='flex justify-center items-center'>
                            <p className='text-pale-blue text-sm opacity-80 w-60 md:w-48'>You scored higher than 65% of the people who have taken these tests.</p>
                        </div>
                    </div>
                    <div id="summary" className='bg-white p-10 md:p-8 md:rounded-r-3xl drop-shadow-lg -mt-8 md:-mt-0 md:-ml-6 pt-14 md:pt-8 md:pl-14'>
                        <h2 className='font-extrabold text-gray-blue mb-5 text-lg'>Summary</h2>
                        <div id="elements" className='space-y-3 mb-9 md:min-h-52'>
                            {data && data.map((info, index) => (
                                <div id={info.category} key={index} className={`flex flex-row justify-between p-3 bg-${info.color}/5 rounded-lg`}>
                                    <div id="title" className='flex flex-row space-x-2 items-center'>
                                        <img src={info.icon} alt="" className='w-4 h-4' />
                                        <p className={`text-${info.color} font-medium text-sm`}>{info.category}</p>
                                    </div>
                                    <div id="punctuation" className='flex flex-row text-sm'>
                                        <p className='font-extrabold text-gray-blue'>{info.score}<span className='font-medium opacity-50'> / 100</span></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className='w-full rounded-full bg-gray-blue text-white text-sm p-3 hover:bg-gradient-to-b from-slate-blue to-royal-blue'>Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary