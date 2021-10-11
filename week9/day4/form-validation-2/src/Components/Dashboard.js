import React from 'react'
import { MainDashboardDiv } from '../Styled-components/DashBoardStyle'
import Chart from './Chart'
import WorkOrders from './WorkOrders'


export default function Dashboard() {
    return (
        <MainDashboardDiv>
            
            <Chart></Chart>
            <WorkOrders/>
            
        </MainDashboardDiv>
    )
}
