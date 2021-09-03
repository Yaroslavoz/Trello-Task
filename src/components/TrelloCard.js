import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin-bottom: 8px;
`;

const TrelloCard = ({ text, id, index, createdAt }) => {
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
                <Typography >{text}</Typography>
                <Typography>Created at: {createdAt}</Typography>
              </CardContent>
            </Card>
          </div>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default TrelloCard;
