import { Link } from "react-router-dom";


const WandItem = (props) => {
    const wand = props.wand;
    return ( 
        <Link to={`/wandList/${wand.slug}`}>
        <div className="card" background-color="burlywood"  >
            <img alt={wand.core} src={wand.imageUrl}/>
            <p>Wand Name: {wand.core}</p>
            <p className="wand-type">Wand Type: {wand.wood}</p>
            <p className="wand-length">Wand Length: {wand.length}</p>
            
        </div>
 </Link> 
         )
}

export default WandItem;


 

//  <div className="col-lg-4 col-md-6">
//                 <div className="single-service wow fadeInUp" data-wow-delay=".2s">
//                     <center>
//                         <Link to={`/wandList`}>
//                             <div className="icon">
//                                 <img src={wand.imageUrl} alt=""/>
//                             </div>
//                         </Link>
//                     </center>

//                     <div className="content">
//                         <h3>{wand.core}</h3>
//                     </div>
//                 </div>
//             </div>

