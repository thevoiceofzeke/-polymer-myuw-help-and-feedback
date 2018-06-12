import '@polymer/polymer';

const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

console.log('script executed');

$_documentContainer.innerHTML = `<custom-style>
    <style is="myuw-custom-style">
    
    </style>
  </custom-style>`;
  
  document.head.appendChild($_documentContainer);