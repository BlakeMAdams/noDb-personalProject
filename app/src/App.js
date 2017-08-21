import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Detail from './components/detail';
import { getBottoms, getShirts, getDresses, getPatterns } from './service/productService';
import logo from './logo.svg';
import './css/reset.css';
import './css/fonts.css';
import './css/App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      productTitle: '',
      productImage: '',
      productPrice: '',
      productDesc: '',
      cartTotal: '',
      cartItems: [],
      heroHeight: 300,
      showModal: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.clickBottoms = this.clickBottoms.bind(this);
    this.clickDresses = this.clickDresses.bind(this);
    this.clickShirts = this.clickShirts.bind(this);
    this.clickPatterns = this.clickPatterns.bind(this);
    // this.cartLooper = this.cartLooper.bind(this);
    this.randomHero = this.randomHero.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  clickBottoms() {
    getBottoms().then(response => {
      this.setState({
        products: response
      })
    })
  }

  clickShirts() {
    getShirts().then(response => {
      this.setState({
        products: response
      })
    })
  }

  clickDresses() {
    getDresses().then(response => {
      this.setState({
        products: response
      })
    })
  }

  clickPatterns() {
    getPatterns().then(response => {
      this.setState({
        products: response
      })
    })
  }

  handleClick(image, price, title, desc) {
    this.handleOpenModal();
    this.setState({
      productTitle: title,
      productImage: image,
      productPrice: price,
      productDesc: desc
    })
    console.log(this.state.productDesc)
  }

  addToCart(str, desc) {
    this.handleCloseModal();
    // this.cartLooper();
    console.log(desc + ' description grabbed')
    var cartArray = Object.assign(this.state.cartItems);
    cartArray.push(desc);
    var total = Number(this.state.cartTotal) + Number(this.state.productPrice)
    this.setState({
      cartTotal: total,
      cartItems: cartArray
    })
    console.log('cart items ' + this.state.cartItems)
  }

  // cartLooper() {
  //   var cartLoop = Object.assign(this.state.cartItems);
  //   console.log('cartLooper fired');
  //   console.log(cartLoop.length);
  //   for (var i = 0; i < cartLoop.length; i++) {
  //     document.write(cartLoop[i] + "<br/>");
  //   }
  // }

  randomHero() {
    var randHeight = Math.floor(Math.random() * (350 - 100)) + 100;
    this.setState({
      heroHeight: randHeight
    })
    console.log(randHeight, this.state.heroHeight);

  }

  // heroStyle() {
  //   this.setState({
  //   background: 'url( https://unsplash.it/' + window.innerWidth + '/' + this.state.heroHeight + '/?random) no-repeat',
  //   height: this.state.heroHeight
  //   })
  // }


  render() {

    const products = this.state.products.map((product, i) => (
      <ul key={i} className='product'>
        <h3>{product.title}</h3>
        <img onClick={() => this.handleClick(product.image, product.price, product.title, product.desc)} src={product.image} />

      </ul>
    ))


    return (
      <div className="App">
        <div className="App-topbar">
          <div><h1>Boutique Clothing</h1>
            <p> Custom Tailored Quality Fashion</p>
          </div>
          <div className="topbar-nav">
            <h3>Our Story</h3>
            <h3>Get Fitted</h3>
            <h3>Login</h3>
          </div>
        </div>
        {/* height={this.state.heroHeight} */}
        <section className="App-header" style={{ background: 'url( https://unsplash.it/' + window.innerWidth + '/' + this.state.heroHeight + '/?random) no-repeat' }} >
          {/* <div className="box"></div> */}

          <button className="btn" onClick={this.randomHero}>Randomize Hero</button>
        </section>

        <section className="content-main">
          <div><h1 className="animateText">50%&nbsp;Off&nbsp;Sale!</h1>
          </div>

          <div className="nav">

            <section className="col-l">
              <div className="item-nav">

                <div className="button-container">
                  <h2>Shirts</h2>
                  <button className="btn-shirt" onClick={() => this.clickShirts()} alt="shirts"></button>

                </div>

                <div className="button-container">
                  <h2>Bottoms</h2>
                  <button className="btn-bottom" onClick={() => this.clickBottoms()} alt="bottoms"></button>

                </div>

                <div className="button-container">
                  <h2>Dresses</h2>
                  <button className="btn-dress" onClick={() => this.clickDresses()} alt="dresses"> </button>

                </div>

                <div className="button-container">
                  <h2>Patterns</h2>
                  <button className="btn-pattern" onClick={() => this.clickPatterns()} alt="patterns"></button>

                </div>

              </div>
            </section>

            <section className="col-r">

              <div className="cart">
                <h3>Cart</h3>

                {/* {this.cartLooper} */}
                <p>{this.state.cartItems.join(', ')}</p>

                <h4>TOTAL: ${this.state.cartTotal}.00</h4>
              </div>

            </section>

          </div>


          <div className='products-container'>
            {products}
          </div>

          <div>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="Inline Styles Modal Example"
              style={{
                overlay: {
                  backgroundColor: 'rgba(0,0,0,0.5)'
                },
                content: {
                  color: '#222',
                  backgroundColor: 'rgba(255,255,255,0.95)'

                }
              }}
            >
              <button className="btn close" onClick={this.handleCloseModal}>X</button>
              {/* <div className="detail"> */}
              <Detail
                productTitle={this.state.productTitle}
                productImage={this.state.productImage}
                productPrice={this.state.productPrice}
                productDesc={this.state.productDesc}
                addToCart={this.addToCart} />
              {/* </div> */}

            </ReactModal>
          </div>

        </section>

        <footer>
              <h4>DevMountain Project by Blake Adams</h4>
        </footer>


      </div >
    );
  }
}

export default App;
