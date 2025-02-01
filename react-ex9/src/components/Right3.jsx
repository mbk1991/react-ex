import { useDispatch } from "react-redux";

export default function Right3(props){
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Right3</h1>
            <button
                onClick={function(e){
                    dispatch({ type: 'PLUS'});
                }}
            >+</button>
        </div>
    );
}