import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="header-container">
        <span>minifi URL Shortener</span>
        </section>
      </div>
    )
  }
}

export default Header;
