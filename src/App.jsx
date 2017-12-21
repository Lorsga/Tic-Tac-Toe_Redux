import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser, editInput, removeUser } from './actions/userAction'
const mapStateToProps = state => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    addUser: () => { dispatch(addUser()) },
    editInput: (text) => { dispatch(editInput(text)) },
    removeUser: (i) => { dispatch(removeUser(i)) }
  })
}




class App extends Component {

  handlerClick = (e) => {
    this.props.addUser();
  }

  handleChange = (e) => {
    let text = e.target.value;
    this.props.editInput(text);
  }
  removeUser = (e, i) => {
    this.props.removeUser(i);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <input type="button" value="Aggiungi" onClick={this.handlerClick} />
        <ul>
          {this.props.state.user.name.map((user, i) => {
            return (
              <div key={i}>
                <li >{user}</li>
                <button onClick={(e) => this.removeUser(e, i)}>Remove</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
