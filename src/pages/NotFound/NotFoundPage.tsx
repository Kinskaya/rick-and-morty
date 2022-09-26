import * as React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <h1>404 Page is not found</h1>
        Go <Link to="/">Home</Link>
      </div>
    );
  }
}

export default NotFoundPage;
