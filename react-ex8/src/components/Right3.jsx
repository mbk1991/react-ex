export default function Right3(props){
    return(
        <div>
            <h1>Right3</h1>
            <input type='button' value='+'
                onClick={
                    (e)=>{
                        props.onButton2(1);
                    }
                }
            ></input>
        </div>

    );
}