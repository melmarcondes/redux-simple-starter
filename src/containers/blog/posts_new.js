import React, {Component} from 'react';
import {Field, reduxForm, change} from 'redux-form';
import {Link} from 'react-router-dom';
//reduxForm is similar to connect in react-redux
import {connect} from 'react-redux';
import {createPost} from "../../actions";
import AutoComplete from '../../components/autocomplete';

class PostsNew extends Component{

    renderField(field){ //arg responsible to link this input tag with Field component
        //{...field.input} handles onBlur, onChange, onFocus events
        //Field status: pristine (empty and initial state), touched and invalid
        const {meta:{touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return(
            <div className={className} >
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/>
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    renderAutoComplete = (field) => {
        const {meta:{touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        console.log(change);
        window.change = change;
        console.log(this.props);
        return(
            <div className={className} >
                <label>{field.label}</label>
                <AutoComplete onChange={
                    (value) => {
                        console.log("WHO IS THIS=>", this);
                        this.props.change(`ano`,value.year);
                        field.input.onChange(value.name);
                    }
                }/>
            </div>
        );
    }

    onSubmit(values){
      this.props.createPost(values, () => this.props.history.push('/posts'));
    }

    render(){
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Title for Post" name="title" component={this.renderField}/>
                <Field label="Post Categories" name="categories" component={this.renderField}/>
                <Field label="Post Content" name="content" component={this.renderAutoComplete}/>
                <input type="Submit" className="btn btn-primary"/>
                <Link to="/posts" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title || values.title.length < 3){
        errors.title = "Enter a title that is at least 3 characters!";
    }
    if(!values.categories){
        errors.categories = "Enter a categories!";
    }
    if(!values.content){
        errors.content = "Enter a content!";
    }

    //if erros is empty, the form is fine to submit
    return errors;
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default reduxForm({
    validate,
    form:'PostsNewForm' //name of the form
})(connect(mapStateToProps, {createPost: createPost})(PostsNew));

