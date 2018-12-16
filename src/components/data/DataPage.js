import React, { Component } from 'react';
import {connect} from "react-redux";

import Chart from "../chart/Chart";
import {filterData, getData, groupData} from "../../actions/dataActions";
import DropDown from "../dropdown/DropDown";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faCalendar} from '@fortawesome/free-solid-svg-icons';

class DataPage extends Component {
    constructor(props) {
        super(props);

        this.groupBy = this.groupBy.bind(this);
        this.filterBy = this.filterBy.bind(this);
    }

    componentDidMount() {
        this.props.getData();
    }

    groupBy(type) {
        this.props.groupData(type);
    }

    filterBy(type, value) {
        this.props.filterData(type, value);
    }

    render() {
        const {data, groupBy, filters} = this.props;

        return (
            <div className="container py-4">
                <div className="mt-5">
                    <h1>Data <span className="font-weight-normal">Gross</span></h1>
                    <p className="text-muted">You can see, filter, edit and cancel all pending orders</p>
                </div>

                <div className="form-row align-items-center my-3">
                    <div className="col-auto" onSelect={() => {}}>
                        <DropDown options={["Volume", "Value", "Pricing"]}>
                            <span className="text-muted">Data: <b className="text-primary">Volume</b></span>
                        </DropDown>
                    </div>
                    <div className="col-auto">
                        <DropDown options={["2018", "2017", "2016"]} onSelect={(year) => this.filterBy("year", year)}>
                            <span className="text-secondary">
                                <FontAwesomeIcon icon={faCalendar}/>
                                <span className="ml-1 text-primary">{filters.year || 'Year'}</span>
                            </span>
                        </DropDown>
                    </div>
                    <div className="col-auto">
                        <DropDown options={["May", "Jun", "Jul"]} onSelect={(month) => this.filterBy("month", month)}>
                            <span className="text-secondary">
                                <FontAwesomeIcon icon={faCalendar}/>
                                <span className="ml-1 text-primary">{filters.month || 'Month'}</span>
                            </span>
                        </DropDown>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-fill bg-light rounded p-1">
                            {["month", "day", "year"].map(groupType =>
                                <button key={groupType} type="button" className={`btn text-uppercase w-100 ${groupBy === groupType ? 'btn-primary' : 'btn-light text-primary'}`} onClick={() => this.groupBy(groupType)}>{groupType}</button>
                            )}
                        </div>
                    </div>
                    <div className="ml-auto col-auto">
                        <div className="input-group">
                            <input type="text" className="form-control border-right-0" placeholder="Search"/>
                            <div className="input-group-append">
                                <span className="input-group-text text-secondary"><FontAwesomeIcon icon={faSearch}/></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-3">
                    {data && data.length > 0 && <Chart data={data} dataKey={groupBy}/>}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const {data, groupBy, filters} = state.data;
    return {
        data,
        groupBy,
        filters,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getData: () => dispatch(getData()),
        groupData: (type) => dispatch(groupData(type)),
        filterData: (type, value) => dispatch(filterData(type, value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPage);