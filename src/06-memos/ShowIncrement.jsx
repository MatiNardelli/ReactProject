
export const ShowIncrement = ({increment}) => {
    

    console.log('Me ovlvi a ejecutar =s');
  
    return (

        <button
            className="btn btn-primary"
            onClick={()=>{
                increment(5);
            }}
        >
            Incrementar
        </button>
    )
}
