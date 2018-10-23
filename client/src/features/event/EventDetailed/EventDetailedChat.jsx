import React from "react";
import { Segment, Comment, Header, Button, Form } from "semantic-ui-react";

function EventDetailedChat({ event }) {
  return (
    <div>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="teal"
        style={{ border: "none" }}
      >
        <Header>بحث درباره این رویداد</Header>
      </Segment>

      <Segment attached>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a">آرش</Comment.Author>
              <Comment.Metadata>
                <div> امروز </div>
              </Comment.Metadata>
              <Comment.Text>خوشمزس!!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>پاسخ</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a">سلیمان</Comment.Author>
              <Comment.Metadata>
                <div>دیروز</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>عالیه پسر ...کاش میخوردم</p>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>پاسخ</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src="/assets/user.png" />
                <Comment.Content>
                  <Comment.Author as="a">امیر</Comment.Author>
                  <Comment.Metadata>
                    <div>Just now</div>
                  </Comment.Metadata>
                  <Comment.Text>ها کوره از دس دادی :)</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a">محسن</Comment.Author>
              <Comment.Metadata>
                <div>5 روز پیش</div>
              </Comment.Metadata>
              <Comment.Text>ای تک خورا</Comment.Text>
              <Comment.Actions>
                <Comment.Action>پاسخ</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button
              content="ارسال پست"
              labelPosition="right"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </Segment>
    </div>
  );
}

export default EventDetailedChat;
