import React from "react";
import { graphql } from "gatsby";
import styled from '@emotion/styled'

import userlogo from '../pics/avatar.jpg'

const Profile = (props) => {
  return (
    <div>
      <Heading>
        <Avatar
          // src="https://img.esa.io/uploads/production/teams/6967/icon/thumb_ms_fec180ecca810585b0ad19eb60c24fcc.jpg"
          src={userlogo}
          alt="mottox2"
        />
        <div>
          <Name>{props.UserInformation.authorName}</Name>
          <Role>{props.UserInformation.role}</Role>
        </div>
      </Heading>
      <Description>
        试验性质的博客V0.0.1~
        <br />
        基于Gatsby和React
      </Description>
    </div>
  );
};

export const query = graphql`
  fragment UserInformation on Site {
    siteMetadata {
      authorName
      role
    }
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  height: 42px;
  width: 42px;
  margin-right: 8px;
  border-radius: 21px;
`;

const Name = styled.h3`
  font-size: 16px;
  color: #30627a;
  letter-spacing: 0.5px;
  margin-block-start: 0;
  margin-block-end: 0;
`;
const Role = styled.p`
  margin-top: 1px;
  font-size: 12px;
  letter-spacing: 0.5px;
  margin-block-end: 0;
`;

const Description = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 8px;
  line-height: 1.7;
`;

export default Profile;
