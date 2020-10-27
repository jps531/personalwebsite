import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import { EmojiPeople, Work, AccountTree, School, SportsFootball, ContactPhone } from '@material-ui/icons';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const list = [
  {
    primaryText: "Introduction",
    reference: "#introduction",
    icon: <EmojiPeople/>
  },
  {
    primaryText: "Work Experience",
    reference: "#work",
    icon: <Work/>
  },
  {
    primaryText: "Projects",
    reference: "#projects",
    icon: <AccountTree/>
  },
  {
    primaryText: "Education",
    reference: "#education",
    icon: <School/>
  },
  {
    primaryText: "Hobbies",
    reference: "#hobbies",
    icon: <SportsFootball/>
  },
  {
    primaryText: "Contact",
    reference: "#contact",
    icon: <ContactPhone/>
  }
];
export default function SideContent() {
  
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return(
  <List>
    {list.map(({ primaryText, reference, icon }, i) => (
      <ListItemLink key={primaryText} href={reference} button selected={selectedIndex === i} onClick={(event) => handleListItemClick(event, i)}>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText
          primary={primaryText}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItemLink>
    ))}
  </List>
  )
};
