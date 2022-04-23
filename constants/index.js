const HTTP_STATUS = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
};

const ERROR_MESSAGE = {
    NOT_FOUND_ROUTE: '查無此頁面',
    DATA_ERROR: '資料錯誤',
    CREATE_ERROR: '建立失敗',
    UPDATE_ERROR: '更新失敗',
    NOT_FOUND_ID: '查無此 ID',
    NOT_FOUND_ID_OR_DATA_ERROR: '查無此 ID 或是資料錯誤',
};

module.exports = {
    HTTP_STATUS,
    ERROR_MESSAGE,
};
