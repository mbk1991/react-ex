import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Article from './components/Article.js';
import Create from './components/Create.js';
import Update from './components/Update.js';
import UpdateForm from './components/UpdateForm.js';
import {useState} from 'react';

function App() {

  const lists = [
    {id:1, title:'HTML', body:'html is ...'},
    {id:2, title:'CSS', body:'css is ...'},
    {id:3, title:'JS', body:'js is ...'}
  ];

  //set state
  const [_mode, setMode] = useState('WELCOME');
  const [_id, setId] = useState(1);
  const [_lists, setLists] = useState(lists);

  //set content
  let content = null;
  let deleteControl = null;
  switch(_mode){
    case 'WELCOME':
      content = <Article title="Welcome" body="Hello, Web"></Article>
      break;

    case 'READ':
      let _title, _body = '';
      for(let i=0; i<_lists.length; i++){
          if(_lists[i].id === Number(_id)){
            _title =  _lists[i].title;
            _body = _lists[i].body; 
          }
      }
     
      content = <Article title={_title} body={_body}></Article>

      deleteControl = <button onClick={function(){
        let new_lists = [..._lists];
        let del_idx;
        for(let i=0; i<new_lists.length; i++){
          if(new_lists[i].id === Number(_id)){
              del_idx = i;
          }
        }
        console.log('del_idx', del_idx);
        new_lists.splice(del_idx,1);
        setLists(new_lists);
        setMode('WELCOME');
      }}>Delete</button>
      break;

    case 'CREATE':
      content = <Create onCreate={function(title, body){
          let c = {};
          c.id = _lists.length + 1;
          c.title = title;
          c.body = body;

          setMode('READ');
          setId(c.id);

          let copy = [..._lists];
          copy.push(c);
          setLists(copy);

      }}></Create>
      break;

    case 'UPDATE':
      content = <Update lists={_lists} onUpdate={function(id){
      setMode('UPDATE_FORM');
      setId(id);
      }}></Update>
      break;

    case 'UPDATE_FORM':
      content = <UpdateForm id={_id} lists={_lists} onUpdateForm={function(title, body){

      let new_lists = [..._lists];

      for(let i=0; i<new_lists.length; i++){
        if(new_lists[i].id === _id){
          new_lists[i].title = title;
          new_lists[i].body = body;

          setLists(new_lists);
          setMode('READ');
          break;
        }
      }
      }}></UpdateForm>
      break;
    default:
      break;
  }


  return (
    <div>
      <Header title="WEB" onChangeMode={function(){
        setMode('WELCOME');
      }}></Header>
      <Nav lists={_lists} onChangeMode={function(id){
        setMode('READ');
        setId(id);
      }}></Nav>
      {content}

      <ul>
        <li>
          <a href="/create" onClick={(e)=>{
            e.preventDefault();
            setMode("CREATE");
          }}><h1>Create</h1></a>
        </li>
        <li>
          <a href="/upadate" onClick={(e)=>{
            e.preventDefault();
            setMode("UPDATE");
          }}><h1>Update</h1></a>
        </li>
        <li>
          {deleteControl}
        </li>
      </ul>



      
    </div>
  );
}
export default App;
