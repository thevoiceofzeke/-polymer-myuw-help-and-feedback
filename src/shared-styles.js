import '@polymer/polymer';

const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

console.log('script executed');

$_documentContainer.innerHTML = `<custom-style>
    <style is="myuw-custom-style">
      html {
        --myuw-material-icons: {
          font-family: 'Material Icons';
          font-weight: normal;
          font-style: normal;
          font-size: 28px;
          display: inline-block;
          line-height: 1;
          text-transform: none;
          letter-spacing: normal;
          word-wrap: normal;
          white-space: nowrap;
          direction: ltr;
        
          /* Support for all WebKit browsers. */
          -webkit-font-smoothing: antialiased;
          /* Support for Safari and Chrome. */
          text-rendering: optimizeLegibility;
        
          /* Support for Firefox. */
          -moz-osx-font-smoothing: grayscale;
        
          /* Support for IE. */
          font-feature-settings: 'liga';
        }
      }
    </style>
  </custom-style>`;
  
  document.head.appendChild($_documentContainer);