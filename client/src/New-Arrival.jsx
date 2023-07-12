import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import card from "./card.json";
import "./Product.css";
export function New_Arrival() {
    // const [data, setData] = useState(card);
    const [show, setShow] = useState(false);
    // const handleOpen = () => setShow(true);
    const handleClose = () => setShow(!show);
    const [view, setView] = useState(null);

    // const
    return (
        <>
            <div className="our_product">
                <div className="row">
                    {card.map((v) => {
                        return (
                            <>
                                <div className="card_div" key={v.id}>
                                    <div className="card">
                                        <img src={v.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title">Category : {v.category}</h4>
                                            <h5 className="card-title">Brand : {v.brand}</h5>
                                            <p>Price : {v.price} RS/- </p>
                                            <p>{v.discription}</p>
                                            <Button
                                                className="btn btn-dark"
                                                onClick={() => {
                                                    setShow(true);
                                                    setView(v);
                                                }}
                                            >
                                                View Details
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                    {view && (
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            animation={true}
                        >
                            <Modal.Header closeButton>Product Info</Modal.Header>
                            <Modal.Body>
                                <h4 className="card-title">{view.category}</h4>
                                <h5 className="card-title">{view.title}</h5>
                                <p>Price : MRP {view.price} RS/- </p>
                                <p className="card-text">Two Wheeler Batter Discription</p>
                                <p>Dealer Details :</p>
                                <p>Delaer Name : {view.dealer}</p>
                                <p>Dealer Contact : {view.contact}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    )}
                </div>
            </div>
        </>
    );
}
