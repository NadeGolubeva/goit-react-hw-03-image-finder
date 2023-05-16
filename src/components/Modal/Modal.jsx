import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.putKey); 
  }
  putKey= e => {
    if (e.code === 'Escape') {
      this.props.closeModal(); 
    }
  };
  closeBackDrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal(); 
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.putKey);
}

  render() {

      // <div className={css.Modal}>{this.props.children}</div> {/* рендеринг дочірніх елементів */}
//     </div>, modalRoot)
//   }
// }


    return createPortal(
      <div
        className={css.overlay}
        onClick={this.closeBackDrop}
      >
        <div
          className={css.modal}
        >  
    {this.props.children}
  </div>
</div>, modalRoot
    )
  }
}