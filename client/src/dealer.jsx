
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { DEALERLIST } from "./dealersList";

function Bdealer() {
    const [contacts, setContacts] = useState(DEALERLIST)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [addFormData, setAddFormData] = useState({
        Name: '',
        Phone: '',
        Rating: '',
        active_products: '',
        Actions: '',
        Sno: '',
        Email: ''

    })
    const AddRecord = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value
        const newData = { ...addFormData }
        newData[fieldName] = fieldValue
        setAddFormData(newData)

    }
    const AddRecordSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            Name: addFormData.Name,
            Phone: addFormData.Phone,
            Rating: addFormData.Rating,
            active_products: addFormData.active_products,
            Actions: addFormData.Actions,
            Sno: addFormData.Sno,
            Email: addFormData.Email
        }
        const newContacts = [...contacts, newContact]
        setContacts(newContacts)
        handleClose();


    }

    return (

        <div className="container ">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row ">

                    <div className="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search Product" aria-label="Search" />

                            </form>
                        </div>
                    </div>
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>Product Details</b></h2></div>
                    <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                        <Button variant="primary" onClick={handleShow}>
                            Add New Product
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="table-responsive " >
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>

                                    <th>Name </th>
                                    <th>Phone</th>
                                    <th>Rating </th>
                                    <th>active products </th>
                                    <th>Actions</th>
                                    <th>Sno</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((dealers, i) => {

                                    return (
                                        < tr >

                                            {/* <td >{dealers.SNo}</td> */}
                                            <td   >{dealers.Name}</td>
                                            <td   >{dealers.Phone}</td>
                                            <td  >{dealers.Rating}</td>
                                            <td  >{dealers.active_products}</td>
                                            <td  > {dealers.Actions}</td>
                                            <td  > {dealers.Sno}</td>
                                            <td  >{dealers.Email}</td>

                                            <td style={{ display: "flex", alignItems: "center" }}>
                                                {/* <a href="#" className="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i className="material-icons">&#xE417;</i></a> */}
                                                <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons" style={{ padding: "2px", marginRight: "4px", color: "white", background: "blue", borderRadius: "4px" }}>&#xE254;</i></a>
                                                <a href="#" className="delete" title="Delete" data-toggle="tooltip" style={{ color: "white", padding: " 0 2px ", background: "red", marginBottom: "2px", borderRadius: "6px", objectFit: "contain" }}><i className="material-icons">&#xE872;</i></a>

                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>


                        </table>
                    </div>
                </div>
                <div className="model_box">
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        animation={true}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Record</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={AddRecordSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"
                                        onChange={AddRecord}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="number"
                                        name="Phone"
                                        className="form-control" id="998835720" aria-describedby="emailHelp" placeholder="Enter Phone"
                                        onChange={AddRecord}

                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text"
                                        name="Rating"
                                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Rating"
                                        onChange={AddRecord}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text"
                                        name="active_products"
                                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Active no. of Products"
                                        onChange={AddRecord}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text"
                                        name="Actions"
                                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Actions"
                                        onChange={AddRecord}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="number"
                                        name="Sno"
                                        className="form-control" id="exampleInputPassword1" placeholder="Enter Sno."
                                        onChange={AddRecord}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="email"
                                        name="Email"
                                        className="form-control" id="exampleInputPassword1" placeholder="Enter email"
                                        onChange={AddRecord}
                                        required

                                    />
                                </div>

                                <input type="submit" className="btn btn-success mt-4" value="ADD RECORD" />
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>

                </div>
            </div >
        </div >
    );
}




export default Bdealer