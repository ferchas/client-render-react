import React,  { Component }  from 'react';

import Layout from '../../components/layout';
import Headlines  from '../../components/headlines';

import headlines from '../../services/headlines';

import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryFilter: null,
      headlines: null,
    };
  }

  componentDidMount() {
    const { categoryFilter } = this.props.match.params
    this.setState({ categoryFilter });
    headlines(categoryFilter).then(data => this.setState({ headlines: data}));
  }

  render() {
    return (
      <Layout>
        <div className="category-filter-page">
          <aside>
            <h3>Filter</h3>
            <p>{this.state.categoryFilter}</p>
          </aside>
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