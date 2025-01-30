export default function Update(props){
    console.log("update", props);

    const list = [];
    for(let i=0; i<props.lists.length; i++){
        list.push(
            <li key={props.lists[i].id}>
                <a href={"/update/" + props.lists[i].id}
                    onClick={e=>{
                        e.preventDefault();
                        props.onUpdate(props.lists[i].id);
                    }}
                >{props.lists[i].title}</a>
            
            </li>
        );
    }
    console.log("list",list);
    return(
        <div>
            <h2>Update</h2>
            <ol>
                {list}
            </ol>
        </div>
    );



}