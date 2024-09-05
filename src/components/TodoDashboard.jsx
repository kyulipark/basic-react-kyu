import {
  BadgeCheckIcon,
  CameraIcon,
  EllipsisIcon,
  MonitorCheckIcon,
} from "lucide-react";
import styled from "styled-components";

const TodoDashboard = () => {
  return (
    <DashboardSection>
      <DashboardHeader>
        <h1>Todo Dashboard</h1>
      </DashboardHeader>
      <DashboardCardList>
        <DashboardCard flex="2" color="orange">
          <div>
            <BadgeCheckIcon />
            <EllipsisIcon />
          </div>
          <p>
            16 <br /> New Task
          </p>
        </DashboardCard>
        <DashboardCard flex="1" color="teal">
          <div>
            <MonitorCheckIcon />
            <EllipsisIcon />
          </div>
          <p>
            {" "}
            3 <br /> completed
          </p>
        </DashboardCard>
        <DashboardCard flex="1" color="tomato">
          <div>
            <CameraIcon />
            <EllipsisIcon />
          </div>
          <p>
            14 <br /> pending
          </p>
        </DashboardCard>
      </DashboardCardList>
    </DashboardSection>
  );
};

export default TodoDashboard;

const DashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DashboardHeader = styled.div`
  h1 {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const DashboardCardList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const DashboardCard = styled.div`
  background-color: ${(props) => props.color};
  padding: 1rem;
  border-radius: 1rem;
  height: calc((728px / 4));

  color: white;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: ${(props) => props.flex};

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
