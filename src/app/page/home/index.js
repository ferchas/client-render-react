import React,  { Component }  from 'react';

import Layout from '../../components/layout';
import Headlines  from '../../components/headlines';

import category from '../../services/category';
import headlines from '../../services/headlines';

import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      headlines: null,
      closeMenu: false,
    };
    
    this.handleFilter = this.handleFilter.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
  }

  componentDidMount() {
    category().then(data => this.setState({ category: data}));
    headlines().then(data => this.setState({ headlines: data}));
  }
  
  handleFilter(el) {
    this.props.history.push(el.target.innerText);
  }

  handleMenu(){
    this.setState({ closeMenu: !this.state.closeMenu});
  }

  render() {
    return (
      <Layout>
        <div className="home-page">
          <img src="./images/menu.png" className="menu" onClick={this.handleMenu}/>
          <nav className={this.state.closeMenu? '' : 'close'}>
            <ul>
              { 
                this.state.category && 
                this.state.category.map(e => <li key={e} onClick={this.handleFilter}>{e}</li>)
              }
            </ul>
          </nav>
          <article>
            { 
              this.state.headlines && this.state.headlines.articles &&
              <Headlines articles={this.state.headlines.articles} />              
            }
          </article>
        </div>
      </Layout>
    );
  }
} 

export default Home;