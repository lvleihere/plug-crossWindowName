/*
* auther:lvleihere
* date:17/9/9
* v:1.0
* Explanation:
1. First of all need to introduce an empty page 
2. In the data page to write data to window.name
3. Parameter one: dataUrl; 
   Parameter two: proxyUrl;
   parameter three is a successful callback function
*/
(function(root,factory){
    Object.prototype.crossWindowName = factory;
})(this,function(options){
    var load= function(){
        if(first){
            iframe.contentWindow.location = options.proxyUrl;//引入一个空页面
            first = false;
        } else {
            options.success(iframe.contentWindow.name);
            iframe.contentWindow.document.write('');
            iframe.contentWindow.close();
            document.body.removeChild(iframe);
            iframe.src = '';
            iframe = null;
        }
    };
    var first = true;
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = options.dataUrl;
    if(iframe.attachEvent){
        iframe.attachEvent('onload', load);
    } else {
        iframe.onload = load;
    }     
    document.body.appendChild(iframe);
})
