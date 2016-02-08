_satellite.pushAsyncScript(function(event, target, $variables){
  var script = document.createElement('script');
    script.src = "//tag.yieldoptimizer.com/ps/ps?t=s&p=1057&pcid="+_satellite.getVar('tntPCID');
    document.getElementsByTagName('head')[0].appendChild(script);

});
