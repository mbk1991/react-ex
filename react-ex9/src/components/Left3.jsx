import {useSelector} from 'react-redux'

export default function Left3(props){

    const number = useSelector(
        (state) => {
            console.log('state', state);
            return state.number;
        }
    );

    return(
        <div>
            <h1>Left3: {number}</h1>
        </div>

    );
}