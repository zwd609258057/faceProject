import React from 'react';
import {link} from 'react-rouder';
import FooterStore from '../stores/FooterStore';
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = FooterStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		FooterStore.listen(this.onChange);
		FooterActions.getTopCharacters();
	}

}