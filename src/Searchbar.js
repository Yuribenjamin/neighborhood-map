import React, { Component } from 'react'

class Searchbar extends Component {
    render() {
        return(
            <header className='header'>
                <div className='list'>
                    <button>List</button>
                </div>
                <div>
                    <div className='searchbox'>
                        <input
                            type='text'
                            placeholder='Search'
                            
                            
                            />
                    </div>
                </div>
            </header>
        )
    }
}

export default Searchbar