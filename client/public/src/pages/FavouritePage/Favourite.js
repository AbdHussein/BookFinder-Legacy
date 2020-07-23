import React from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import "./style.css";
class FavPage extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      FavBooks:[],
      userId = '',
    }
  }

   GetBookById = (id)=>{
    axios
    .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then((result) => {
       return result.data 
    })
    .catch((err) => {
      console.log('Error', err);
    });
   }
  /// get all favorite books from db
      componentDidMount(){
      const token = localStorage.usertoken
      axios.get(`http://localhost:5000/finduser/${token}`)
      .then((response)=> {
        console.log(response)
      this.setState({
        userId :token
      })
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .get(`http://localhost:5000/favorite/${userID}`)
      .then((result) => {
        var favArr = [];
        for(var i = 0 ; i<result.data ; i++){
          favArr.push(this.GetBookById (result.data[i].bookID))
        }
        this.setState({
          FavBooks :favArr
        })
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  // remove bppk from db 
  handleRemove = (e)=>{
    e.preventDefault();
    axios
      .delete(`/remove-one/${this.state.userId}`)
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
                  <button  onClick={this.handleRemove} >Remove</button>
                </div>
              </div>
               )
             }
             </div>
        )
    }
  }
export default FavPage;

