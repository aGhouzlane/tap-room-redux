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
    let addKegButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <KegForm />
    } else {
      currentlyVisibleState = <KegList />
      addKegButton = <button onClick={this.handleClick}>Add keg</button>
    }
    return (
      <React.Fragment>
         {currentlyVisibleState}
         {addTicketButton}
      </React.Fragment>
    );
  }

}

export default TicketControl;