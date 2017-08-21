import React, { Component } from 'react';

class Detail extends Component {
    constructor() {
        super()

        this.state = {
            purchased: 'Purchased!'
        }
    }

    render() {
        return (
            <div className="detail">

                {!this.props.productImage ?
                    null : <div className="detail-box">
                        <h3>{this.props.productTitle}</h3>
                        <img className="detailImage" src={this.props.productImage} /> <br />
                        <p className="detailDesc">{this.props.productDesc}</p><br/>
                        <p className="detailPrice">${this.props.productPrice}.00 </p>
                        <button className="btn" onClick={() => this.props.addToCart(this.state.purchased, this.props.productDesc) }>Add to Cart</button>
                    </div>}

            </div>
        )
    }


}


export default Detail;