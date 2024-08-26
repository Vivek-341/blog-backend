module.exports.SELECT_QUERY = 'SELECT * FROM USER';
module.exports.SELECT_QUERY_ID = 'SELECT * FROM USER where ID = ?';
module.exports.SELECT_QUERY_NAME = 'SELECT * FROM USER where NAME = ? AND PASSWORD = ?';
module.exports.INSERT_QUERY=`INSERT INTO USER (NAME, PASSWORD, EMAIL) 
                                                values  (?,?,?)`;
module.exports.UPDATE_QUERY=`UPDATE USER SET NAME=?, PASSWORD=? , EMAIL=? , PHONE_NO=?, DOB=? where ID = ?`;
module.exports.DELETE_QUERY='DELETE FROM USER where id=?';
