import './select-box.scss';

import React from 'react';

class SelectBox extends React.Component {
  render () {
    return (
      <div tabIndex="0" className="onclick-menu">{this.props.config.menuName}
        <div className="drop-image" />

        <ul className="menu-content">
          <li className="box-item">
            <button
              type="button"
              className="select-item"
              value={this.props.config.item1}
              name={this.props.name}
              onClick={this.props.onChange}>
              {this.props.config.item1}
            </button>
          </li>

          <li className="box-item"><button
            type="button"
            className="select-item"
            value={this.props.config.item2}
            name={this.props.name}
            onClick={this.props.onChange}
          >{this.props.config.item2}</button></li>

          <li className="box-item"><button
            type="button"
            className="select-item"
            value={this.props.config.item3}
            name={this.props.name}
            onClick={this.props.onChange}
          >{this.props.config.item3}</button></li>

          <li className="box-item"><button
            type="button"
            className="select-item"
            value={this.props.config.item4}
            name={this.props.name}
            onClick={this.props.onChange}
          >{this.props.config.item4}</button></li>

          <li className="box-item"><button
            type="button"
            className="select-item"
            value={this.props.config.item4}
            name={this.props.name}
            onClick={this.props.onChange}
          >{this.props.config.item5}</button></li>

          <li className="box-item"><button
            type="button"
            className="select-item"
            value={this.props.config.item4}
            name={this.props.name}
            onClick={this.props.onChange}
          >{this.props.config.item6}</button></li>

        </ul>
      </div>
    );
  }
}

export default SelectBox;
