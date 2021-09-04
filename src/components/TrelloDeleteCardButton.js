import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { deleteCard } from '../actions';
import styled from 'styled-components';

const DeleteButton = styled.div`
cursor: pointer;
color: gray
`

class TrelloDeleteCardButton extends Component {
  state = {};


handleDeleteCard = () => {
     const { dispatch, id, listID } = this.props;
      dispatch(deleteCard(id, listID));
 };

   
  renderDeleteCardButton = () => {
    const { list } = this.props;
    return (
      <DeleteButton
        onClick={ this.handleDeleteCard }
      >
        <Icon>delete</Icon>
        
      </DeleteButton>
    );
  };

  
  render() {
    return this.renderDeleteCardButton();
  }
}


export default connect()(TrelloDeleteCardButton);
