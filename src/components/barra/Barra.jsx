import ProgressBar from 'react-bootstrap/ProgressBar';

import React from 'react'

const Barra = () => {
  return (
    <div>
    <ProgressBar striped variant="success" now={50} />
    <ProgressBar striped variant="info" now={60} />
    <ProgressBar striped variant="warning" now={75} />
    <ProgressBar striped variant="danger" now={100} />
  </div>
  )
}

export default Barra
