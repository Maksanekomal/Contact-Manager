
import axios from "axios";
import { ContactType } from "../_types/contact";

const API_URL = "http://localhost:3001";

export const getContacts = async (userId: string) => {
    const response  = axios.get(`${API_URL}/contacts?userId=${userId}`);
    return (await response).data;

};

export const getContactsById = async (Id: string) => {
    const response  = axios.get(`${API_URL}/contacts/${Id}`);
    return (await response).data;
};

export const createContact = async (contact: ContactType) => {
    const response  = axios.post(`${API_URL}/contacts`, contact);
    return (await response).data;

}

export const updateContacts = async (Id: string, contact: ContactType) => {
    const response  = axios.put(`${API_URL}/contacts/${Id}`, contact);
    return (await response).data;

}
export const deleteContacts = async (Id: string) => {
    const response  = axios.delete(`${API_URL}/contacts/${Id}`);
    return (await response).data;

}