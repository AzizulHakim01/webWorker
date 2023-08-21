import React from 'react'
import InPlayInsideLayout from '../components/Layout/InPlayInsideLayout'
import InsidePlayRoutes from '../routes/InsidePlayRoutes'

const InPlayInside = () => {
  return (
    <>
        <div className="bg-[#f0ece1] h-[100vh]">
        <InPlayInsideLayout>
                <InsidePlayRoutes/>
            </InPlayInsideLayout>
        </div>
    </>
  )
}

export default InPlayInside