import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholeContent } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholeContent: alcoholeContent
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleSubtractPint = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];

    if (selectedKeg.pint > 0) {
      selectedKeg.pint -= 1;

      this.setState({ selectedKeg: selectedKeg });
    }
    else {
      alert("Sold out!")
    }
  }

    render() {

      let currentlyVisibleState = null;
      let buttonText = null;

      if (this.state.selectedKeg != null) {
        currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} subtractPint = {this.handleSubtractPint}/>
        buttonText = "Return to Keg List";
      }
      else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
        buttonText = "Return to Keg List";

      } else {
        currentlyVisibleState = <KegList kegList={this.state.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg}  /> 
        buttonText = "Add keg";
      }

      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }

  KegControl.propTypes = {
    masterKegList: PropTypes.object
  };

  const mapStateToProps = state => {
    return {
      masterTicketList: state
    }
  }

  KegControl = connect(mapStateToProps)(KegControl);

  export default KegControl;