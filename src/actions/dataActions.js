export function getData() {
    return {type: 'GET_DATA'}
}

export function groupData(groupType) {
    return {type: 'GROUP_BY', groupType}
}

export function filterData(filterType, filterValue) {
    return {type: 'FILTER_BY', filterType, filterValue}
}