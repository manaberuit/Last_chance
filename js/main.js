//全体的にインデントがずれています。
//不要な空白もなくしましょう。
//動作を説明するコメントは残しておいて良いです。

//要素の取得
const todoList = document.getElementById('myUL');
const close = document.getElementsByClassName("close");
const completeds = document.getElementsByClassName('completed');
const changings = document.getElementsByClassName('changing');
const all = document.getElementsByTagName("li");
const radioBtnAll = document.getElementById("radiobtn_all");
const radioBtnChanging = document.getElementById("radiobtn_changing");
const radioBtnCompleted = document.getElementById("radiobtn_completed");

//「作業中」ボタン押下時
const delete_completed = () => {
  //完了状態のリストを非表示にする
  for (var i = 0; i < completeds.length; i++) {
    completeds[i].style.display = 'none' 
  }
  //作業中状態のリストを表示する
  for (var i = 0; i < changings.length; i++) {
    changings[i].style.display = 'block';
  }
}

//「完了」ボタン押下時
const delete_changing = () => {
  //作業中状態のリストを非表示にする
  for (var i = 0; i < changings.length; i++) {
    changings[i].style.display = 'none';
  }
  //完了状態のリストを表示する
  for (var i = 0; i < completeds.length; i++) {
    completeds[i].style.display = 'block';
  }
}

//「全て」ボタン押下時
const all_display = () => {
  //全てのリストを表示する
  for (i = 0; i < all.length; i++) {
    all[i].style.display = "block";
  }
}

//ボタンに処理追加
radioBtnChanging.addEventListener('click', delete_completed);
radioBtnCompleted.addEventListener('click', delete_changing);
radioBtnAll.addEventListener('click', all_display);


//-----------------ここまでは私が整理しました。-------------------------------
//上記を例に以下のコードも整理してみてください。

//上記の関数はES6の書き方を使用しているので、
//この関数もES6で記載しましょう。（アロー関数）
//また、onclickを用いた書き方はあまりよくないです。
//処理の追加はなるべくjsで追加した方が良いので、上記のようにaddEventListenerを使用してください。
function newElement() {
  //変数の宣言もES6(letとconst)を使用しましょう。
  var li = document.createElement("li");
  //"myInput"を二度取得しているのが無駄な処理となっています。
  //最初にまとめてgetElementById("myInput")しましょう。
  var inputValue = document.getElementById("myInput").value;
  //ｔという変数名はあまり良くないです。
  //第三者が見て何の変数か分かる名前にしましょう。（コードの可読性を上げる。）
  var t = document.createTextNode(inputValue);

  li.className = "changing";
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    //"myUL"は一度しか取得していませんが、
    //getElementByIdをまとめて最初に記述することで可読性があがります。
    document.getElementById("myUL").appendChild(li);
  }

  //"myInput"を二度取得しているのが無駄な処理となっています。
  //最初にまとめてgetElementById("myInput")しましょう。
  document.getElementById("myInput").value = "";

  var button2 = document.createElement("button");
  var txt2 = document.createTextNode("作業中");

  button2.appendChild(txt2);
  li.appendChild(button2);

  //関数の定義の中に関数の定義がある状態です。
  //この定義は外に出しましょう。
  var change = function () {
    button2.textContent = "完了";
    button2.className = '';
    var parent = button2.parentNode;
    parent.className = "completed";
  };

  button2.addEventListener('click', change);


  var del = function (e) {
    var del_parent = e.target.parentElement;
    todoList.removeChild(del_parent);
  };

  var button = document.createElement("button");
  var txt = document.createTextNode("削除");
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);
  button.addEventListener('click', del);

}