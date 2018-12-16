const dataFromApi = {
    'month' : [
        {month: 'Jan', year: '2018', day: '1', effective: 4000, estimated: 2400},
        {month: 'Feb', year: '2018', day: '21', effective: 3000, estimated: 1398},
        {month: 'Mar', year: '2018', day: '27', effective: 2000, estimated: 9800},
        {month: 'Apr', year: '2016', day: '30', effective: 2780, estimated: 3908},
        {month: 'May', year: '2017', day: '14', effective: 1890, estimated: 4800},
        {month: 'Jun', year: '2017', day: '23', effective: 2390, estimated: 3800},
        {month: 'Jul', year: '2017', day: '17', effective: 3490, estimated: 4300},
    ],
    'year' : [
        {year: '2016', month: 'May', day: '13', effective: 14000, estimated: 12400},
        {year: '2017', month: 'Jun', day: '15', effective: 13000, estimated: 11398},
        {year: '2018', month: 'Jul', day: '21', effective: 22000, estimated: 19800},
    ],
    'day' : [
        {day: '1',  year: '2018', month: 'Jan', effective: 100, estimated: 400},
        {day: '11', year: '2018', month: 'Feb', effective: 100, estimated: 398},
        {day: '13', year: '2018', month: 'Mar', effective: 100, estimated: 800},
        {day: '15', year: '2016', month: 'Apr', effective: 780, estimated: 908},
        {day: '21', year: '2017', month: 'May', effective: 890, estimated: 800},
        {day: '22', year: '2017', month: 'Jun', effective: 390, estimated: 800},
        {day: '25', year: '2017', month: 'Jul', effective: 490, estimated: 300},
    ],
};

const initialState = {
    data: [],
    groupBy: 'month',
    filters: {
        "year": null,
        "month": null,
    }
};

export default function dataReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_DATA':
            return {
                ...state,
                data: dataFromApi[state.groupBy],
            };
        case 'GROUP_BY':
            return {
                ...state,
                groupBy: action.groupType,
                filters: initialState.filters,
                data: dataFromApi[action.groupType],
            };
        case 'FILTER_BY':
            const filters = {
                ...state.filters,
                [action.filterType]: action.filterValue,
            };

            let data = dataFromApi[state.groupBy];
            if(filters.year) data = data.filter(item => filters.year === item.year);
            if(filters.month) data = data.filter(item => filters.month === item.month);

            return {
                ...state,
                filters,
                data,
            };
        default:
            return state;
    }
}