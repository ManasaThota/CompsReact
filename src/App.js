import React from 'react'
import Button from './Button'
import {GoBell} from 'react-icons/go'

const App = () => {
  return (
    <div>
        <div>
            <Button primary>
                <GoBell />
                Click me!
                </Button>
        </div>
        <div>
            <Button secondary>Buy</Button>
        </div>
        <div>
            <Button success>Reserve</Button>
        </div>
        <div>
            <Button warning>Click me!</Button>
        </div>
        <div>
            <Button danger>Chat</Button>
        </div>
    </div>
  )
}

export default App