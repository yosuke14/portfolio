'use strict';

// window.alert('完成しました！');

// 時間の表記
document.getElementById('choice').textContent = new Date();
console.log(document.getElementById('choice')).textContent = new Date();

// jpuery パララックス
$('.main-content-wrapper').stickyStack({
    containerElement: '.main-content-wrapper', //対象要素
    stackingElement: 'section', //区切りとなる要素
    boxShadow: '0 -3px 20px rgba(0, 0, 0, 0.25)' //区切りの影
  });


