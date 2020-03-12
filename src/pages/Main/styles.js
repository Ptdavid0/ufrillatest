import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    color: cornflowerblue;
    padding: 30px;
    margin: 80px auto;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    svg {
        margin-right: 10px;
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
        color: black;
    }
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit',
})`
    background-color: cornflowerblue;
    padding: 0 15px;
    border: 0;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        margin-right: 0;
    }
`;
