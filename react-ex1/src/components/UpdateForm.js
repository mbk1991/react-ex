export default function UpdateForm(props){

    let thisId=props.id;
    let thisTitle, thisBody;
    for(let i=0; i<props.lists.length; i++){
        if(Number(thisId) === props.lists[i].id){
            thisTitle = props.lists[i].title;
            thisBody = props.lists[i].body;
        }
    }


    return (
        <article>
            <h2>Update : {thisTitle}</h2>
            <form id='updateForm' onSubmit={function(e){
                e.preventDefault();
                let title = e.target.title.value;
                let body = e.target.body.value;
                props.onUpdateForm(title, body);
            }}>
                <p><input name='title' defaultValue={thisTitle} placeholder={thisTitle}/></p>
                <p><textarea name='body' defaultValue={thisBody} placeholder={thisBody}/></p>
                <p><input type='submit' value='Update'/></p>
            </form>
        </article>
    );
}