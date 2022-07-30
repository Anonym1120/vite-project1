import requestJson from '../utils/requestJson';

export const apiTableData = parameters => requestJson.get('/TableData.json', parameters);

