import React from "react";  
import { useEffect , useState } from "react";
import axios from 'axios';  
import { Card } from 'react-bootstrap';  
import useAuth from "../../Hook/UseAuth";
function Google() {  
    //useAuth();
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
    //const [apiKey, setApiKey] = useState("AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88")  
  
    function handleChange(event: { target: { value: any; }; }) {  
        const book = event.target.value;  
        setBook(book);  
    }  
    function handleSubmit(event: { preventDefault: () => void; }) {  
        event.preventDefault();  
        axios.get(`${process.env.REACT_APP_HOST}/api/admin/googlebooks/java`)  
            .then(data => {  
                console.log(data.data.items);  
                setResult(data.data.items);  
            })  
    }  
    return (  
        <form onSubmit={handleSubmit}>  
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />  
                    </div>  
                    <div className="ml-auto py-3">  
                        <input type="submit" value="Search" className="btn btn-danger search-btn" />  
                    </div>  
                </div>  
            </div>  
            <div className="container">  
                <div className="row">  
                    {result.map(book => (  
                        <div className="col-sm-2">  
                            <Card style={{ 'marginTop': '10px' }}>  
  
                                <Card.Img variant="top" src={require("../../Images/BooksImages/bookish.png")} alt="Book" />  
                                <Card.Body>  
                                    <h5 className="card-title">Card title</h5>  
                                    <a className="btn btn-danger">Know more</a>  
                                </Card.Body>  
                            </Card>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </form>  
  
    )  
}  
  
export default Google