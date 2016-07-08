import alt from '../alt.js';

class FooterActions {
	constructor() {
		this.generateActions(
			'getTopCharactersSuccess',
			'getTopCharactersFail'
		);
	}
}

getTopCharacters() {
	$.ajax({ url: '/api/characters/top' })
	.done((data) => {
		this.actions.getTopCharactersSuccess(data);
		console.log("success");
	})
	.fail((jqXhr) => {
		this.actions.getTopCharactersFail(error);
		console.log("error");
	})
}

export default alt.createActions(FooterActions);