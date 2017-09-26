import React from 'react';
import { Button } from 'reactstrap';
import $ from 'jquery';


class Deserve extends React.Component {
	constructor(props) {
	super(props);
	this.state = { 
	}
  }

  componentDidMount() {
  }

  showMap() {
  	$('#gmap').hide()
  }

  render() {
  	return(
  	<Button className="deserve" outline color="success" block size="lg" onClick={this.showMap}>drink 524 calories of sugary goodness</Button>
  	)
  }
}


export default Deserve;