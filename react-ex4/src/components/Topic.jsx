import {useParams} from 'react-router-dom'

export default function Topic(props){
    let params = useParams();
    const topic_id = params.topic_id;

    let list = [...props.contents];
    let selected_topic = {};
    for(let i=0; i<list.length; i++){
        if(list[i].id === Number(topic_id)){
            selected_topic.title = list[i].title;
            selected_topic.description = list[i].description;
            break;
        }
    }
    return(
        <> 
            <h3>Title: {selected_topic.title}</h3>
            <h3>Description: {selected_topic.description}</h3>
        
        </>
    );
}