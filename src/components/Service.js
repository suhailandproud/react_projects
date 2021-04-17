function Service(props) {
    return (
<div>
    <label className='label ' for= "service">How was your service?</label>
    <select className= 'select -mr-1 ml-2 h-5 w-5' id= "service" name= "selectlist" value={props.service}
     onChange= {(e)=> props.setService(e.target.value)}    >
            <option value= ".3" selected >30% - Outstanding</option>
            <option value= ".2">20% - Good</option>
            <option value= ".1">10% - Satisfactory</option>
    </select>

    </div>
    
    );
    }
    export default Service;
