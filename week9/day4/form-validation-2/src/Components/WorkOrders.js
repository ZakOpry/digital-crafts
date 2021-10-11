import React from 'react'
import { HeaderDiv, TableDiv, WorkorderDiv } from '../Styled-components/WorkOrdersStyle'

export default function WorkOrders() {
    return (
        <WorkorderDiv>
            <TableDiv>
                <HeaderDiv>
                <h2>Work Orders</h2>
                </HeaderDiv>
            </TableDiv>
        </WorkorderDiv>
    )
}
