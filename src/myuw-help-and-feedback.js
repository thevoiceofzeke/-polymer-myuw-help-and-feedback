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
        .myuw-icon-button {
          margin: 0;
          display: flex;
          position: relative;
          cursor: pointer;          
          min-height: 36px;
          line-height: 38px;
          vertical-align: middle;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-grid-row-align: center;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
          box-sizing: border-box;          
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 0;          
          padding: 0 6px;
          background: transparent;
          color: inherit;
          white-space: nowrap;
          font-weight: 500;          
          font-size: 14px;
          font-style: inherit;
          font-variant: inherit;
          font-family: inherit;
          text-decoration: none;          
          overflow: hidden;
          -webkit-transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);
          transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);
          height: 38px;
          min-width: 38px;          
          border-radius: 50%;
        }
        .myuw-icon-button:hover {
          background-color: rgba(0,0,0,0.1);
        }
        .myuw-icon-button:focus {
          outline: none;
        }
        .myuw-icon-button .material-icons {
          @apply --myuw-material-icons;
        }
      </style>
      <button class="myuw-icon-button" on-click="showModal">
        <i class="material-icons">
          help
        </i>
      </button>
    `;
  }
  showModal() {
    window.alert('Show the modal');
  }
  static get properties() {
    return {
      
    };
  }
}

window.customElements.define('myuw-help-and-feedback', MyuwHelpAndFeedback);
