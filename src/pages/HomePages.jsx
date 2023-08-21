import React from 'react'
import Header from '../components/Header'
import Layout from './../components/Layout/Layout'
import PrimaryRoutes from '../routes/PrimaryRoutes'

const HomePages = () => {
  return (
    <div className="bg-[#eeeeee]">
        <Header/>
        <Layout>
            <PrimaryRoutes/>
        </Layout>
    </div>
  )
}

export default HomePages