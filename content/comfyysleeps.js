var uid = '465180';
var wid = '699723';
var pop_fback = 'up';

var pop_tag = document.createElement('script'); 
pop_tag.src='//cdn.popcash.net/show.js';
document.body.appendChild(pop_tag);

pop_tag.onerror = function() {
  pop_tag = document.createElement('script');
  pop_tag.src='//cdn2.popcash.net/show.js';
  document.body.appendChild(pop_tag);
}

var scriptTag = document.createElement('script');
scriptTag.src = 'https://alwingulla.com/88/tag.min.js';
scriptTag.setAttribute('data-zone', '9326');
scriptTag.async = true;
scriptTag.setAttribute('data-cfasync', false);
document.body.appendChild(scriptTag);
