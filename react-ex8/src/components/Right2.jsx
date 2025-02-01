import Right3 from './Right3'

export default function Right2(props){
    return(
        <div>
            <h1>Right2</h1>
            <Right3 onButton2={
                function(_number){
                    props.onButton1(_number);
                }
            }></Right3>
        </div>

    );
}