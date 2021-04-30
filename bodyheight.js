'use strict';
const bodyHeightInput = document.getElementById('shincho');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');

function removeAllChildren(element) {
    while (element.firstChild) {
        //子どもの要素がある限り削除
        element.removeChild(element.firstChild);
    }
}
bodyHeightInput.onkeydown = event => {
    if (event.key === 'Enter') {
        // todo ボタンのonclick()処理を呼び出す
        assessmentButton.onclick();
    }
};

assessmentButton.onclick = () => {
    const bodyHeight = bodyHeightInput.value;
    if (bodyHeight.length === 0) {
        // 名前が空の時は処理を終了する
        return;
    }
    // 診断結果表示エリアの作成
    removeAllChildren(resultDivided)    // result-areaにh3タグで”診断結果”という文字を表示
    const header = document.createElement('h3');　//h3タグを作る
    header.innerText = '測定結果';　//h3タグに"診断結果"の文字列を設定
    resultDivided.appendChild(header);　//result-areaにh3変数を設定(html側に)

    const paragraph = document.createElement('p'); // result-areaにpタグで診断結果を表示
    const result = assessment(bodyHeight); // 診断結果を実行
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
}
function assessment(bodyHeight) {
    // 身長を10倍して四捨五入
    const bodyHeight10 = Math.round(bodyHeight * 10)
    // 文字のコード番号の合計を解答の数で割って添字の数値を求める
    const index = bodyHeight10 % answers.length;
    let result = answers[index];
    let times = bodyHeight / sizes[index]
    console.log(result);
    console.log(times);
    result = result.replace(/\{times\}/g, times);
    return result;　//測定結果
}
const answers = [
    'あなたの身長は、だいたい富士山の{times}倍です。ずいぶん差がありますね。',
    'あなたの身長は、だいたいシンゴジラの{times}倍です。ちょっと闘えないですねぇ。',
    'あなたの身長は、だいたいシロナガスクジラの{times}倍です。背伸びしても...届かないですね。',
    'あなたの身長は、だいたい八村塁選手の{times}倍です。もっと大きくなりましょう。',
    'あなたの身長は、だいたいイエヒメアリの{times}倍です。進撃並みの巨人ですね。',
    'あなたの身長は、だいたいスギ花粉の{times}倍です。けっこう大きいじゃないですか。',
    'あなたの身長は、だいたいコロナウイルスの{times}倍です。もはや神と言っても過言ではないですね。'
];
const sizes = [
    3776000,    //富士山
    11850,      //シンゴジラ
    2500,       //シロナガスクジラ
    203,        //八村塁
    0.2,        //イエヒメアリ
    0.004,       //スギ花粉
    0.0002      //コロナウイルス
];


