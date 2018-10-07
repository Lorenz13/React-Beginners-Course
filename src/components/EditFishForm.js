import React from "react";

class EditFishForm extends React.Component {
  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  }

  render() {
    return (
      <form className={'fish-edit'} onSubmit={this.createFish}>
        <input name={'name'} ref={this.nameRef} type={'text'} onChange={this.handleChange} value={this.props.fish.name}/>
        <input name={'price'} ref={this.priceRef} type={'text'} onChange={this.handleChange} value={this.props.fish.price}/>
        <select name={'status'} ref={this.statusRef} onChange={this.handleChange} value={this.props.fish.status}>
          <option className={'available'}>Fresh!</option>
          <option className={'unavailable'}>Sold Out!</option>
        </select>
        <textarea name={'desc'} ref={this.descRef} onChange={this.handleChange} value={this.props.fish.desc}/>
        <input name={'image'} ref={this.imageRef} type={'text'} onChange={this.handleChange} value={this.props.fish.image}/>
        <button type={'submit'}>+ Add Fish</button>
      </form>
    )
  }
}

export default EditFishForm;