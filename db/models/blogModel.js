module.exports.SELECT_QUERY = 'SELECT * FROM BLOG';
module.exports.SELECT_QUERY_ID = 'SELECT * FROM BLOG where ID = ?';
module.exports.INSERT_QUERY=`INSERT INTO BLOG (TITLE, CONTENT, CREATED_DATE, CREATED_BY, MODIFIED_DATE) 
                                    values  (?,?,?,'1',?)`;
module.exports.UPDATE_QUERY=`UPDATE BLOG SET TITLE=?, CONTENT=? where ID = ?`;
module.exports.DELETE_QUERY='DELETE FROM BLOG where id=?';
