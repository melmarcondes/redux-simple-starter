import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return <div>Select a book to get started.</div>;
        }

        return(
          <div>
              <h3>Book details for:</h3>
              <h6>{this.props.book.title}</h6>
          </div>
        );
    }
};

function mapStateToProps(state) {
    //whatever is returned will show up as props inside BookList
    return{
       book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail)