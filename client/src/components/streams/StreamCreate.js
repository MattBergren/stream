import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    
    renderInput(formProps) {
        return (

            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input} />
            </div>
       
        );

    }

    render() {
        return ( 
            <form className="ui form">
                <Field name="title" label="Enter Title"component={this.renderInput}/>
                <Field name="desription" label="Enter Description" component={this.renderInput}/>
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);