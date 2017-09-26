import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import Deserve from './components/Deserve.jsx';
import GMap from './components/GMap.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  updateList(data) {
    this.setState({
      items: data
    });
  }

  render () {
    return (<div>
      <h1>RESPONSIBILITEA</h1>
      <Search updateList={this.updateList.bind(this)}/>
      <List items={this.state.items}/>
      <Deserve />
      <GMap />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));