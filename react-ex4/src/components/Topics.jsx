import {Routes, Route, NavLink} from 'react-router-dom';
import Topic from './Topic.jsx'

export default function Topics(){
    const contents=[ //ajax data.
        {id:1 ,title:'HTML' ,description: 'HTML is ...' },
        {id:2 ,title:'CSS' ,description: 'CSS is ...' },
        {id:3 ,title:'JS' ,description: 'JS is ...' },
    ];  
    let lis = [];
    for (let i=0; i<contents.length; i++){
        lis.push(
            <li key={contents[i].id}>
                <NavLink to={'/topic/' + contents[i].id}>{contents[i].title}</NavLink>
            </li>
        );
    }
    
    return(
        <>
        <ul>
            {lis}
        </ul>

        <Routes>
            {/* <Route path="/" element={'Topic'} /> */}
            <Route path='/:topic_id' element={<Topic contents={contents}/>} />
            {/* <Route path="/*" element={'404 Not Found!!!'} /> */}
        </Routes>
        </>
    );
}