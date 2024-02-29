import ReactCard from "./Components/Card"


function App() {
  
  const datas = [
    {
      cardName: "Free",
      price:"$0/Month"
    },
    {
      cardName: "plus",
      price:"$9/Month"
    },
    {
      cardName: "Pro",
      price:"$49/Month"
    },
  ]

  return ( 
    <div className="container mt-5 px-4 py-2 bg-primary  bg-gradient">
        <div className="row">
            <div className="col p-3 d-flex justify-content-center bg-secondary">
                {  datas.map((data, index)=>(
                <ReactCard key={index} cardName={data.cardName} price={data.price}
                />)) }
            </div>
        </div>
    </div>
    )
}

export default App
