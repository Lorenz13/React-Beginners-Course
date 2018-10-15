import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object
  };
  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  }
  render() {
    return (
      <form className={'store-selector'} onSubmit={this.goToStore}>
        <h2>Please enter your store!</h2>
        <input type={'text'} required ref={this.myInput} placeholder={'Store Name'} defaultValue={getFunName()}></input>
        <button type={'submit'}>Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;