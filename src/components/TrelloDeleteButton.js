import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { deleteList } from '../actions';
import styled from 'styled-components';

const DeleteButton = styled.div`
cursor: pointer;
color: gray
`

class TrelloDeleteButton extends Component {
  state = {
    formOpen: false,
    text: ''
  };


  handleDeleteList = () => {
    const { dispatch, id } = this.props;
      dispatch(deleteList(id));
  };

 
  renderDeleteButton = () => {
    const { list } = this.props;

    
    const buttonTextColor = list ? 'white' : 'inherit';
    

    return (
      <DeleteButton
        onClick={this.handleDeleteList}
        
      >
        <Icon>delete</Icon>
        
      </DeleteButton>
    );
  };

  
  render() {
    return this.renderDeleteButton();
  }
}
// const styles = {
//   openFormButtonGroup: {
//     display: 'flex',
//     alignItems: 'center',
//     cursor: 'pointer',
//     borderRadius: 3,
//     height: 36,
//     width: 272,
//     paddingLeft: 10
//   },
//   formButtonGroup: {
//     marginTop: 8,
//     display: 'flex',
//     alignItems: 'center'
//   }
// };

export default connect()(TrelloDeleteButton);
