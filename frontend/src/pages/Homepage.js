/** @format */
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { roomActions } from "../redux/room";
import { room } from "../api/api";
import axios from "axios";
import RoomList from "./homepage/RoomList";
import UserList from "./homepage/UserList";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid, Button } from "@mui/material"; //contain
function Homepage(props) {
  const [cropen, setCropen] = useState(false);
  const roomTitle = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => {
    return state.user.value.userId;
  });
  const handleJoinRoom = (roomId) => {
    //axios register
    axios({
      url: room.joinRoom(),
      method: "post",
      data: {
        roomId: roomId,
        userId: userId,
      },
    }).then((res) => {
      navigate("/openvidu", { replace: true });
    });
  };
  const handleCreateRoom = () => {
    //axios 추가 유저아이디, 타이틀
    console.log(roomTitle.current.value, userId);
    axios({
      url: room.createRoom(),
      method: "post",
      data: {
        title: roomTitle.current.value,
        userId: userId,
      },
    }).then((res) => {
      dispatch(roomActions.setRoom(res.data));
      handleJoinRoom(res.data.roomId);
    });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: room.getRoom(),
    }).then((res) => {
      dispatch(roomActions.getRooms(res.data));
    });
  });
  return (
    <Grid item container spacing={2}>
      <Grid item xs={12} md={9}>
        <RoomList></RoomList>
      </Grid>
      <Grid item xs={12} md={3}>
        <UserList></UserList>
      </Grid>
      <Button
        onClick={() => {
          setCropen((cropen) => !cropen);
        }}
      >
        방 생성
      </Button>
      <Modal
        open={cropen}
        onClose={() => {
          setCropen((cropen) => {
            return !cropen;
          });
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            minWidth: "200px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "20vw",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          <TextField
            id="outlined-basic2"
            label="Outlined"
            variant="outlined"
            defaultValue=""
            sx={{}}
            inputRef={roomTitle}
          />
          <Button
            sx={{ display: "block" }}
            onClick={() => {
              handleCreateRoom();
              setCropen((cropen) => {
                return !cropen;
              });
            }}
          >
            change
          </Button>
          <Button
            sx={{ display: "block" }}
            onClick={(e) => {
              setCropen((cropen) => {
                return !cropen;
              });
            }}
          >
            cancel
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
}
export default Homepage;
