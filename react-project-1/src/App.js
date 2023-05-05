import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          tittle: 'Стол',
          img: 'table.jpg',
          desc: 'Всё для вас. Эта мебель для вашего комфорта',
          category: 'tables',
          price: '9999.99'
        },
        {
          id: 2,
          tittle: 'Стул',
          img: 'chair.jpg',
          desc: 'Всё для вас. Эта мебель для вашего комфорта',
          category: 'chairs',
          price: '5999.99'
        },
        {
          id: 3,
          tittle: 'Диван',
          img: 'sofa.jpg',
          desc: 'Всё для вас. Эта мебель для вашего комфорта',
          category: 'sofas',
          price: '21999.99'
        },
        {
          id: 4,
          tittle: 'Лампа',
          img: 'lamp.jpg',
          desc: 'Всё для вас. Эта мебель для вашего комфорта',
          category: 'lamps',
          price: '3999.99'
        },
        {
          id: 5,
          tittle: 'Кресло',
          img: 'armchair.jpg',
          desc: 'Всё для вас. Эта мебель для вашего комфорта',
          category: 'armchairs',
          price: '7999.99'
        },
        {
          id: 6,
          tittle: 'Барный стул',
          img: 'stool.jpg',
          desc: 'Всё для вас. Эта мебель для вашего комфорта',
          category: 'stools',
          price: '2999.99'
        },
      ],
      showFullItem: false,
      fullItem:{}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd = {this.addToOrder}/>
        
        {this.state.showFullItem && <ShowFullItem onAdd = {this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category ==='all') {
      this.setState({currentItems: this.state.items})
      return
    }
    
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
    
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
