import React, { useState, useEffect } from "react";
import { Card, Avatar } from "antd";
const { Meta } = Card;

const Cards = (props) => {
  
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(props.userData);
  }, [props.userData]);

  const onDeleteUser = (userObj) => {
    const filteredUserList = [...userList].filter(
      (user) => userObj.id !== user.id
    );
    setUserList(filteredUserList);
  };

  return (
    <>
      {userList &&
        userList.map((user, idx) => {
          return (
            <Card
              style={{ width: 300 }}
              key={`${user.id}#${idx}`}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              /* actions={[
              <SettingOutlined key="setting" />,
            ]} */
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          );
        })}
    </>
  );
};

export default Cards;
