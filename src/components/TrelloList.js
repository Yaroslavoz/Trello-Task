import React from 'react';
import TrelloCard from './TrelloCard';
import TrelleActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #dfe3e6;
  borderradius: 3px;
  width: 300px;
  height: 100%;
  margin-right: 8px;
`;

const TrelloList = ({ title, cards, listID }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <TrelloCard
              key={card.id}
              text={card.text}
              id={card.id}
              index={index}
            />
          ))}
          <TrelleActionButton listID={listID} />
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
};

export default TrelloList;
