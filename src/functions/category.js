import axios from "axios"

export const getCategories = async () => await axios.get(`${process.env.REACT_APP_API}/categories`)

export const getCategory = async slug => await axios.get(`${process.env.REACT_APP_API}/category/${slug}`)

export const getCategorySubs = async _id => await axios.get(`${process.env.REACT_APP_API}/category/subs/${_id}`)
