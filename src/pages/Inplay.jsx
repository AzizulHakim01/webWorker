import React from 'react'
import InplayLayout from '../components/Layout/InplayLayout'
import InPlayInside from './InPlayInside'

const Inplay = () => {
    return (
        <>
            <div className="bg-[#f0ece1] h-[100vh]">
                <InplayLayout>
                    <InPlayInside/>
                </InplayLayout>
            </div>
        </>
    )
}

export default Inplay
