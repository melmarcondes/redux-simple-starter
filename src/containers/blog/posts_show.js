import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost, deletePost} from "../../actions";


class PostsShow extends Component{
    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
    }

    onDeleteClick(){
        this.props.deletePost(this.props.match.params.id, () => this.props.history.push('/posts'));
    }

    render(){
        const {post} = this.props;
        if(!post){
            return <div>Loading...</div>
        }
        return(
            <div>
                <Link to="/posts">Back to List</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h3>Categories: {post.categories}</h3>
                <h3>{post.content}</h3>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {post: state.posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost: fetchPost, deletePost: deletePost})(PostsShow)