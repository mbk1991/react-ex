export default function Create(props){

    return(
        <article>
            <h2>Create</h2>
            <form id="createForm" onSubmit={e=>{
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                props.onCreate(title, body);

            }}>
                <p><input id="inputTitle" name="title" type="text" placeholder="input title"/></p>
                <p><textarea id="inputBody" name="body" type="text" placeholder="input body"/></p>
                <p><input type="submit" value="create"/></p>
            </form>
        </article>


    );
}