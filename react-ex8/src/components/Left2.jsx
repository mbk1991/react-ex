import Left3 from './Left3'

const Left2=(props)=>{
    return(
      <div>
        <h1>Left2: {props.number}</h1>
        <Left3 number={props.number}></Left3>
      </div>
    );
  };

export default Left2;