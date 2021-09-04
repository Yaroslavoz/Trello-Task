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
  state = {};


  handleDeleteList = () => {
    const { dispatch, id } = this.props;
      dispatch(deleteList(id));
  };

  // handleDeleteCard = () => {
  //   const { dispatch, id, listID } = this.props;
  //     dispatch(deleteCard(id, listID));
  // };

 
  renderDeleteButton = () => {
    const { list } = this.props;
    return (
      <DeleteButton
      onClick={ this.handleDeleteList }
        
      >
        <Icon>close</Icon>
        
      </DeleteButton>
    );
  };

  
  render() {
    return this.renderDeleteButton();
  }
}


export default connect()(TrelloDeleteButton);
