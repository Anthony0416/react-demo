import React from 'react'
import { Poem } from '../components/Poem'

export default class Setting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <div>
                { Poem() }
            </div>
        )
    }       
}