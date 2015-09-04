getBiggerPicture = function(url){
    var re, newstr;

    re = /_normal/gi;
    newstr = url.replace(re, '');

    document.querySelector('.profilePic').src = newstr;
}
