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

let moveElementClassNames     = '.ProfileCardStats-stat, .Arrange-sizeFit';
let moveDestinationClassNames = '.nav, .js-global-actions';

let deleteDom = new dashboard();
deleteDom._delete('.Trends, .trends');
deleteDom._delete('.dashboard-right');

$('.global-nav-inner').css('background-color', '#28b9ff');

function updateTimeLine() {
	$('.new-tweets-bar, .js-new-tweets-bar').click()
}

// 以下のスタイルに入れたDOMの内容を変更しないとpaddingなどが効いた状態となる
/**
 * フォロワーの値をヘッダに変更
    padding-top: 0px;
    padding-bottom: 0px;
    border-bottom-width: 0px;
    padding-left: 0px;
    padding-right: 0px;
 */

 /**
  * 新しいツイートがあったら要素をクリックする無名関数。
  * FIXME: jQueryと普通のJavascriptが混ざっておかしな感じになっているため、
  * もし見本として見せることがあれば、書き直す必要がある。
  * 
  * @see https://qiita.com/munieru_jp/items/a6f1433652124a2165e4
  * @return {[type]}
  */
 (function() {
     'use strict';

     const CLASS_NEW_TWEETS_BAR = 'new-tweets-bar';

     //監視ターゲットの取得
     const timeline        = document.getElementById('timeline');
     const streamContainer = timeline.querySelector('.stream-container');
     const streamItem      = streamContainer.querySelector('.stream-item');

    //オブザーバーの作成
	// observerの中の処理としては、recordsは引数として持っており、その中で取得する値を決めている。
	// 取得した値を中でclickするといった動作となっている。
	// MutaitationObserverの引数はcallback
	// MutationObserver(
    //   function callback
    // );
    const observer = new MutationObserver(records => {
        records.forEach(record => {
            Array.from(record.addedNodes)
                .filter(node => node.classList.contains(CLASS_NEW_TWEETS_BAR))
                .forEach(node => node.click());
        });
    });

    // 監視オプションの作成
    const options = {
        childList: true
    };

    //監視の開始
	// void observe(
    //   Node target,
    //   MutationObserverInit options
    // );
    observer.observe(streamItem, options);
 })();
