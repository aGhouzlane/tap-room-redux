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

  handleClick = () => {
    this.setState({formVisibleOnPage: true});
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
         {addKegButton}
      </React.Fragment>
    );
  }

}

export default TicketControl;