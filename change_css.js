let dashboard = function() {
	// setterを用意すべきな気がしている
	
	/**
	 * 削除する要素をclassで指定して削除を行う
	 * MEMO: 本当は削除できたかどうかをbooleanで返す方が綺麗な気がしている。
	 * また、外の値をそのままオブジェクト内のメソッドの引数にそのまま使うのもまずい気がしている。
	 * その辺りどうか、質問してみる。
	 * 
	 * @return {void}
	 */
	this._delete = function(_deleteElementClassNames) {
		$(_deleteElementClassNames).remove();
	};
};

let User = function (_getUserInfoClassNames, _moveUserInfoDestination) {
	this._getUserInfoClassNames   = _getUserInfoClassNames;
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
		this._getUser().appendTo($(this._moveUserInfoDestination));
	};
};

// ProfileCardStats-stat Arrange-sizeFit
// id: global-actions, class: nav js-global-actions
let moveElementClassNames     = '.ProfileCardStats-stat, .Arrange-sizeFit';
let moveDestinationClassNames = '.nav, .js-global-actions';

let deleteDom = new dashboard();
deleteDom._delete('.Trends, .trends');
deleteDom._delete('.dashboard-right');
// let getElement = User('.ProfileCardStats-stat, .Arrange-sizeFit');

$('.global-nav-inner').css('background-color', '#28b9ff');

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
function ObserveStream(){
	//オブザーバーの作成
	var observer = new MutationObserver(/*ここに実行したい関数を入れる*/);
	//監視の開始
	observer.observe(document.getElementsByClassName('stream-items')[0], {
	    attributes: true,
	    childList:  true
	});
	console.log("observe");
	// hide_like();
	// delete_japanese_trend();
	/*ここに実行したい関数を入れる*/
} 
//body変更時にObserveStreamを設定する。
//オブザーバーの作成
var observer = new MutationObserver(ObserveStream);
//監視の開始
observer.observe(document.getElementsByTagName("body")[0], {
    attributes: true
});


