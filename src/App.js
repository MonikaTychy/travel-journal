import './App.css';
import Header from './components/Header'
import data from './data'
import Card from './components/Card'

export default function App() {
  const cardData = data.map((item) => {
    return <Card {...item} />
  })

  return (
    <div className="App">
      <Header />
      {cardData}
    </div>
  );
}


