import React from 'react';
import "./style.css"
import BookElementDetail from "../BookElementDetail/BookElementDetail"
import SearchBookList from "../SearchBookList/searchBookList"
class BookElement extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      step:1,
      book:[],
      books:[]
    }
  }

  FavoriteSubmit = (e)=>{
      e.preventDefault();
     axios.post('http://localhost:4000/contact', {
      userID : "grgrgr",
      
     })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
  }
    
  getbooks =(booksarr)=>{
    this.setState({books:booksarr})
    console.log(booksarr)
    };
  nextStep (book){
    const step = this.state.step
    this.setState({step:step +1})
    this.setState({book:book})
    console.log(this.state.book)
}
previousStep = ()=>{
  const {step} = this.state
  this.setState({step:step -1})
}
    render(){
   const{books} = this.state
   const{step} = this.state
   switch(step){
    case 1:
      return (
        <div>
        <SearchBookList getbooks={this.getbooks}/>
        <div className="bookList__div">
           {books.map((book,index)=>
              <div key = {index} className="card-container">
                    <a  href="#">
                    <img className="card" src={book.volumeInfo.imageLinks.thumbnail} alt=""  /> 
                  </a>  
               <div className="desc">
                <h2>{book.volumeInfo.title}</h2>
                <h3> Authors:  {book.volumeInfo.authors}</h3>
                <h3> {book.volumeInfo.publishedDate}</h3>
                <h3> Category: {book.volumeInfo.categories === undefined ? <span></span>: String(book.volumeInfo.categories) }</h3>
                </div>
                <div className="btnGroup__div">
                  <button>Add to Fov</button>
                  <button>Read letter</button>
                  <button onClick ={this.nextStep.bind(this,book)}>Read more</button>
                </div>
              </div>
             )
             }
             </div>
             </div>
        )
        case 2:
          return(
            <BookElementDetail book={this.state.book} previousStep = {this.previousStep}/>
          )
     }
    }
}
export default BookElement