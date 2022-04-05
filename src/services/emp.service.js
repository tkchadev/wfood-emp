const empModel = require("../models/emp.model");
const bcrypt = require("bcryptjs");
const jwt = require("../helper/jwt");

const createAdmin = async (obj) => {
  let result = await empModel.findUsername(obj);
  if (!result.status) {
    return result;
  }
  obj.emp_password = await bcrypt.hash(obj.emp_password, 8);
  return await empModel.createEmp(obj)
};
const updateAdmin = async (obj) => {
  let result = await empModel.findUsername(obj);
  if (!result.status) {
    return result;
  }
  return await empModel.updateEmp(obj);
};
const deleteAdmin = async (obj) => {
  let result = await empModel.deleteEmp(obj)
  return result;
};
const selectAllAdmin = async (page) => {
  const itemsPerPage = 12;
  if (!page) {
    return { status: false, message: `No Page` };
  }
  let count = await empModel.selectCountAdmin();
  let result = await empModel.selectAllAdmin(page)
  if (!result.status) {
    return result;
  }

  let pageCount = Math.ceil(parseFloat(count) / itemsPerPage);
  let data = {
    status: result.status,
    message: result.message,
    result: {
      page_count: pageCount,
      page_current: parseInt(page),
      data: result.result,
    },
  };
  return data;
};
const selectAllSale = async (page) => {
  const itemsPerPage = 12;
  if (!page) {
    return { status: false, message: `No Page` };
  }
  let count = await empModel.selectCountSale()
  let result = await empModel.selectAllSale(page)
  if (!result.status) {
    return result;
  }

  let pageCount = Math.ceil(parseFloat(count) / itemsPerPage);
  let data = {
    status: result.status,
    message: result.message,
    result: {
      page_count: pageCount,
      page_current: parseInt(page),
      data: result.result,
    },
  };
  return data;
};
const selectEmpByUID = async (obj) => {
  let result = await empModel.selectEmpByUID(obj)
  return result;
};
const createSale = async (obj) => {
  let result = await empModel.findUsername(obj);
  if (!result.status) {
    return result;
  }
  obj.emp_password = await bcrypt.hash(obj.emp_password, 8);
  return await empModel.createSale(obj)
};
const updateSale = async (obj) => {
  let result = await empModel.findUsername(obj);
  if (!result.status) {
    return result;
  }
  return await empModel.updateEmp(obj);
};
const deleteSale = async (obj) => {
  let result = await empModel.deleteEmp(obj)
  return result;
};
const changeEmpPassword = async (obj) => {
  obj.emp_password = await bcrypt.hash(obj.emp_password, 8);
  return await empModel.updateEmpPassword(obj)
};
const selectAllSaleForCustomerMatch = async () => {
  return await empModel.selectAllSaleForCustomerMatch()
};

module.exports = {
  createAdmin,
  updateAdmin,
  deleteAdmin,
  selectAllAdmin,
  selectEmpByUID,
  createSale,
  updateSale,
  deleteSale,
  selectAllSale,
  changeEmpPassword,
  selectAllSaleForCustomerMatch
};
