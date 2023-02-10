let tabHider = null;

class TabHider {
  constructor(elements) {
    this.elements = [];
    elements.forEach(e => {
        let tab = gradioApp().getElementById(`tab_${e.innerText.trim().toLowerCase()}`)
        this.elements.push({'element':e, 'tab': tab});
        tab.style.display = "none";
        e.style.display = "none";
    })
    this.rehide = this.rehide.bind(this);
    this.rehideFunc = this.rehide.bind(this);
    this.enableRehide()
  }

  rehide(){
    this.elements.forEach( ob =>{
        ob.element.style.display = "none";
        ob.tab.style.display = "none"
    })
  }

  enableRehide(){
    onUiUpdate(this.rehideFunc);
  }

  disableRehide() {
    uiUpdateCallbacks = uiUpdateCallbacks.filter(cb => cb !== this.rehideFunc);
  }

  static observeStartUp(tabNames) {
    const observer = new MutationObserver(() => {
      let elements = [...document.querySelector('gradio-app').shadowRoot.querySelectorAll("#tabs > div > button")].filter( e => tabNames.includes(e.innerText));

      if (elements.length > 0) {
        tabHider = new TabHider(elements);
        observer.disconnect();
      }
    });
    observer.observe(gradioApp(), { childList: true, subtree: true });
    return tabHider;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  TabHider.observeStartUp(["Extensions"]);
});
