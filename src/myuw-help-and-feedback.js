import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-styles/default-theme.js';
import '@polymer/paper-styles/typography.js';

import './shared-styles';

/**
 * `myuw-help-and-feedback`
 *
 * @customElement
 * @polymer
 * @demo index.html
 */
class MyuwHelpAndFeedback extends PolymerElement {
  static get template() {
    return html`  
      <style>
        
      </style>
      <div>H AND F</div>
    `;
  }
  static get properties() {
    return {
      
    };
  }
}

window.customElements.define('myuw-help-and-feedback', MyuwHelpAndFeedback);
