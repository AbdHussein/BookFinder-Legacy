import React from 'react';
import NavBar from '../NavBar/NavBar'
import PhotoForPages from '../PhotoForPages/PhotoForPages'
import CommentsBlock from 'simple-react-comments';

// class DetailPage extends React.Component {
//     state = {}
//     render(){
//         return (
//             <div>
//                 <NavBar />
//            {PhotoForPages('Book Detailes')}
//             </div>
//         )
//     }

// }

// export default DetailPage

import "./style.css";


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
        <a href= "#">
         <img src={book.volumeInfo.imageLinks.thumbnail} alt="book element" />
        </a> 
       </div>
            {/* <div className="AddtoFavorite">
          <button >Add to Favorite</button>
        </div> */}

    <div className="info">
      <h2>ABOUT</h2>
      <p>Heather Angel, internationally known nature photographer and author, describes equipment, film, lighting, composition, and special techniques for photographing flowers in the wild and in gardens. Straightforward explanations focus on the particular challenges of taking beautiful flower photographs, such as wind, light, and problem colors. The book also includes tips on making money from nature photography. 131 color photos</p>
      
      </div>
    {/* <div className="returnToSearch">
          <button onClick={this.previous}> {"<- "} Return to search page</button>
        </div> */}

  </div>
</div>
</div>
      )
    }
  }
export default BookElementDetail



// class BookElementDetail extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render(){

//  return(
// <div class="row bootstrap snippets">
//     <div class="col-md-6 col-md-offset-2 col-sm-12">
//         <div class="comment-wrapper">
//             <div class="panel panel-info">
//                 <div class="panel-heading">
//                     Comment panel
//                 </div>
//                 <div class="panel-body">
//                     <textarea class="form-control" placeholder="write a comment..." rows="3"></textarea>
//                     <br>
//                     <button type="button" class="btn btn-info pull-right">Post</button>
//                     <div class="clearfix"></div>
//                     <hr>
//                     <ul class="media-list">
//                         <li class="media">
//                             <a href="#" class="pull-left">
//                                 <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle" />
//                             </a>
//                             <div class="media-body">
//                                 <span class="text-muted pull-right">
//                                     <small class="text-muted">30 min ago</small>
//                                 </span>
//                                 <strong class="text-success">@MartinoMont</strong>
//                                 <p>
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                                     Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.
//                                 </p>
//                             </div>
//                         </li>
//                         <li class="media">
//                             <a href="#" class="pull-left">
//                                 <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle" />
//                             </a>
//                             <div class="media-body">
//                                 <span class="text-muted pull-right">
//                                     <small class="text-muted">30 min ago</small>
//                                 </span>
//                                 <strong class="text-success">@LaurenceCorreil</strong>
//                                 <p>
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                                     Lorem ipsum dolor <a href="#">#ipsumdolor </a>adipiscing elit.
//                                 </p>
//                             </div>
//                         </li>
//                         <li class="media">
//                             <a href="#" class="pull-left">
//                                 <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle" />
//                             </a>
//                             <div class="media-body">
//                                 <span class="text-muted pull-right">
//                                     <small class="text-muted">30 min ago</small>
//                                 </span>
//                                 <strong class="text-success">@JohnNida</strong>
//                                 <p>
//                                     Lorem ipsum dolor <a href="#">#sitamet</a> sit amet, consectetur adipiscing elit.
//                                 </p>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>

//     </div>
//     </div>
//     </div>
// </div>
// )
//  }
