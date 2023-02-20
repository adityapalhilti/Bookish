import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/UseAuth";
import AddBookRequest from "../../../models/AddBookRequest";
import BookModel from "../../../models/BookModel";

export const GoogleBook: React.FC<{ book : BookModel }> = (props) => {

    useAuth();
    const[title,setTitle]=useState('');
    const[author , setAuthor]=useState('');
    const [description,setDescription]=useState('');
    const [copies,setCopies]=useState(0);
    const [category ,setCategory]=useState('Category');
    const[selectedImage,setSelectedImage]=useState<any>(null);

    const[displayWarning , setDisplayWarning]=useState(false);
    const[displaySuccess , setDisplaySuccess]=useState(false);

    function categoryField(value: string) {
        setCategory(value);
    }

    function getBase64(file: any){
        let reader= new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setSelectedImage(reader.result);
        };
        reader.onerror = function(error){
            console.log('Error',error);
        }
    }

    async function submitNewBook(){
        const url =`${process.env.REACT_APP_HOST}/api/admin/add/book`;

        setCopies(1);

        if(title!=='' && author!=='' && category!=='Category' && description!=='' && copies>0){
            const book : AddBookRequest =new AddBookRequest(title,author,description,copies,category);
            book.img = selectedImage;
            const requestOptions = {
                method : 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                data:JSON.stringify(book)
            };

            const submitNewBookResponse = await axios(url,requestOptions);
            if(submitNewBookResponse.status!=200){
                throw new Error('Something went wrong!');
            }
            setTitle('');
            setAuthor('');
            setDescription('');
            setCopies(0);
            setCategory('Category');
            setSelectedImage(null);
            setDisplayWarning(false);
            setDisplaySuccess(true);
        }
        else{
            setDisplayWarning(true);
            setDisplaySuccess(false);
        }
    }

    async function handleOnClick(){
        setAuthor(`${props.book.author}`);
        setTitle(`${props.book.title}`);
        setDescription(`${props.book.description}`) ;
        submitNewBook();

    }

    return (
        <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
            {
                displaySuccess &&
                <div className="alert alert-success" role='alert'>
                    Book added Successfully
                </div>
            }
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="d-none d-lg-block">
                    {
                        props.book.img ?
                        <img src={props.book.img}
                            width='123'
                            height='196'
                            alt='Book'
                        />
                        :
                        <img src={require("../../../Images/BooksImages/bookish.png")}
                            width='123'
                            height='196'
                            alt='Book'
                        />
                    }
                    </div>
                    <div className="d-lg-none d-flex justify-content-center
                        align-items-center">
                    {
                        props.book.img ?
                        <img src={props.book.img}
                            width='123'
                            height='196'
                            alt='Book'
                        />
                        :
                        <img src={require("../../../Images/BooksImages/bookish.png")}
                            width='123'
                            height='196'
                            alt='Book'
                        />
                    }
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">
                            {props.book.author}
                        </h5>
                        <h4>
                            {props.book.title}
                        </h4>
                        <p className="card-text">
                            {props.book.description}
                        </p>
                    </div>
                </div>  
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className='col-md-3 mb-3 me-auto'>
                                <label className='form-label text-danger'> Select Category *</label>
                                <button className='form-control btn btn-secondary dropdown-toggle custom-form' type='button' 
                                    id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
                                        {category}
                                </button>
                                <ul id='addNewBookId' className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                    <li><a onClick={() => categoryField('FE')} className='dropdown-item'>Front End</a></li>
                                    <li><a onClick={() => categoryField('BE')} className='dropdown-item'>Back End</a></li>
                                    <li><a onClick={() => categoryField('Data')} className='dropdown-item'>Data</a></li>
                                    <li><a onClick={() => categoryField('DevOps')} className='dropdown-item'>DevOps</a></li>
                                </ul>
                        </div>
                       <button className="btn btn-md main-color text-white" onClick={handleOnClick}>
                            Add Book
                       </button>
                </div>    
            </div>
        </div>

    );
}