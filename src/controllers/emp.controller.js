const empServies = require("../services/emp.service");

const postEmpAdmin = async (req, res) => {
  const obj = {
    emp_username: req.body.emp_username,
    emp_password: req.body.emp_password,
    emp_name: req.body.emp_name,
    emp_phone: req.body.emp_phone,
    emp_email: req.body.emp_email,
    emp_role: 2,
  };
  const result = await empServies.createAdmin(obj);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json({});
  }
};

const putEmpAdmin = async (req, res) => {
  const obj = {
    emp_uuid: req.body.emp_uuid,
    emp_username: req.body.emp_username,
    emp_name: req.body.emp_name,
    emp_phone: req.body.emp_phone,
    emp_email: req.body.emp_email,
  };
  const result = await empServies.updateAdmin(obj);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json({});
  }
};

const delEmpAdmin = async (req, res) => {
  const obj = {
    emp_uuid: req.params.uuid,
  };
  const result = await empServies.deleteAdmin(obj)
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json({});
  }
};

const getAllAdmin = async (req, res) => {
  const page = req.query.page;
  const result = await empServies.selectAllAdmin(page);
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

const getAllSale = async (req, res) => {
  const page = req.query.page;
  const result = await empServies.selectAllSale(page);
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

const getAdminByUID = async (req, res) => {
  const obj = {
    emp_uuid: req.params.uuid,
  };
  const result = await empServies.selectEmpByUID(obj);
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

const getSaleByUID = async (req, res) => {
  const obj = {
    emp_uuid: req.params.uuid,
  };
  const result = await empServies.selectEmpByUID(obj);
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

const postEmpSale = async (req, res) => {
  const obj = {
    emp_username: req.body.emp_username,
    emp_password: req.body.emp_password,
    emp_name: req.body.emp_name,
    emp_phone: req.body.emp_phone,
    emp_email: req.body.emp_email,
    emp_role: 3,
  };
  const result = await empServies.createAdmin(obj);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json({});
  }
};

const putEmpSale = async (req, res) => {
  const obj = {
    emp_uuid: req.body.emp_uuid,
    emp_username: req.body.emp_username,
    emp_name: req.body.emp_name,
    emp_phone: req.body.emp_phone,
    emp_email: req.body.emp_email,
  };
  const result = await empServies.updateSale(obj)
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json({});
  }
};

const delEmpSale = async (req, res) => {
  const obj = {
    emp_uuid: req.params.uuid,
  };
  const result = await empServies.deleteSale(obj)
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json({});
  }
};

const putEmpPassword = async (req, res) => {
  const obj = {
    emp_uuid: req.body.emp_uuid,
    emp_password: req.body.emp_password,
  };
  const result = await empServies.changeEmpPassword(obj)
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json({});
  }
};

const getAllSaleForCustomerMatch = async (req, res) => {
  const result = await empServies.selectAllSaleForCustomerMatch()
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};


module.exports = {
  postEmpAdmin,
  putEmpAdmin,
  delEmpAdmin,
  getAllAdmin,
  getAdminByUID,
  getSaleByUID,
  postEmpSale,
  putEmpSale,
  delEmpSale,
  getAllSale,
  putEmpPassword,
  getAllSaleForCustomerMatch
};
