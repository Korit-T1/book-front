import axios from "axios";
import getServerAddress from "../../constants/serverAddress";

const LOCAL_ADDRESS = 'localhost:8080';//개발용
const DEPLOY_ADDRESS = '43.203.57.88';  //배포용 (constance안에 getServerAddress에 보관)
//사용예시 `http://${getSErverAddress()}/~~~~/~~~~`
const instance = axios.create({
    baseURL: getServerAddress(),
    headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken")
    }
});

export default instance;