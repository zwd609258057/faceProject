import alt from '../alt';
import FooterActions from '../actions/FooterActions.js';

class FooterStore {
	constructor() {
		this.bindActions(FooterActions);
		this.characters[];
	}
	onGetTopCharactersSuccess(data) {
		this.characters = data.slice(0, 5)
	}
	onGetTopCharactersFail(jqXhr) {
	    // 处理多个响应格式，退回到HTTP状态代码。
	    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
	}
}

export default alt.createStore(FooterStore)