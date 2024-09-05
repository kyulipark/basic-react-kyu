import styled from "styled-components";

const TodoDashboard = () => {
  return (
    <DashboardSection>
      <DashboardCardList>
        <DashboardCard>16 New Task</DashboardCard>
        <DashboardCard>3 completed</DashboardCard>
        <DashboardCard>14 pending</DashboardCard>
        <DashboardCard>what the f</DashboardCard>
      </DashboardCardList>
    </DashboardSection>
  );
};

export default TodoDashboard;

const DashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// const DashboardHeader = styled.div`
//   h1 {
//     font-size: 1rem;
//   }
// `;

const DashboardCardList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const DashboardCard = styled.div`
  background-color: orange;
  padding: 8px;
  border-radius: 1rem;
  width: 120px;
  height: 120px;
  margin: 8px;
  color: white;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: end;

  &:first-child {
    width: 240px;
  }
`;
