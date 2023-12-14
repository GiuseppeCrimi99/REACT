import React from 'react';
import Colors from './Colors';

const App = () => {
  const colors = [
    { id: 1, name: 'Red' },
  ];

  return <Colors colors={colors} />;
};

export default App;