/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export class ShowFullItem extends Component {
    render() {
        return (
          <div className='full-item'>
             <div>
                <div className='close-center'><div className='close' onClick={() => this.props.onShowItem(this.props.item)}>Закрыть</div></div>
                <img src={"./img/" + this.props.item.img} />
                <h2>{this.props.item.tittle}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}₽</b>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
             </div>
          </div>
        )
    }
}

export default ShowFullItem