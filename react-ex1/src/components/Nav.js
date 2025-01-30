export default function Nav(props){
    const list = [];
    let i = 1;
    for(const s of props.lists){
      list.push(
      <li key={s.id}><a id={s.id} href={"/read/" + i++} onClick={(e)=>{
                  e.preventDefault();
                  props.onChangeMode(e.target.id);
                }}>{s.title}</a></li>
                );
    }
    return(
      <nav>
      <ol>
        {list}
      </ol>
     </nav>
    );
  }