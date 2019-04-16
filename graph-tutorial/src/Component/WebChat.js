import memoize from 'memoize-one';
import React from 'react';
import ReactWebChat, { createDirectLine, createStyleSet } from 'botframework-webchat';

import './WebChat.css';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.createDirectLine = memoize(token => createDirectLine({ token }));

    this.state = {
      styleSet: createStyleSet({
        backgroundColor: 'Transparent',
        botAvatarImage: 'https://docs.microsoft.com/en-us/azure/bot-service/v4sdk/media/logo_bot.svg?view=azure-bot-service-4.0',
         // botAvatarInitials: 'BF',
          userAvatarImage: 'https://avatars2.githubusercontent.com/u/28680157?s=400&u=f2318cce08c86de3c3388b44e85667923dda7bee&v=4?size=64',
          //userAvatarInitials: 'WC',
          hideUploadButton: true,
		      bubbleBackground: 'rgba(0, 0, 255, .1)',
          bubbleFromUserBackground: 'rgba(0, 255, 0, .1)',
          
      })
    };
  }

  componentDidMount() {
    !this.props.token && this.props.onFetchToken();
  }

  render() {
    const {
      props: { className, store, token },
      state: { styleSet }
    } = this;

    return (
      token ?
        <ReactWebChat
          className={ `${ className || '' } web-chat` }
          directLine={ this.createDirectLine(token) }
          store={ store }
          styleSet={ styleSet }
        />
      :
        <div className={ `${ className || '' } connect-spinner` }>
          <div className="content">
            <div className="icon">
              <span className="ms-Icon ms-Icon--Robot" />
            </div>
            <p>Please wait while we are connecting.</p>
          </div>
        </div>
    );
  }
}