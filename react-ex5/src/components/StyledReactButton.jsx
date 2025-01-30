import styled from 'styled-components';


const ButtonComponent = props => {

    console.log('ButtonComponent props', props);


    return (
        <>
        <button className={props.className}>{props.title}</button>

        <div className={props.className}>{'컴포넌트 내에 태그가 여러개 있으면 어떻게 하지/'}</div>
        </>
    );
};

const StyledReactComponent = styled(ButtonComponent)`
    font-size: 50px;
    color: pink;
    background-color: black;

`
export default StyledReactComponent;