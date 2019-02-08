
// const form = document.getElementById(‘form’);
// const input = document.getElementById(‘input’);
// const add = document.getElementById(‘btn’);
// // const form = document.getElementById(‘form’);
// // const form = document.getElementById(‘form’);
//
//
// var getTextValue = function (){
//   // event.preventDfault();
//   const textValue = input.value;
//
//   const o = document.createElement("h1");
//   o.setAttribute(“id”, “newItem”);
//   o.innerHTML     = `${textValue}`;
//   // o.style.cssText = “font-weight: bold;”
//   //         btElementById(“task-list”).appendChild(o);
//
// }
//------------------------------------------------------------

//まずは既に存在するli要素の数を取得している
// var queryAll = document.getquerySelectorAll('LI');


//今の状態だとクラスを持っているのがボタンなのでボタンだけが削除されてしまう

// var delete_completed = () => {
//   var completeds = document.getElementsByClassName('completed');
// for (var i=0;i<completeds.length;i+=1){
//   completeds[i].style.display = 'none';
// }



// var delete_changing = () => {
//   var changings = document.getElementsByClassName('changing');
// for (var i=0;i<changings.length;i+=1){
//   changings[i].style.display = 'none';
// }
// }

var todoList = document.getElementById('myUL');

//
// var lis = document.getElementsByTagName('li');
//
// var i;
// //あくまでここは既にあるli要素に対しての処理を記述している.既にあるタスクを消去するための処理
// for (i = 0; i < lis.length; i++) {
//   var button = document.createElement("button");
//   var txt = document.createTextNode("削除");
//   button.className = "close";
//   button.appendChild(txt);
//   lis.appendChild(button);
//
// }

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

//closeクラスを持つやつを要素名で取得して、それが配列になっているので、iを変数で定義して、そのi番目の要素に対しての配列の要素全部に対して（close.length）処理を繰り返している
//closeのクラスを持つのはspan要素であり、その親要素がli要素なのでthis.parentElementはliになる。
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
//
// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
var delete_completed = () => {
  var completeds = document.getElementsByClassName('completed');
for (var i=0;i<completeds.length;i++){
  completeds[i].style.display = 'none';
 var lines = document.getElementsByClassName('changing');
 for( var i = 0; i < lines.length;i++){
  lines[i].style.display = 'block';
 }
}
}
var delete_changing = () => {
var changings = document.getElementsByClassName('changing');
for (var i=0;i<changings.length;i++){
  changings[i].style.display = 'none';
   var lines2 = document.getElementsByClassName('completed');
   for( var i = 0; i < lines2.length;i++){
     lines2[i].style.display = 'block';
   }
}
}



// Create a new list item when clicking on the "Add" button
function newElement() {

  //タグを作り、inputの中身を取得し、それをテキストノードとして生成している。それらを別々の変数で定義する。
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  li.className = "changing";
  li.appendChild(t);

  //空のタスクを追加できないようにする
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  //タスクの追加が終わったら検索窓をからにする
  document.getElementById("myInput").value = "";




  var button2 = document.createElement("button");
  var txt2 = document.createTextNode("作業中");
  //button2.className = "changing";
  button2.appendChild(txt2);
  li.appendChild(button2);

  var change = function(){

    button2.textContent = "完了";
     button2.className  = '';
    var parent = button2.parentNode;
    parent.className = "completed";
  };

  button2.addEventListener('click', change);


  var del = function(e){
             var del_parent = e.target.parentElement;
             todoList.removeChild(del_parent);
             };

  var button = document.createElement("button");
  var txt = document.createTextNode("削除");
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);
  button.addEventListener('click', del);





//ここに削除関数があると、新規タスクが表示された時に判定するので、生成された後に削除ボタンを押しても意味がなくなってしまう。
  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
    }

//削除ボタンを押した時に削除
//作業中ボタンを押した時にボタンのテキストの中身が変わる
    // for (i = 0; i < close.length; i++) {
    //   close[i].onclick = function() {
    //     var div = this.parentElement;
    //      div.style.display = "none";
