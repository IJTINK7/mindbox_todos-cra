import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import {useState} from "react";
import {ExpandMore} from "@mui/icons-material";
import {TodolistInput} from "./TodolistInput";
import {TasksBar} from "./TasksBar";
import {ControlBar} from "./ControlBar";

export function NestedList() {
	const [open, setOpen] = useState<boolean>(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<div style={{display: "flex", flexDirection: "column"}}>
			<List
				component="div"
				style={{margin: 0, padding: 0}}
			>
				<div style={{display: "flex"}}>
					<ListItemButton onClick={handleClick} style={{backgroundColor: 'white'}}>
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<TodolistInput/>
				</div>
				<Collapse in={open} unmountOnExit>
					<List style={{backgroundColor: 'white'}}>
						<hr/>
						<TasksBar/>
						<ControlBar/>
					</List>
				</Collapse>
			</List>
		</div>
	);
}
