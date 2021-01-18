import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    if (this.props.selectFlat) {
      this.props.selectFlat(this.props.index);
    }
  }

  render() {
    if (!this.props.selectedFlat) {
      return null;
    }
      
    return (
      <div class={`card${this.props.selected ? 'active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div class="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div class="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a class="card-link" href="#" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Flat;