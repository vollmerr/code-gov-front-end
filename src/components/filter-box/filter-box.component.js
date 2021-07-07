import React from 'react'
import ReactDOM from 'react-dom';

export default class FilterBox extends React.Component {
  shouldComponentUpdate(nextProps) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props)
  }

  handleChange(event) {
    const target = event.target
    if(target.value){
      const type = target.checked ? 'checked' : 'unchecked'
      const value = target.value
      this.props.onChange({ type, value })  
    }
  }

  render() {
    return (
      <filter-box
        title={this.props.title}
        options={JSON.stringify(this.props.options)}
        onClick={::this.handleChange}
      ></filter-box>
    )
  }
}