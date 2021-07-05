import React from 'react';
import KegForm from './KegForm';
import KegList from './KegList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <KegForm />
    } else {
      currentlyVisibleState = <KegList />
    }
    return (
      <React.Fragment>
         {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default TicketControl;