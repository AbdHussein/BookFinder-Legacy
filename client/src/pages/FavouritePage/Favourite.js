import React from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import "./style.css";
class FavPage extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      FavBooks:[]
    }
  }

   GetBookById = (id)=>{
    axios
    .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then((result) => {
      this.setState({ FavBooks: result.data });
    })
    .catch((err) => {
      console.log('Error', err);
    });
   }
  /// get all favorite books from db
 componentDidMount(){
    axios
      .get(`/favorite/${userID}`)
      .then((result) => {
        this.GetBookById(result.data.bookID)
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  // remove bppk from db 
  handleRemove = (e,id)=>{
    e.preventDefault();
    axios
      .delete(`/remove-one/${id}`)
      .then((res) => {
       console.log(res)
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
    render(){
      const{FavBooks} = this.state
        return(
        <div className="fav__div">
          <NavBar />
           {FavBooks.map((FavBook,index)=>
              <div className="card-container">
               <a className="card" href="#book" style={{backgroundImage: `url(${FavBook.volumeInfo.imageLinks.medium})`}} ></a>
               <div className="desc">
                <h2>{FavBook.volumeInfo.title}</h2>
                <h3> Authors:{FavBook.volumeInfo.authors}</h3>
                <p> {FavBook.volumeInfo.publishedDate}</p>
                <div className="tag"> {FavBook.volumeInfo.categories === undefined ? <span></span>: String(FavBook.volumeInfo.categories) }</div>
                </div>
                <div className="btnGroup__div">
                  <button onClick={this.handleRemove(FavBook.id)} >Remove</button>
                </div>
              </div>
               )
             }
             </div>
        )
    }
  }
export default FavPage;

