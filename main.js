function clickOrigin(e){
    var target = e.target;
    var tag = [];
    tag.tagType = target.tagName.toLowerCase();
    tag.tagClass = target.className.split(' ');
    tag.id = target.id;
    tag.parent = target.parentNode;

    return tag;
}

var tagsToIdentify = ['a'];

document.body.onclick = function(e){
    elem = clickOrigin(e);
      if (elem.tagType == tagsToIdentify[i]){
          document.getElementById("download").innerHTML = "When the download is complete, unzip the installer and run it."
          return false; // or do something else.
    }
};
