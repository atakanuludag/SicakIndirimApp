import React from 'react';
import FullLayout from '../components/FullLayout';

type NotFoundComponent = React.FC & { layout: typeof FullLayout }

const NotFound: NotFoundComponent = () => {

  return (
    <div>
      <h1>TEST</h1>
    </div>
  )
}

NotFound.layout = FullLayout;
export default NotFound;