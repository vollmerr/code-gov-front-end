import React from 'react'
import ReactDOM from 'react-dom';

export default class FilterBox extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const target = event.target
    if(target.value){
      const type = target.checked ? 'checked' : 'unchecked'
      const value = target.value
      this.props.onChange( { type, value })  
    }
  }
  
  shouldComponentUpdate(nextProps) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props)
  }

  render() {
    return (
      <filter-box
        title={this.props.title}
        options={JSON.stringify(this.props.options)}
        onClick={this.handleChange}
      ></filter-box>
    )
  }
}
