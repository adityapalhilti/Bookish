import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookModel from "../../models/BookModel";

export const CheckoutAndReviewBox : React.FC<{book:BookModel | undefined , mobile : boolean }> = (props) => {

    const [quantity,setQuantity]=useState<number>(0);
    const[remaining ,setRemaining]=useState<number>(0);


    
    function refreshPage() {
        window.location.reload();
      }

    async function decreaseQuantity() {
        const url=`http://localhost:8080/api/admin/decrease/book/quantity/?bookId=${props.book?.id}`;

        const requestOptions = {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            }
        };
        const quantityUpdateResponse = await fetch(url , requestOptions);
        if(!quantityUpdateResponse.ok){
            throw new Error("Something went wrong!");
        }

        setQuantity(quantity-1);
        setRemaining(remaining-1);
    }

    return(
        <div className={props.mobile ? 'card-d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className="card-body container">
                <div className="mt-3">
                    
                    {props.book &&props.book.copiesAvailable && props.book.copiesAvailable>0 ?
                        <h4 className="text-success">Available</h4>
                        :
                        <h4 className="text-danger">Wait List</h4>                        
                    }
                    <div className="row">
                        <p className="col-6 lead">
                            <b>{props.book?.copies} </b>
                            Copies
                        </p>
                        
                    </div>

                </div>
                <button className='btn btn-success btn-lg' onClick={ () => {decreaseQuantity();  refreshPage();}}>Checkout</button>
                <hr/>
                <p className="mt-3 text-main-color">
                    Limited Stock.<br/>
                </p>
            </div>

        </div>
    );
}