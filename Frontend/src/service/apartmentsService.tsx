import axios from "axios";
import { base_url } from "../Utils/config";

export const addNewApartment = async (user) => {
  try {
    const response = await axios.post(`${base_url}addNewApartment`, user);
    return response.data;
  } catch (error) {
    console.error("Error adding apartment:", error);
    throw error;
  }
};

export const getAllApartments = async (data) => {
  try {
    const response = await axios.post(`${base_url}getAllApartments`, data);
    return response.data;
  } catch (error) {
    console.error("Error fetching apartments:", error);
    throw error;
  }
};
