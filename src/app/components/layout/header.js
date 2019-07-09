import React from 'react';

class header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userOpen: false,
    };
  }
  
  render () {
    const { user } = this.props;
    return (
      <header>
        <div className="header_title">
          <span className="title">TITLE</span>
          <span className="sub-title">{this.props.subTitle || ''}</span>
        </div>
      
        <div className="header_user">
          <img src="./images/user.svg" className="icon-fa icon-user"/>
          <span>
            {user || 'Usuario'}
          </span>
        </div>
       

      </header>
    );
  }
}


export default header;