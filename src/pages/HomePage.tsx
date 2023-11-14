import React from 'react'
import Menu from '../components/Menu'

const HomePage: React.FC = () => {
  return (
    <>
        <div className="container mt-5 d-flex justify-content-center">
            <div className="row align-item-center">
                <div className="col-6 p-5">
                    <Menu path='/reversed-string' title='Reversed String' />
                </div>
                <div className="col-6 p-5">
                    <Menu path='/map' title='Map' />
                </div>
                <div className="col-6 p-5">
                    <Menu path='/database-simulator' title='Database Simulator' />
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage