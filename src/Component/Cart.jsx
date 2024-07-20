import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import {
  allProductDelete,
  decrement,
  deleteCart,
  increment,
} from "../features/cartSlice";

export default function Cart() {
  const CartValue = useSelector((state) => state.AllCart.cart);

  const dispatch = useDispatch();

  return (
    <section className="h-100">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>
              <div>
                <p className="mb-0">Cart Items:-{CartValue.length}</p>
              </div>
            </div>

            {CartValue.map((value) => (
              <>
                <MDBCard className="rounded-3 mb-4">
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage
                          className="rounded-3"
                          fluid
                          src={value.image}
                          alt=" Product image"
                        />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3">
                        <p className="lead fw-normal mb-2">{value.title}</p>
                        <p>
                          <span className="text-muted">Rating: </span>
                          {value.rating && value.rating.rate}{" "}
                        </p>
                      </MDBCol>
                      <MDBCol
                        md="3"
                        lg="3"
                        xl="2"
                        className="d-flex align-items-center justify-content-around"
                      >
                        <MDBBtn
                          color="link"
                          className="px-2"
                        >
                          <MDBIcon fas icon="minus" onClick={() => {
                            dispatch(decrement());
                          }} />
                        </MDBBtn>

                        <MDBInput
                          min={0}
                          defaultValue={value.quantity}
                          type="number"
                          size="sm"
                        />

                        <MDBBtn color="link" className="px-2">
                          <MDBIcon
                            fas
                            icon="plus"
                            onClick={() => {
                              dispatch(increment());
                            }}
                          />
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                        <MDBTypography tag="h5" className="mb-0">
                          ${value.price}
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol md="1" lg="1" xl="1" className="text-end">
                        <a
                          href="#!"
                          className="text-danger"
                          onClick={() => {
                            dispatch(deleteCart(value));
                          }}
                        >
                          <MDBIcon fas icon="trash text-danger" size="lg" />
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </>
            ))}

            <MDBCard>
              <MDBCardBody>
                <MDBBtn
                  className="ms-3"
                  color="warning"
                  block
                  size="lg"
                  onClick={() => {
                    dispatch(allProductDelete());
                  }}
                >
                  Remove All Products
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
