import React, { useState } from "react";


function TextArea(props) {

    const [text, setText] = useState("");
    const [charcaterCount, setCharcaterCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [textPreview, setTextPreview] = useState("");
    const [searchText, setSearchText] = useState("");
    
    const handleUpClick = (e) => {
        let newText = text.toUpperCase();
        setText(newText);
        setTextPreview(newText);
        props.showAlert("Text case changed to Uppercase");
    }

    const handleLowClick = (e) => {
        let newText = text.toLowerCase();
        setText(newText);
        setTextPreview(newText);
        props.showAlert("Text case changed to Lowercase");
    }

    const handleCopyClick = (e) => {
        let copyText = document.getElementById('textarea');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied to clipboard");
    }

    const handleClearText = (e) => {
        setText("");
        setTextPreview("");
        setCharcaterCount(0);
        setWordCount(0);
        props.showAlert("Text cleared successfully");
    }

    const handleExtraSpace = (e) => {
        let noSpaceText = text.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
        setText(noSpaceText);
        props.showAlert("Extra spaces have been removed");
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
        setCharcaterCount(e.target.value.length);
        setTextPreview(e.target.value);
        let words = e.target.value.split(/\s+/).length-1;
        setWordCount(words);
    }

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    }

    const handleSearch = (e) => {
        let preview = textPreview;
        const escapedSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedSearchText, 'gi');
        const highlightedText = preview.replace(regex, (match) => `<span style="background-color: yellow;">${match}</span>`);
        document.getElementById('output').innerHTML = highlightedText;
    }

    const handleCancelSearch = (e) => {
        document.getElementById('output').innerHTML = textPreview;
    }

    return (
        <>
        <div className="container">
            <h1 className="my-4">{props.title}</h1>
            <textarea className="form-control my-4" id="textarea" value={text} onChange={handleOnChange} aria-label="With textarea" rows="8"></textarea>
            <button type="button" className="btn btn-primary m-2" onClick={handleUpClick}>Uppercase</button>
            <button type="button" className="btn btn-primary m-2" onClick={handleLowClick}>Lowercase</button>
            <button type="button" className="btn btn-primary m-2" onClick={handleCopyClick}>Copy to Clipboard</button>
            <button type="button" className="btn btn-primary m-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button type="button" className="btn btn-danger m-2" onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="container">
            {!charcaterCount===0?<h1>Your Text Summary</h1>:""}
            {!charcaterCount===0?<p>{charcaterCount} characters</p>:""}
            {!wordCount===0?<p>{wordCount} words</p>:""}
            <hr />
            {!textPreview===""?<h1>Preview:</h1>:""}
            {!textPreview===""?<p id="output">{textPreview}</p>:""}
            {!textPreview===""?
            <>
            <input type="text" className="form-control w-25 d-inline" id="" onChange={handleSearchText}/>
            <button type="button" className="btn btn-primary mx-4" onClick={handleSearch}>Search</button>
            <button type="button" className="btn btn-danger" onClick={handleCancelSearch}>Cancel</button>
            </>
            :""}

            
        </div>
        </>
    );
}

export default TextArea;