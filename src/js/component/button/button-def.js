export default class ButtonDef extends HTMLElement {
  static get template() {
    return `
      <style>
        button {
          display: inline-flex;
          margin: 0.5rem;
          padding: 1rem;
          background-color: #999;
          border: none;
          border-radius: 5px;
          color: #fff;
          font-size: 14rm;
          cursor: pointer;
          transition: .3s all;
        }
        button:hover {
          background-color: #ccc;
        }
      </style>
      <button>
        <slot></slot>
      </button>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    }).innerHTML = ButtonDef.template;
  }
};