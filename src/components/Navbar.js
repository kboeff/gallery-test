import React from 'react';

export default ({ switchView }) => {
  return (
    <navbar>
      <div className="nav-link" onClick={() => switchView('albums')}>Albums</div>
      <div  className="nav-link" onClick={() => switchView('favourites')}>Favourites</div>
    </navbar>
  );
};