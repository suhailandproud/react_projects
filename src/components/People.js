function People(props) {
    return (
        <div>
        <label className='label' for= "members" >How many people are sharing the bill?</label>
        <input id= "members" className= "input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type= "number" name= "members" 
         value={props.people}
         onChange= {(e)=> props.setPeople(e.target.value)}
         /><p className= "people">people</p>
        </div>
    );
    }
    export default People;