import styled from 'styled-components';

export const Heading = styled.h3`
	font-weight: 400;
	color: gray;
`;

export const Text = styled.p`
	color: darkgray;
`;

export const Thumbnail = styled.span`
	font-size: 50px;
`;

//Layout atoms
export const Flex = styled.div`
	display: flex;
`;

export const Center = styled(Flex)`
	min-height: 100vh;
	justify-content: center;
	align-items: center;
`;
export const Selectn = styled.div`
	width:400px;
	margin:20px auto ;
`;

export const Buttonn = styled.button`
  background-color:red ;
  color: white;
  padding: 5px 15px;
  width:150px;
  margin:20px auto ;
  height: 5vh;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: gray;
  }
  
`;