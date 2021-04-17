

function Bill(props) {
    
    return (
        <div>
        <label className='label' for= "bill">How much was your bill?</label>
        <input id= "bill" className= "input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type= "number" name= "bill" 
         value={props.bill}
         onChange= {(e)=> props.setBill(e.target.value)} />
        </div>
    );
    }
    export default Bill;