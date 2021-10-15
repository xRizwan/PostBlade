import React from 'react';
import sword from '../Images/sword.png';

export default function Loading() {

  return (
    <div className="centered">
      <img className="loader" width={"60px"} src={sword} alt="asteroid" />
    </div>
  )
}