import axios from "axios";
import { server } from "../../server";

//create-product
export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "productCreateRequest",
    });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config,
    );
    dispatch({
      type: "productCreateSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "productCreateFail",
      payload: error.response.data.message,
    });
  }
};

//get allProducts
export const getAllProducts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductRequest",
    });
    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`,
    );

    dispatch({
      type: "getAllProductSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductFail",
      payload: error.response.data.message,
    });
  }
};

//delete products

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      { withCredentials: true },
    );
    dispatch({
      type: "deleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductFail",
      payload: error.response.data.message,
    });
  }
};
