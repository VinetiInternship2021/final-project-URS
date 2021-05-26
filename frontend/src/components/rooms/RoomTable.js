import React  from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import PropTypes from 'prop-types';

import EditRoom from './EditRoom';
import DeleteRoom from './DeleteRoom';

function RoomTable ({ rooms }) {
    const seatsFilter = {
        seat1: '',
        seat2: ''
    };

    const onSeatsFilterChange = (e, onChange, index) => {
        seatsFilter[index] = e.target.value;
        onChange(e.target.value);
    };

    return (
        <React.Fragment>
            <ReactTable
                data={rooms}
                filterable
                defaultFilterMethod={(filter, row) =>
                    String(row[filter.id]) === filter.value}
                columns={[
                    {
                        Header: 'Room id',
                        accessor: 'id',
                        sortable: false,
                        filterable: false,
                    },
                    {
                        Header: 'Room type',
                        accessor: 'roomType',
                        filterMethod: (filter, row) => {
                            if (filter.value === 'all') {
                                return true;
                            }
                            return row[filter.id] === filter.value;
                        },
                        // eslint-disable-next-line react/prop-types,react/display-name
                        Filter: ({filter, onChange}) =>
                            <select
                                onChange={event => onChange(event.target.value)}
                                style={{width: '100%'}}
                                // eslint-disable-next-line react/prop-types
                                value={filter ? filter.value : 'all'}
                            >
                                <option value='all'>All</option>
                                <option value='class'>Class</option>
                                <option value='conference'>Conference</option>
                            </select>
                    },
                    {
                        Header: 'Seats count',
                        accessor: 'seatsCount',

                        filterMethod: (filter, row) => {
                            if (seatsFilter?.seat1 && !seatsFilter?.seat2) {
                                // eslint-disable-next-line react/prop-types
                                return row[filter.id] >= seatsFilter.seat1;
                            }

                            if (seatsFilter?.seat2 && !seatsFilter?.seat1) {
                                // eslint-disable-next-line react/prop-types
                                return row[filter.id] <= seatsFilter.seat2;
                            }

                            if (seatsFilter?.seat1 && seatsFilter?.seat2) {
                                // eslint-disable-next-line react/prop-types
                                return row[filter.id] >= seatsFilter.seat1 &&
                                    // eslint-disable-next-line react/prop-types
                                    row[filter.id] <= seatsFilter.seat2;
                            }
                        },
                        // eslint-disable-next-line react/prop-types,react/display-name
                        Filter: ({ onChange }) =>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <input onChange={event => onSeatsFilterChange(event, onChange, 'seat1')}/>
                                <input onChange={event => onSeatsFilterChange(event, onChange, 'seat2')}/>
                            </div>
                    },
                    {
                        Header: '',
                        id: 'actions',
                        sortable: false,
                        filterable: false,
                        // eslint-disable-next-line react/display-name
                        Cell: (value) => {
                            return <div style={{display: 'flex', flexDirection: 'row'}}>
                                <EditRoom roomId={value.original.id}/>
                                <DeleteRoom roomId={value.original.id}/>
                            </div>;
                        },
                    },
                ]}
                defaultPageSize={10}
                className='-striped -highlight'/>
        </React.Fragment>
    );
}

RoomTable.propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.object)
};

export default RoomTable;
