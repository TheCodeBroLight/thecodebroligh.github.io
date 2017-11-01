var syntax_blocks = document.getElementsByClassName('syntax-box');

for(var m=0;m<syntax_blocks.length;m++){
	code = syntax_blocks[m].innerHTML;
	var colors=[
	['var','function','typeof','new','return','if','for','in','while','break','do','continue','switch','case'],
	['1','2','3','4','5','6','7','8','9','0','//'],
	['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','з','ч','ш','щ','ъ','ы','ь','э','ю','я'],
	[],
	[]
	];
	//code = code.replace(/(var|function|typeof|new|return|if|for|in|while|break|do|continue|switch|case)([^a-z0-9\$_])/gi,'<span class="syntax1">$1</span>$2').replace(/(\{|\}|\]|\(|\)|\[|\|)/gi,'<span class="syntax3">$1</span>').replace(/\t/g,'   ').replace(/(alert|console.log|)/,'<span class="syntax3">$1</span>').replace(/( \+ | \- | \* | \/ | \= |;)/,'<span class="syntax2">$1</span>');
	
	var syntax_ids=['z','f','s','t','fo'];

	for(var i=0;i<colors.length;i++){
		for(var j=0;j<colors[i].length;j++){
			for(var k=0;k<code.split(colors[i][j]).length-1;k++){		
					code=code.split(colors[i][j])[k]+colors[i][j]+code.split(colors[i][j])[k+1].replace(colors[i][j],'<span class="syntax'+syntax_ids[i]+'">'+colors[i][j]+'</span>');
			}
		}
	}

	syntax_blocks[m].innerHTML=code;
}