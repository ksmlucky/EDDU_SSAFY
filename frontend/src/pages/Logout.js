import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../redux/token';
import { useEffect } from 'react';


function Logout(){
    // store에 저장된 Access Token 정보를 받아 온다
    const token = useSelector(state => state.token.value);
    console.log(token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(deleteToken());
    console.log(token);
    useEffect(()=>{
        if(token ===""){
            navigate("/", { replace: true });
        }
    })
   
}

export default Logout;