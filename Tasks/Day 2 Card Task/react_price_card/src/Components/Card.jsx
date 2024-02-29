import "../App.css"

export default function ReactCard(props) {

    const conbg = { }
   

  return (
    <div className="card">
        <div className="card-header bg-white">
            <div className="cart-text d-flex justify-content-center text-secondary"> {props.cardName} </div>
            <div className="card-title d-flex justify-content-center"><h3>{props.price}</h3></div>
        </div>
        <div className="card-body d-flex justify-content-center">
            <ul className="list-item" style={conbg}>
                <li>Single User</li>
                <li>50GB Storage</li>
                <li>Unlimited Public Projects</li>
                <li>Community Access</li>
                <li>Unlimited Private Projects</li>
                <li>Dedicated Phone Support</li>
                <li>Free Subdomain</li>
                <li>Monthly Status Reports</li>
            </ul>
        </div>                    
        <div className="card-footed">
            <div className="col mb-3 d-flex justify-content-center">
                <button className="btn btn-primary"  type="submit">Button</button>
            </div>
        </div>  
    </div>
  )
}

                    