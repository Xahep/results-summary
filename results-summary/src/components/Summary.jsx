import React from 'react'
import reactionIcon from '../assets/icon-reaction.svg'
import memoryIcon from '../assets/icon-memory.svg'
import verbalIcon from '../assets/icon-verbal.svg'
import visualIcon from '../assets/icon-visual.svg'

const Summary = () => {
    return (
        <>
            <main className='bg-white min-h-screen flex justify-center items-center font-hanken'>
                <div id='card' className='grid grid-cols-2 max-w-xl w-full '>
                    <div id="result" className='bg-slate-blue rounded-3xl z-10'></div>
                    <div id="summary" className='bg-white p-8 pl-14 rounded-r-3xl drop-shadow-2xl -ml-6'>
                        <h2 className='font-extrabold text-gray-blue mb-5 text-lg'>Summary</h2>
                        <div id="elements" className='space-y-3 mb-7'>
                            <div id="reaction" className='flex flex-row justify-between p-3 bg-light-red/5 rounded-lg'>
                                <div id="title" className='flex flex-row space-x-2 items-center'>
                                    <img src={reactionIcon} alt="" srcset="" className='w-4 h-4'/>
                                    <p className='text-light-red font-medium text-sm'>Reaction</p>
                                </div>
                                <div id="punctuation" className='flex flex-row text-sm'>
                                    <p className='font-extrabold text-gray-blue'>80<span className='font-medium'> / 100</span></p>
                                </div>
                            </div>
                            <div id="memory" className='flex flex-row justify-between p-3 bg-orangey-yellow/5 rounded-lg'>
                                <div id="title" className='flex flex-row space-x-2 items-center'>
                                    <img src={memoryIcon} alt="" srcset="" className='w-4 h-4'/>
                                    <p className='text-orangey-yellow font-medium text-sm'>Memory</p>
                                </div>
                                <div id="punctuation" className='flex flex-row text-sm'>
                                    <p className='font-extrabold text-gray-blue'>92<span className='font-medium'> / 100</span></p>
                                </div>
                            </div>
                            <div id="verbal" className='flex flex-row justify-between p-3 bg-green-rtealed/5 rounded-lg'>
                                <div id="title" className='flex flex-row space-x-2 items-center'>
                                    <img src={verbalIcon} alt="" srcset="" className='w-4 h-4'/>
                                    <p className='text-green-rtealed font-medium text-sm'>Verbal</p>
                                </div>
                                <div id="punctuation" className='flex flex-row text-sm'>
                                    <p className='font-extrabold text-gray-blue'>61<span className='font-medium'> / 100</span></p>
                                </div>
                            </div>
                            <div id="visual" className='flex flex-row justify-between p-3 bg-cobalt-blue/5 rounded-lg'>
                                <div id="title" className='flex flex-row space-x-2 items-center'>
                                    <img src={visualIcon} alt="" srcset="" className='w-4 h-4'/>
                                    <p className='text-cobalt-blue font-medium text-sm'>Visual</p>
                                </div>
                                <div id="punctuation" className='flex flex-row text-sm'>
                                    <p className='font-extrabold text-gray-blue'>72<span className='font-medium'> / 100</span></p>
                                </div>
                            </div>
                        </div>
                        <button className='w-full rounded-full bg-gray-blue text-white text-sm p-3'>Continue</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Summary