import requestJson from '../utils/requestJson';

export const apiTableData = parameters => requestJson.post('/tableData.json', parameters);

