import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as ListActions from '../actions'
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin: 8px;
  padding: 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <ListContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {lists.map((list, index) => (
                  <TrelloList
                    // onClick={this.props.dispatch({type: 'DELETE_LIST'})}
                    listID={list.id}
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton list />
              </ListContainer>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ListActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
