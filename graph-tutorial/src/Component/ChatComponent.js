import React from 'react';
import MinimizableWebChat from './MinimizableWebChat'


export class ChatComponent extends React.Component {

    render() {

        if(this.props.authenticated === true)
        {
            return (<MinimizableWebChat />)
        }
        else
        {
            return (<div>
                
                </div>)
        }


    }

}


export default ChatComponent