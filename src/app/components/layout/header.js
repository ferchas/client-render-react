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
        <div className="header_left">
          <div className="header_menu">
            <span className="title">TITLE</span>
            <span className="sub-title">{this.props.subTitle || ''}</span>
          </div>
        </div>

        <div className="header_right">
          <div className="header_user">
            <a href="/" className="menu">
              <img src="./images/menu.svg" className="icon-fa icon-menu"/>
            </a>
            <img src="./images/user.svg" className="icon-fa icon-user"/>
            <span onClick={this.openUserMenu} >
              {user || 'Usuario'}
            </span>
          </div>
        </div>

      </header>
    );
  }
}


export default header;