import React from "react";
import '../../assets/css/03-books-main-section-container.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";


class BookBox extends React.Component {
  constructor(props)
  {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // componentDidMount() {
  //   this.props.fetchbook(this.props.id);
  // }

  handleClick(e) {
    e.preventDefault();
    console.log(this.props);
    const id = this.props.id;
    this.props.history.push(`/edit_book/${id}`);
  }

  render() {
    
    return (
      <div className="individual-book">
        <button id="delete-button" onClick={() => this.props.removeBook(this.props.id)}><RiDeleteBin5Line /></button>
        <button id="edit-button" onClick={this.handleClick}><FaEdit/></button>
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

export default BookBox;