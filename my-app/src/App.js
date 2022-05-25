import React, { useState } from 'react'
import Data from './Data'
import Detail from './Details/Detail'
import "./App.css"

const App = () => {
    const [user, setUser] = useState(Data)
    return (
        <div className='main-container'>
            <div className='contain'>
                <h1>{user.length} birthdays today</h1>
                <Detail Data={user} />
                <button onClick={() => setUser([])}>Clear Data</button>
            </div>
        </div>
    )
}

export default App