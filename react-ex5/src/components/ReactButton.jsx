import './ReactButton.css';

export default function ReactButton(props){

    console.log('ReactButton props', props);


    return (<>
        <button className='reactButton'>{props.title}</button>
    </>);

}