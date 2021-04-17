function Calculate( props) {
    return (
        <div>
        <button className= "button py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75" onClick= {props.tipCalculation}>CALCULATE!</button>
    
       </div>
    );
    }
    export default Calculate;