const { pgDB } = require("../configs/db.connect");

const findUsername = async (obj) => {
  sql = "SELECT emp_uuid FROM user_emp WHERE emp_username=${emp_username} AND is_deleted != 99";

  try {
    const result = await pgDB.query(sql, obj);
    if (result[0] == undefined || obj.emp_uuid == result[0].emp_uuid) {
      data = {
        status: true,
        message: ``,
        result: [],
      };
    } else {
      data = {
        status: false,
        message: `ชื่อผู้ใช้งานนี้ถูกใช้แล้ว`,
        result: [],
      };
    }

    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const createEmp = async (obj) => {
  sql = "INSERT INTO user_emp(${this:name}) VALUES(${this:csv}) RETURNING id";
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        message: `Create Success`,
        result: [],
      };
    } else {
      data = {
        status: false,
        message: `Unsuccess`,
        result: [],
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const updateEmp = async (obj) => {
  sql = 'UPDATE user_emp SET emp_username=${emp_username},emp_name=${emp_name},emp_phone=${emp_phone},emp_email=${emp_email} WHERE emp_uuid=${emp_uuid} RETURNING *';
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        message: `Update Success`,
        result: [],
      };
    } else {
      data = {
        status: false,
        message: `Unsuccess`,
        result: [],
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const deleteEmp = async (obj) => {
  sql = 'UPDATE user_emp SET is_deleted=99 WHERE emp_uuid=${emp_uuid} RETURNING *';
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        message: `Delete Success`,
        result: [],
      };
    } else {
      data = {
        status: false,
        message: `Unsuccess`,
        result: [],
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const selectAllAdmin = async (page) => {
  const itemsPerPage = 12;
  const offset = (parseInt(page) - 1) * itemsPerPage;
  sql =
    `SELECT emp_uuid,emp_username,emp_name FROM user_emp WHERE emp_role = 2 AND is_deleted != 99 ORDER BY emp_username ASC LIMIT ${itemsPerPage} OFFSET ${offset}`;
  try {
    const result = await pgDB.query(sql);
    data = {
      status: true,
      message: `Success`,
      result: result,
    };
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const selectCountAdmin = async (page) => {
  sql = `SELECT COUNT(*) FROM user_emp WHERE emp_role = 2 AND is_deleted != 99`;
  let count = await pgDB.query(sql);
  return count[0].count;
};

const selectEmpByUID = async (obj) => {
  sql =
    "SELECT emp_uuid,emp_username,emp_name,emp_phone,emp_email FROM user_emp WHERE emp_uuid = ${emp_uuid} AND is_deleted != 99";
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        message: `Success`,
        result: result[0],
      };
    } else {
      data = {
        status: false,
        message: `Not Found`,
        result: result,
      };
    }

    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const selectAllSale = async (page) => {
  const itemsPerPage = 12;
  const offset = (parseInt(page) - 1) * itemsPerPage;
  sql =
    `SELECT emp_uuid,emp_username,emp_name FROM user_emp WHERE emp_role = 3 AND is_deleted != 99 ORDER BY emp_username ASC LIMIT ${itemsPerPage} OFFSET ${offset}`;
  try {
    const result = await pgDB.query(sql);
    data = {
      status: true,
      message: `Success`,
      result: result,
    };
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const selectAllSaleForCustomerMatch = async () => {
  
  sql =
    `SELECT id,emp_username,emp_name FROM user_emp WHERE emp_role = 3 AND is_deleted != 99 ORDER BY emp_name ASC`;
  try {
    const result = await pgDB.query(sql);
    data = {
      status: true,
      message: `Success`,
      result: result,
    };
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};



const selectCountSale = async (page) => {
  sql = `SELECT COUNT(*) FROM user_emp WHERE emp_role = 3 AND is_deleted != 99`;
  let count = await pgDB.query(sql);
  return count[0].count;
};

const updateEmpPassword = async (obj) => {
  sql = 'UPDATE user_emp SET emp_password=${emp_password} WHERE emp_uuid=${emp_uuid} RETURNING *';
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        message: `Update Success`,
        result: [],
      };
    } else {
      data = {
        status: false,
        message: `Unsuccess`,
        result: [],
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};



module.exports = {
  findUsername,
  createEmp,
  updateEmp,
  deleteEmp,
  selectAllAdmin,
  selectCountAdmin,
  selectEmpByUID,
  selectAllSale,
  selectCountSale,
  updateEmpPassword,
  selectAllSaleForCustomerMatch
};
