import React, { Component } from "react";
import { Table, ButtonToolbar, Button } from "react-bootstrap";
import PolicyRow from "./PolicyRow";
import "../../css/policy-components/PolicyTable.css";


class PolicyTable extends Component {

    render() {
        const onPolicyTableUpdate = this.props.onPolicyTableUpdate;
        const rowDel = this.props.onRowDel;
        const policy = this.props.policy.map((polic) => {
            return (<PolicyRow
                onPolicyTableUpdate={onPolicyTableUpdate}
                polic={polic}
                onDelEvent={rowDel.bind(this)}
                key={polic.id} />)
        });
        return (
            <div>
                <ButtonToolbar className="add-btn">
                    <Button onClick={this.props.onRowAdd}>Add</Button>
                </ButtonToolbar>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>User-Group</th>
                            <th>Mode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {policy}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default PolicyTable;
