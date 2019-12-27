import React, { Component } from 'react';
import './notes-form.style.scss';
import moment from 'moment';


class NotesForm extends Component {
    state = {
        noteTitle: this.props.note ? this.props.note.noteTitle : '',
        noteText: this.props.note ? this.props.note.noteText : '',
        createdAt: moment(),
        error: ''
    }

    handelChange = (e) => {
        const { name, value } = e.target
        this.setState(() => ({ [name]: value }))
    }

    handelSubmit = (e) => {
        e.preventDefault()
        if (!this.state.noteTitle) {
            this.setState(() => ({
                error: 'Please provide title for a note.'
            }))
        } else {
            this.props.onSubmit({
                noteTitle: this.state.noteTitle,
                noteText: this.state.noteText,
                createdAt: this.state.createdAt.valueOf()
            })
            this.setState(() => ({
                noteTitle: '',
                noteText: '',
                error: ''
            }));
        }
    };

    render() {
        return (
            <div>
                { this.state.error && <p>{ this.state.error }</p> }
                <form
                    onSubmit={ this.handelSubmit }>
                    <input
                        onChange={ this.handelChange }
                        value={ this.state.noteTitle }
                        type="text"
                        name="noteTitle"
                        label='Note Title'
                    />
                    <textarea
                        onChange={ this.handelChange }
                        value={ this.state.noteText }
                        name="noteText"
                        cols="30"
                        rows="10"
                        label='Enter Note Text'
                    ></textarea>
                    <button>Add Note</button>
                </form>
            </div>
        );
    };
};

export default NotesForm;