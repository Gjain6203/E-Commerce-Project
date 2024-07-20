import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addWishList } from "../features/wishSlice";
import { addToCart } from "../features/cartSlice";

function SingleProduct() {
  const [SingleProduct, SetSingleProduct] = useState([]);

  const dispatch = useDispatch()

  const UserId = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${UserId.id}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        SetSingleProduct(data);
      });
  });

  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center ">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <MDBCardImage
                src={SingleProduct.image}
                fluid
                className="w-100"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <a href="#!" className="text-dark">
                      {SingleProduct.title}
                    </a>
                  </p>
                </div>
                <div>
                  <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                  </div>
                  <p className="small text-muted">
                    Rated {SingleProduct.rating && SingleProduct.rating.rate}/5
                  </p>
                </div>
              </div>
            </MDBCardBody>
            <hr className="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <p>
                  <a href="#!" className="text-dark">
                    ${SingleProduct.price}
                  </a>
                </p>
              </div>
              <p className="small text-muted">VISA Platinum</p>
            </MDBCardBody>
            <hr className="my-0" />
            <p className="small text-muted p-2">
              {" "}
              Product Description:-{SingleProduct.description}
            </p>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                <a href="#!" className="text-dark fw-bold">
                  <MDBBtn onClick={()=>{dispatch(addWishList(SingleProduct))}}>WishList</MDBBtn>
                </a>
                <MDBBtn color="success" onClick={()=>{dispatch(addToCart(SingleProduct))}}>Add To Cart</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SingleProduct;
