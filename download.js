// Download
(function(){var textFile=null,makeTextFile=function(text){var data=new Blob([text],{type:'application/x-mpegurl'});if(textFile!==null){window.URL.revokeObjectURL(textFile)}textFile=window.URL.createObjectURL(data);return textFile};if(window.location.pathname!='/'&&window.location.pathname!='/search'){var click=document.getElementsByClassName('m3u');for(var i=0;i<click.length;i++){var d=click[i];var a=document.createElement("a");var fileName=d.getAttribute('filename');a.setAttribute("download",fileName);a.appendChild(document.createTextNode('Download '+fileName));a.className="down-link";a.href=makeTextFile(d.innerHTML);d.parentNode.insertBefore(a,d)}}})();
// Spoiler
$(document).ready(function(){$("#flippy").click(function(){$("#flippanel").slideToggle("normal")})});
// Double Click
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,code,kbd,blockquote,td"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
