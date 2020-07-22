import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import "./style.css"
import BookElement from "../BookElement/BookElement"
import NavBar from '../NavBar/NavBar'
import PhotoForPages from '../PhotoForPages/PhotoForPages'
class SearchBookList extends React.Component{
  constructor(props){
    super (props);
    this.state = {
      selectedValue : "",
      searchInput : "",
      books: [],
    }
  }
handleChange = (e)=>{
  this.setState({[e.target.name]: e.target.value})
}
handleSelect = (e)=>{
  this.setState({selectedValue: e.target.value})
}
handleSubmit = (e)=>{
  e.preventDefault();
  const {searchInput} = this.state
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}+${this.state.selectedValue}`)
  .then((result)=>{
    console.log(result.data.items)
    var booksArr = [];
    for(var i = 0 ; i<result.data.items.length;i++){
     if(result.data.items[i].volumeInfo.imageLinks !== undefined){
      booksArr.push(result.data.items[i])
     }
    }
    this.setState({books: booksArr})
    this.props.getbooks(booksArr)
   console.log(booksArr)
  })
  .catch((err)=>{
  console.log(err)
  })
}
clearInput = ()=>{
  this.setState({ searchInput: '' });
}
render(){
  var message='You selected '+this.state.selectedValue;
  return (
    <div>
       <NavBar />
        {PhotoForPages('Books Search')}
        <div className = "search__div">
          {/* <h2> Choose your search Option: </h2> */}
        <select id = "SelectOptions" className="mdb-select md-form" searchable="Search here.." 
          value={this.state.selectedValue} 
          onChange={this.handleSelect} 
        >
        <option value="All" disabled selected>Choose your search Type</option>
        <option value="">All Options</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="publisher">Publisher</option>
        <option value="subject">Subject</option>
        <option value="isbn">Isbn</option>
        </select>
       <input  name = "searchInput" onChange = {this.handleChange} id='search_input' className="form-control" type="text" placeholder="Search Term" aria-label="Search"></input>
       <button  id = "Search__btn"class="btn btn-default" type="submit" onClick={this.handleSubmit}>
            Search
              <i class="fa fa-search"></i>
          </button>
        </div>
        </div>     
      )
    }
  }

export default SearchBookList 

