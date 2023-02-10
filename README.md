# tabhider  
Quick version

Will hide extension tab. Can hide more if hardcoded. 
Hiding tab is persistent, if you try to unhide it, it will hide again.  

There are several ways to disable this. I might add user definable ways.  
For now, and the less technical. Move the javascript file.  

I recommend buring it one layer deeper.  

Go to the extension folder this project is located in, if you have not changed the name it will be
your_path_to\stable-diffusion-webui\extensions\tabhider\javascript  

Create another folder, name it something like backup.  
Move the javascript file into that folder.  
Reload Ui using the shortcut button on the bottom of the webui.  

Want to reenable it, move it out from backup and back into the javascript folder.  

Want to hide another tab, open the file, go to the bottom, you will see where it says
```javascript
document.addEventListener("DOMContentLoaded", () => {
  TabHider.observeStartUp(["Extensions"]);
});
```

Using `Settings` as an example, add the tab name to the list, like this.

```javascript
document.addEventListener("DOMContentLoaded", () => {
  TabHider.observeStartUp(["Extensions", "Settings"]);
});
```
