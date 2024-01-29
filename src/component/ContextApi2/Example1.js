import React from 'react';

export const UserContext = React.createContext();

export default function Solution1CreateContext() {
  return (
    <UserContext.Provider value="My Name is Abhikhya Ashi">
      <User />
    </UserContext.Provider>
  )
}

function User() {
  return (
    <UserContext.Consumer>
      {value => <h1>{value}</h1>} 
      {/* prints: Name */}
    </UserContext.Consumer>
  )
}

