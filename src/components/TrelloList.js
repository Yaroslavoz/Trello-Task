import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import TrelloDeleteButton from './TrelloDeleteButton';


const ListContainer = styled.div`
  background: rgba(255, 255, 255, 0.75);
  border-radius: 5px;
  width: 300px;
  height: 100%;
  margin-right: 8px;
  padding: 8px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  `

const TrelloList = ({ title, cards, listID, index, createdAt }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)}>
            {provided => (
              <div {...provided.dragHandleProps} ref={provided.innerRef}>
                <TitleContainer>
                  <h2>{title}</h2>
                  <TrelloDeleteButton 
                  id={listID}
                  />
                </TitleContainer>
                
                {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    text={card.text}
                    createdAt={card.createdAt}
                    id={card.id}
                    index={index}
                  />
                ))}
                <TrelloActionButton listID={listID} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

export default TrelloList;
