import Right2 from './Right2'

export default function Right1(props){
    return(
        <div>
            <h1>Right1</h1>
            <Right2 onButton1={function(_number){
              props.onButton(_number);
            }
            }></Right2>
        </div>

    );
}