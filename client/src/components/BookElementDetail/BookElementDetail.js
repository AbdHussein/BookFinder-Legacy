import React from 'react';
import NavBar from '../NavBar/NavBar'
import PhotoForPages from '../PhotoForPages/PhotoForPages'
import {Star,NotEditStar} from "../StarComponent/Star"
import "./style.css";
import axios from 'axios';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

class BookElementDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
    render(){
      const{book}=this.props
      return(
        <div>
         <NavBar />
        {PhotoForPages('Book Detailes')}
        <div className="bookListElement">
        <div className="container">
        <div className="picture">
       <a href={book.volumeInfo.imageLinks.thumbnail}>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="book element" />
       </a>  
    </div>
        <div className="info">
      <h2>About</h2>
      <p>{book.volumeInfo.description}</p>
      </div>
      <div className ="moreDetails__div">
      <ul className="readMore_ul">
         <li><span className ="tilte_span">Title: </span> {book.volumeInfo.title}</li>
         <li><span className ="tilte_span">ID: </span> {book.id}</li>
         <li><span className ="tilte_span">Publisher: </span>{book.volumeInfo.publisher}</li>
         <li><span className ="tilte_span">Link: </span><a href={book.volumeInfo.infoLink}> click here</a></li>
         <li><span className ="tilte_span">Categorie: </span>{book.volumeInfo.categories === undefined ? <span></span>: String(book.volumeInfo.categories)}</li>
         <li><span className ="tilte_span">Pages Number: </span>{book.volumeInfo.pageCount}</li>
      </ul>
      </div>
      <div className="comment">
      <Comment bookId = {book.id}/> 
       </div>
      </div>
</div> 

</div>
      )
    }
  }
export default BookElementDetail



class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     comments : [
         { 
             date : '7/10/2019',
             firstName : "saad",
             lastName : "anas",
             comment : "ooufhpewhf",
             rating : 3
         }
     ],
     comment:'',
     rating: '',
    }
  }

  componentDidMount(){
    axios.get(`/comments/${this.props.bookId}`).then(res =>{          
        this.setState({
            comments : res.data
        })
    })
    .catch((err)=>{
         console.log(err)
    })
}
   changeRating= (starRate)=>{
    this.setState({rating:starRate})
   }
    handleChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
      }
    cancelCourse = () => { 
    document.getElementById("commentInput").value = ''
    }


  AddComment = (e)=>{
    e.preventDefault();
      var newValue = {
        date : today,
        firstName : "saad",
        lastName : "anfgergeas",
        comment : this.state.comment,
        rating : this.state.rating
      }
    var joined = this.state.comments.concat(newValue);
    this.setState({ comments: joined })
    this.cancelCourse();
    }
  render(){
const{comments} = this.state
 return(
<div id = "commentsDiv" className="row bootstrap">
    <div className="col-md-6 col-md-offset-2 col-sm-12">
        <div className="comment-wrapper">
            <div className="panel panel-info">
                <div className="panel-heading">
                   Readers Opinions About the Book 
                </div>
                <div className="panel-body">
                <Star changeRating ={this.changeRating} sentence = {'Yor rated the book with   '}/>
                    <textarea id = 'commentInput' name='comment' onChange={this.handleChange}  className="form-control" placeholder="write a comment..." rows="3"></textarea>
                    <br />
                    <button type="button" className="btn btn-info pull-right" onClick=  {this.AddComment}>Post</button>
                    <div className="clearfix"></div>
                    <hr />
                    <ul className="media-list">
                        {
                            comments.map((comment,index)=>
                                <li className="media" key = {index}>
                                <div className="media-body">
                                  <strong className="text-success">{ comment.firstName+ ' '+comment.lastName}</strong> 
                                 <span className="text-muted pull-right">
                                <small className="text-muted">{ comment.date}</small>
                                    </span>
                                    <NotEditStar  rate= {comment.rating} /> 
                                    <p className = "commentmessage">
                                        {comment.comment}
                                    </p>
                                </div>
                            </li> 
                            )
                        }
                   
                        
                    </ul>
                </div>
            </div>
        </div>

    </div>
    </div>

)
 }
}
