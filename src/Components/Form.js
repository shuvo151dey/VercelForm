import React from 'react';

const Form = () => {
    return(
        <React.Fragment>
            <form method="post" action="https://node-js-google-sheet-api.vercel.app/api/index">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                <label htmlFor="phone" name="phone">Phone No</label> 
                <input type="tel" name="phone" />
                <label htmlFor="address" name="address">Aadhar</label>
                <input type="text" name="address" />
                <button type="submit" name="submit">Submit</button>
            </form>
        </React.Fragment>
    );
}

export default Form;
