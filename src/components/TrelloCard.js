import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import  TrelloDeleteCardButton  from './TrelloDeleteCardButton'

const CardContainer = styled.div`
  margin-bottom: 8px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  `

const TrelloCard = ({ text, id, listID, index, createdAt }) => {
  
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <CardContainer>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card>
              <CardContent>
                <TitleContainer>
                  <Typography gutterBottom>{text}</Typography>
                  <TrelloDeleteCardButton
                    listID={listID} 
                    id={id}
                    />
                </TitleContainer>
                <Typography>Last modified: {createdAt}</Typography>
              </CardContent>
            </Card>
          </div>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default TrelloCard;
