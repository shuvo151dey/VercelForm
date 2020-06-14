import React, { useRef } from 'react';

const Form = () => {
    const nameInputRef = useRef();
    const phoneInputRef = useRef();
    const addressInputRef = useRef();
    const submitHandler = async (event) => {
        event.preventDefault();
        const nameInput = nameInputRef.current.value;
        const phoneInput = phoneInputRef.current.value;
        const addressInput = addressInputRef.current.value;
        await fetch('/api/updateSheet/',{
            method: 'POST',
            body: JSON.stringify({
                name: nameInput,
                phone: phoneInput,
                address: addressInput
            })
        });
        nameInputRef.current.value = '';
        phoneInputRef.current.value = '';
        addressInputRef.current.value = '';
    };
    return(
        <React.Fragment>
            <form method="post" onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" ref={nameInputRef}/>
                <label htmlFor="phone" name="phone">Phone No</label> 
                <input type="tel" name="phone" ref={phoneInputRef}/>
                <label htmlFor="address" name="address">Aadhar</label>
                <input type="text" name="address" ref={addressInputRef}/>
                <button type="submit" name="submit">Submit</button>
            </form>
        </React.Fragment>
    );
}

export default Form;
