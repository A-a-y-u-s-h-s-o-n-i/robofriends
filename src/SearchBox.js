import React from 'react';

export default function SearchBox({searchfield,searchChange}) {
    return(
        <div className={'pa2'}>
            <input
                className='pa3 ba br2 bg-lightest-blue'
                type={'search'}
                placeholder={'Search Robots'}
                onChange={searchChange}
            />
        </div>
    )
}
