let dashboard = function (_deleteElementClassNames) {
	
	// setterを用意すべきな気がしている
	this._deleteElementClassNames = _deleteElementClassNames;
	
	this.getDashboard = function() {
		return $(this._deleteElementClassNames);
	}
	
	/**
	 * [description]
	 *
	 * @return {void}
	 */
	this.delete = function() {
		$(_deleteElementClassNames).remove();
		return true;
	};
}



let User = function (_getUserInfoClassNames, _moveUserInfoDestination) {
	// console.dir($(_getUserInfoClassNames));
	// こいつらにもsetterを用意してあげると親切か？
	this._getUserInfoClassNames = _getUserInfoClassNames;
	this._moveUserInfoDestination = _moveUserInfoDestination;
	
	/**
	 * Userの情報(ツイート数、フォロー数、フォロワー数)のDOMを
	 * 取得する。
	 *
	 * @return {object} (ツイート数、フォロー数、フォロワー数)を含むDOMのオブジェクトを返す
	 */
	this._getUser = function() {
		return $(this._getUserInfoClassNames);
    };
	
	/**
	 * Userの情報(ツイート数、フォロー数、フォロワー数)のDOMを
	 * グローバルナビゲーションへ移動させる。
	 *
	 * @return {void}
	 */
	this._moveUser = function() {
		this.getUser().appendTo($(this._moveUserInfoDestination));
	};
}

// ProfileCardStats-stat Arrange-sizeFit
// id: global-actions, class: nav js-global-actions
let moveElementClassNames     = '.ProfileCardStats-stat, .Arrange-sizeFit';
let moveDestinationClassNames = '.nav, .js-global-actions';

let trend = dashboard.delete('.Trends, .trends');
let rightDashboard = dashboard.delete('.dashboard-right');
let getElement = User('.ProfileCardStats-stat, .Arrange-sizeFit', '.nav, .js-global-actions');

// 以下のスタイルに入れたDOMの内容を変更しないとpaddingなどが効いた状態となる
/**
 * フォロワーの値をヘッダに変更
    padding-top: 0px;
    padding-bottom: 0px;
    border-bottom-width: 0px;
    padding-left: 0px;
    padding-right: 0px;

 */

//ストリーム変更時にいいねを消し去る
// function ObserveStream(){
// 	//オブザーバーの作成
// 	var observer = new MutationObserver(hide_like);
// 	//監視の開始
// 	observer.observe(document.getElementsByClassName('stream-items')[0], {
// 	    attributes: true,
// 	    childList:  true
// 	});
// 	console.log("observe");
// 	// hide_like();
// 	delete_japanese_trend();
// } 
// //body変更時にObserveStreamを設定する。
// //オブザーバーの作成
// var observer = new MutationObserver(ObserveStream);
// //監視の開始
// observer.observe(document.getElementsByTagName("body")[0], {
//     attributes: true
// });


