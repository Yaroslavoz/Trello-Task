import React from 'react';
import TrelloCard from './TrelloCard';
import TrelleActionButton from './TrelloActionButton';
const TrelloList = ({ title, cards, listID }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map(card => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelleActionButton listID={listID} />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    height: '100%',
    padding: 8
  }
};

export default TrelloList;
