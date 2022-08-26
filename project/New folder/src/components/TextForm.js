import React, { useState } from 'react'


export default function TextForm(props) {

    const handleonchanhge = (e) => {
        console.log("hancdle on change");
        setText(e.target.value)
    }
    const handleUpclick = () => {
        console.log("hancdle on click");
        let amit = text.toUpperCase();
        setText(amit)
    }
    const handleUp2click = () => {
        console.log("hancdle on click");
        let amit = text.toLowerCase();
        setText(amit)
    }
    const handleUp3click = () => {
        console.log("hancdle on click");
        let amit = " ";
        setText(amit)
    }
    // const search=()=>{
    //     let amit = " "

    // }

    const [text, setText] = useState("enter your text");
    // text = "enter here" wrong way to set text
    // setText("enter here");
    return (
        <>

            <div>
                <h1>{props.heading}</h1>
                <div  >
                    {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleonchanhge} id="exampleFormControlTextarea1" rows="9"></textarea>
                </div>

                <button type="button" className="btn btn-dark my-2" onClick={handleUpclick}>convert to uppercase</button>

                <button type="button" className="btn btn-secondary mx-3" onClick={handleUp2click}>convert to lowercase</button>
                <button type="button" className="btn btn-danger mx-3" onClick={handleUp3click}>delete</button>
            </div>
            <div className="container my-3">
                <h1 >Text summary</h1>
                <p>{text.split(" ").length} words and no of characters are {text.length}</p>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit" onClick={search} value>Search</button>
                </form>
                <textarea className="form-control" value={text} onChange={handleonchanhge} id="exampleFormControlTextarea1" rows="3"></textarea> */}

            </div>

        </>
    )
}
