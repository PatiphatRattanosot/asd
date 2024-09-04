import api from "./api";

const API_URL = "/api/v1/financial";

const getAllFinancial = () => {
    return api.get(API_URL);
};

const getByFinancialId = (id) => {
    return api.get(`${API_URL}/${id}`);
};

const FinancialService = {
    getAllFinancial,
    getByFinancialId,
};

export default FinancialService;
