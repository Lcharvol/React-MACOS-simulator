import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  min-width: 400px;
  min-height: 300px;
`;

export const Corner = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: 1001;
  cursor: ${({ cursor }) => cursor};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
`;

export const Side = styled.div`
  position: absolute;
  z-index: 1000;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: ${({ cursor }) => cursor};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
`;
