window.onload = function() {
  // 点赞
  (function praise() {
    const praise = document.getElementsByClassName('praise');
    const praiseArray = [...praise];
    for (let i of praiseArray) {
      const span = i.getElementsByTagName('span')[0];
      const praiseImg = i.getElementsByClassName('praise-img')[0];
      const praisedImg = i.getElementsByClassName('praised-img')[0];
      i.praised = false;
      i.onclick = function() {

        if (!i.praised) {
          span.innerText = Math.trunc(span.innerText) + 1;
          praiseImg.style.display = 'none';
          praisedImg.style.display = 'block';
        } else {
          span.innerText = Math.trunc(span.innerText) - 1;
          praiseImg.style.display = 'block';
          praisedImg.style.display = 'none';
        }
        i.praised = !i.praised
      }
    }
  })();
  // 评论
  (function comment() {
    const commentList = document.getElementsByClassName('comment-list');
    const commentListArray = [...commentList];
    for (let i of commentListArray) {
      const commentItem = i.getElementsByClassName('comment-item');
      const commentItemArray = [...commentItem];
      const commentItemLength = commentItem.length;
      const spread = i.parentNode.getElementsByClassName('spread')[0];
      const packUp = i.parentNode.getElementsByClassName('pack-up')[0];
      if (commentItemLength > 3) {
        for (let j of commentItemArray.slice(3)) {
          j.style.display = 'none';
        }
        spread.style.display = 'block';
        packUp.style.display = 'none';
        spread.getElementsByTagName('span')[0].innerText = commentItemLength;
        spread.onclick = function() {
          for (let j of commentItemArray.slice(3)) {
            j.style.display = 'block';
          }
          spread.style.display = 'none';
          packUp.style.display = 'block';
        }
        packUp.onclick = function() {
          for (let j of commentItemArray.slice(3)) {
            j.style.display = 'none';
          }
          spread.style.display = 'block';
          packUp.style.display = 'none';
        }
      }
    }
  })();
  // 删除
  (function doDelete() {
    const deleteButton = document.getElementsByClassName('delete');
    const deleteArray = [...deleteButton];
    const main = document.getElementsByTagName('main')[0];
    for (let i of deleteArray) {
      const contentNode = i.parentNode.parentNode.parentNode;
      i.onclick = function() {
        main.removeChild(contentNode)
      }
    }
  })();
}