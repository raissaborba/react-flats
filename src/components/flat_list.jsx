import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
    renderList = () => {
      return props.flats.map((flat, index) => {
        return (
          <Flat
            flat={flat}
            key={flat.lat}
            selected={flat.name === this.props.selectedFlat.name}
            index={index}
            selectFlat={props.selectFlat} 
          />
        );
      });
    };

    render() {
      return (
        <div className="flat-list">
          {renderList()}
        </div>
      );
    }
};

export default FlatList;
