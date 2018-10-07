import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  render() {
    return (
      <form className={'store-selector'}>
        <h2>Please enter your store!</h2>
        <input type={'text'} required placeholder={'Store Name'} defaultValue={getFunName()}></input>
        <button type={'submit'}>Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;