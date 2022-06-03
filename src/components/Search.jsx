import React from 'react'
import { Icon,Input } from 'semantic-ui-react'

const Search = () => {
  return (
    <div className='mt-6 pt-6'>
          <Input
                icon={<Icon name='search' inverted circular link />}
                placeholder='Search...'
          />
          
    </div>
  )
}

export default Search