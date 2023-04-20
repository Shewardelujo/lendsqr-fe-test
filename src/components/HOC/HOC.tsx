import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import './HOC.scss'

interface WithLayoutProps {
    component:React.ComponentType<any>
}

const WithLayout = ({component: WrappedComponent}:WithLayoutProps) => {
    return (<div className='layout'>
        <Header />
        <Sidebar />
        <main className='main-wrapper'>
            <WrappedComponent/>
        </main>
    </div>)
}

export default WithLayout