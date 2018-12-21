
var data = [
  {
     txtno: 'one',
     title: 'gingerbread',
     ptext: 'Cake muffin donut chocolate cake jelly sesame snaps wafer tart pie sweet roll muffin chupa chups.'
  },
  {
     txtno: 'two',
     title: 'brownie',
     ptext: 'Cake cookie lemon drops muffin sugar plum. Liquorice pudding sugar plum topping macaroon pie chocolate.'
  },
  {
     txtno: 'three',
     title: 'ice cream',
     ptext: 'Cake muffin donut chocolate cake jelly sesame snaps wafer tart pie sweet roll muffin chupa chups.'
  },
  {
     txtno: 'four',
     title: 'lava cake',
     ptext: 'Cake cookie lemon drops muffin sugar plum. Liquorice pudding sugar plum topping macaroon pie chocolate.'
  }
];

function createArticle(item) {

  // <article data-title="data-title">
  //   <h3>gingerbread</h3>
  //   <h4>step one</h4>
  //   <p>Cake muffin donut chocolate cake jelly sesame snaps wafer tart pie sweet roll muffin chupa chups.</p>
  // </article>
  var tmpHtml = "<article data-title=\"data-title\">";
  tmpHtml += "<h3>" + data[i].title + "</h3>";
  tmpHtml += "<h4>step " + data[i].txtno + "</h4>";
  tmpHtml += "<p>" + data[i].ptext + "</p>";
  tmpHtml += "</article>";
  return(tmpHtml);
}

var html = "";
for(var i=0; i<data.length; i++) {
  html += createArticle(data[i]);
}
let elemInfo01 = document.getElementById("infographic01");
console.log(html);
elemInfo01.innerHTML = html;
